import { IMain, IDatabase } from "pg-promise";
import pgPromise from 'pg-promise';

const pgp: IMain = pgPromise({});

const connection: any = {
    user: 'postgres',
	password: 995943,
	host: 'localhost',
	port:  5433,
	database: 'ingresso-api'
}

const db: IDatabase<any> = pgp(connection);

export default db;