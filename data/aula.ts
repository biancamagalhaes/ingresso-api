import database from '../config/postgresConnection';

export const novaAula = (aula: {tema: string, local: string, dataHora: string}) => {
	return database.query(
        `insert into aula(tema, data_hora, "local") 
         values ('${aula.tema}', '${aula.dataHora}', '${aula.local}')
         returning *;`
    );
};

export const listaAulas = () => {
	return database.query(
        `select tema, data_hora, "local"
         from aula;`
    );
};

export const aulaPorId = (id: number) => {
	return database.query(
        `select tema, data_hora, "local"
         from aula
         where aula_id = ${id};`
    );
};