import express = require("express");
// import cors = require('cors');
import PswdController from './Controllers/PswdController';
const app = express();

// app.use(cors);
app.use(express.json());
const routes = express.Router();
routes.post('/generate', PswdController.RecieveSpecifications);

app.use(routes);

app.listen(5500);