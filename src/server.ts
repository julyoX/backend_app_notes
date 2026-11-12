import mongoose from 'mongoose'
import { app } from './app'
import { MONGODB_URI, PORT } from './config'

async function main() {
    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is not configured');
    }

    await mongoose.connect(MONGODB_URI);

    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main().catch((err) => {
    console.error('Error starting the server:', err);
    process.exit(1);
});