import cors from 'cors';
import express from 'express';

import { notinhasRouter } from './route/notinhas.route';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/', notinhasRouter);
