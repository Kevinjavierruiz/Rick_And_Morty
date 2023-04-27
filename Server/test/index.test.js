const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const obj = {
    id:932,
    name:"kev",
    species:"human",
    origin:{
        name:"Earth"
    },
    image:"image.jpg",
    gender:"male"
}
describe("test de RUTAS",()=>{
    describe("GET /rickandmorty/character/:id",()=>{
        it("Responde con status: 200", async ()=>{
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200);
        })
        it("Responde un objeto con las propiedades: 'id', 'name','species','gender','status','origin','image'", async ()=>{
            const response = await request.get("/rickandmorty/character/1");
            for(const props in obj){
                expect(response.body).toHaveProperty(props)
            }

        })
        it("si hay un error responde con status: 500",async ()=>{
            const response = await request.get("/rickandmorty/character/900");
            expect(response.statusCode).toBe(500);
        })
    })
    describe("GET /rickandmorty/login",()=>{
        it("se pasa la informacion de login 'email' y 'password' correctas",async ()=>{
            const response = await request.get("/rickandmorty/login/?email=ruizdiazkevinjavier270@gmail.com&password=kevin210");
            expect(response.body).toEqual({
                access: true,
             })
        })
        it("devuelve la propiedad access en false cuando la informacion es incorrecta",async ()=>{
            const response = await request.get("/rickandmorty/login/?email=ruizdiazkevinjavier270@gmail.comm&password=kevin2100");
            expect(response.body).toEqual({
                access: false,
             })
        })
    })
    describe("POST /rickandmorty/fav",()=>{
        it("lo que se envia en body debe ser devuelto en un arreglo",async ()=>{
            const response = await request.post("/rickandmorty/fav").send(obj);
            expect(response.body).toContainEqual(obj)
        })
        it("si vuelvo a enviar un nuevo elemento contiene tambien el anterior",async ()=>{
            obj.id = 2002;
            obj.name = "kkeee";
            const response = await request.post("/rickandmorty/fav").send(obj);
            expect(response.body.length).toBe(2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id",()=>{
        it("si no hay ID devuelve los elementos sin modificar",async ()=>{
            const response = await request.delete("/rickandmorty/fav/2")
            expect(response.body.length).toBe(2)
        })
        it("si el id es valido se elimina al personaje de favoritos",async ()=>{
            const response = await request.delete("/rickandmorty/fav/2002")
            expect(response.body.length).toBe(1)
        })
    })
})