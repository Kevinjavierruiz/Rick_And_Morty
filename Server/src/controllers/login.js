const users = require("../utils/users")
function login(request,response){
    const {email,password} = request.query;
    let userAccess = users.find(user => user.email === email && user.password === password);
    if(userAccess) return response.status(200).json({access:true});
    return response.status(404).json({access:false})

}

module.exports = {login};