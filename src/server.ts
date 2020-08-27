import express = require("express");
// import routes from './Routes/routes';
const app = express();

app.use(express.json());
// app.use(routes);

app.listen(5500);