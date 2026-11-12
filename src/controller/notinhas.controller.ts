import type { Request, Response } from 'express';

import * as service from '../service/notinhas.service.ts';

export async function listar(req: Request, res: Response) {
    const buscar = typeof req.query.buscar === 'string' ? req.query.buscar : undefined;
    res.status(200).json(await service.listar(buscar));
}

export async function criar(req: Request, res: Response) {
    const { titulo, conteudo } = req.body ?? {};
    console.log('Request body:', req.body);
    res.status(201).json(await service.criar(titulo, conteudo));
}