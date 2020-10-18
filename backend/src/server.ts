import path from "path";
import express from "express";
import 'express-async-errors';

import "./database/connection";
import routes from "./routes";
import errorHandles from './errors/handler';

var cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandles);

app.listen(3333);
