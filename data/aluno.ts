import database from '../config/postgresConnection';

export const novoAluno = (aluno: {nome: string, curso: string, email: string}) => {
	return database.query(
        `insert into aluno(nome, curso, email) 
         values ('${aluno.nome}', '${aluno.curso}', '${aluno.email}')
         returning *;`
    );
};

export const novoAlunoEmAula = (ids: {alunoId: string, aulaId: string, experiencia: boolean}) => {
	return database.query(
        `insert into aluno_aula(aluno_id, aula_id, experiencia) 
         values ('${ids.alunoId}', '${ids.aulaId}', '${ids.experiencia}')
         returning *;`
    );
};

export const listaAlunos = () => {
	return database.query(
        `select nome, curso, email, experiencia
         from aluno;`
    );
};

export const listaAlunosPorAula = async (id: number) => {
	const alunos = await database.query(
        `select aluno_id
         from aluno_aula
         where aula_id = ${id};`
    );

    return alunos.map((id: number) => {
        return database.query(
            `select nome, curso, email, experiencia
             from aluno
             where aluno_id = ${id};`
        );
    });
};