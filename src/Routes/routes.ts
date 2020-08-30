import express = require("express");
import PswdController from '../Controllers/PswdController';

const routes = express.Router();

routes.get('/teste', (req, res)=>{
    return res.send("teste completo");
});

routes.post('/generate', PswdController.RecieveSpecifications);

export default routes;