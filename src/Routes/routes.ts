import express = require("express");

const routes = express.Router();

routes.get('/teste', (req, res)=>{
    return res.send("teste completo");
});

export default routes;