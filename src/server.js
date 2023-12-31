import express from 'express';
import cors from 'cors';
import connect from './database/connection.js';
import indexRoutes from './routes/indexRoutes.js';

async function startServer() {

    const app = express();
    const PORT = process.env.PORT || 5050;

    try {
        console.clear();
        await connect();
        app.use(cors());
        app.use(express.json());
        app.use(indexRoutes);
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

export default startServer;