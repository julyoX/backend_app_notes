import { NotinhaModel } from "../model/notinhas.model.ts";

export async function listar(busca?: string){
	const filtro = busca ? { titulo: { $regex: escaparRegex(busca), $options: 'i' } } : {};
	return await NotinhaModel.find(filtro).sort({ criado_em: -1 });
}

export async function criar(titulo: string, conteudo: string){
	return NotinhaModel.create({ titulo, conteudo });
}

function escaparRegex(texto: string): string {
	return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
