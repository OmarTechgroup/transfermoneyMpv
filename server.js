const express = require('express');
const app = express();
const logger = require("./middleware/logger");
const route = require("./routes/route")
const path = require('path');



app.use('/',route);
app.set("views",path.join(__dirname,'views'));
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(logger());




const PORT = process.env.PORT || 1515;

app.listen(PORT,()=>{
    console.log(`application tourne sur le port,${PORT}`);
    
})