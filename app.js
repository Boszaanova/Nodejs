const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/Public")));
 
app.set("views","./src/views");
app.set("view engine",  "ejs")

app.get("/", (req,res) =>{
    res.render('index',{username: '8888'});

})
app.listen(port, () =>{

    debug("Listening on port %d",port);

}
)