const { log } = require("console");

module.exports = logger;


function logger() {
    return(req,res,next) => {
        log("requete reçue",req.method,req.url);
        next();
    };
    
}