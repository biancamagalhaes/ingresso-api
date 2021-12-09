
import express from 'express';
import {novo, listaAlunos, listaAlunosPorAula, aulaAluno} from '../service/aluno';

const app = express();
app.use(express.json())

app.post('/novo', async function (req, res) {
    try{
        const body = req.body;
        if (!(body.nome, body.email, body.curso, body.aulaId, body.experiencia)) {
            throw({ detail: "Dados não formatados corretamente", code: '0' });
        }
        const aluno = await novo({nome: body.nome, email: body.email, curso: body.curso, experiencia: body.experiencia, aulaId: body.aulaId});
        if (aluno){
            res.json({message: 'Aluno cadastrado com sucesso!', aluno});
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
        const alunos = listaAlunos();
        res.json({alunos});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

app.get('/lista/:id', function (req, res) {
    try{
        const id = req.params.id;
        const alunos = listaAlunosPorAula(id);
        res.json({alunos});
        res.end();
    } catch (e) {
        console.error(e);
        res.status(400).send({error: e.detail, code: e.code})
        res.end();
    }
});

export default app;