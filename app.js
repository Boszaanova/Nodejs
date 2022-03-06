const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const debug = require('debug')('app');

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send("hello world");

})
app.listen(port, () =>{

    debug("Listening on port %d",port);

}
)