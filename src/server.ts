import express = require("express");
// import cors = require('cors');
import routes from './Routes/routes';
const app = express();

// app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(5500);