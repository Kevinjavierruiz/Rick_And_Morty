let {getCharById} = require("../controllers/getCharById")
let {login} = require("../controllers/login")
let {postFav,deleteFav}= require("../controllers/handleFavorites");
let express = require("express")
let router = express.Router();
router.get("/character/:id",getCharById)

router.get("/login",(request,response)=>{
    login(request,response)
})
router.post("/fav",(request,response)=>{
    postFav(request,response)
})
router.delete("/fav/:id",(request,response)=>{
    deleteFav(request,response)
})

module.exports = router;
