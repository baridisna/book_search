import express from "express";
import Router from "./routes/routes.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(Router)

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.set('view engine', 'ejs')