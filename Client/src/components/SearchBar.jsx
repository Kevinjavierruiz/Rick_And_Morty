import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id,serId] = useState("");
   const handleChange=(event)=>{
      serId(event.target.value);
   }
   return (
      <div>
         {/* value siempre tiene que valer lo mismo que el estado, para que nadie pueda cambiarlo y dar una respuesta incorrecta al usuario */}
         <input type='search' onChange={handleChange} value={id} placeholder="Elegi un personaje por ID"/>
         <button onClick={()=> {onSearch(id);serId("")}}>Agregar</button>
      </div>
   );
}
