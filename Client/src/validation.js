
function validation(userData){
    const errores = {};
    if(userData.email){
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userData.email)) errores.email = "El nombre de usuario tiene que ser un email.";
        if(userData.email.length>35) errores.email = "El nombre de usuario no puede tener más de 35 caracteres";
    }
    if(userData.email === "") errores.email="El nombre de usuario no puede estar vacío."
    if(userData.password){
        if(!/\d/.test(userData.password)) errores.password = "La contraseña tiene que tener almenos un número";
        if(userData.password.length < 6 || userData.password.length > 10) errores.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    }
    if (userData.password === "") errores.password = "la contraseña no puede estar vacia"
    
    return errores;
}


export default validation;
