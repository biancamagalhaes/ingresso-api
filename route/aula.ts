import express from 'express';
import {novo, listaAulas} from '../service/aula';

const app = express();

app.use(express.json())

app.post('/novo', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.tema, body.local, body.dataHora)) {
            throw({ detail: "Dados não formatados corretamente", code: '0' });
        }
        const aula = await novo(body);
        if (aula){
            res.json({message: 'Aula criada com sucesso!', aula});
        }
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

app.get('/lista', function (req, res) {
    try{
        const aulas = listaAulas();
        res.json({aulas});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

export default app;