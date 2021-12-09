
import {novoAluno, novoAlunoEmAula, listaAlunos as lista, listaAlunosPorAula as listaAula} from '../data/aluno';
import {aulaPorId} from '../data/aula';


export const novo = async (aluno: {nome: string, curso: string, email: string,  aulaId: number, experiencia: boolean,}) => {
    return novoAluno(aluno).then((a) => {
        return aulaAluno(a[0].aluno_id.toString(), aluno.aulaId.toString(), aluno.experiencia).then(() => {
            return aulaPorId(aluno.aulaId).then((aula) => {
                console.log(a, aula);
                return {tema: aula[0].tema, nome: a[0].nome, email: a[0].email, hora: aula[0].data_hora, local: aula[0].local}
            });
        });
    })
}

export const aulaAluno = (alunoId: string, aulaId: string, experiencia: boolean ) => {
    return novoAlunoEmAula({alunoId, aulaId, experiencia});
}

export const listaAlunos = async () => {
    return lista();
}

export const listaAlunosPorAula = async (id: number) => {
    return listaAula(id);
}
