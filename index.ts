import express from 'express';
import path from "path";
import * as dotenv from 'dotenv';
import aluno from './route/aluno';
import aula from './route/aula';

const app = express();
const port = 5002;

dotenv.config({ path: path.resolve(__dirname, "./.env") });


app.use('/aluno', aluno);
app.use('/aula', aula);


app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;