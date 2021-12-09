
import {novaAula, listaAulas as lista} from '../data/aula';
import format from "../config/formatDate";


export const novo = async (aula: {tema: string, local: string, dataHora: string}) => {
    return novaAula({tema: aula.tema, local: aula.local, dataHora: format(aula.dataHora)});
}

export const listaAulas = async () => {
    return lista();
}