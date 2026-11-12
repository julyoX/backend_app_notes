import 'dotenv/config';

export const PORT = Number(process.env.PORT ?? 3000);
export const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.log('MONGODB_URI is not defined in the environment variables');
    throw new Error('MONGODB_URI is not defined in the environment variables');
}