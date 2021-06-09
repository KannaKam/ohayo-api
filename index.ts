import cors from 'cors'
import mongoose from 'mongoose';
import { Server } from './classes/Server';
import animeRoutes from './routes/anime.route';
import mangaRoutes from './routes/manga.route';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.routes';
import statusRoutes from './routes/status.route';
import ratingRoutes from './routes/rating.route';
import forumRoutes from './routes/forum.route';
import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const server = new Server();
const options: cors.CorsOptions = {
    origin: process.env.CLIENT!,
    credentials: true
}

server.app.use(express.urlencoded({ limit: '5mb', extended: true }));
server.app.use(express.json({ limit: '5mb' }));
server.app.use(cors(options))

server.app.use(express.static('./dist/public/'))
server.app.use(express.static('./dist/documentation/'))
server.app.use('/anime', animeRoutes)
server.app.use('/manga', mangaRoutes)
server.app.use('/user', userRoutes)
server.app.use('/auth', authRoutes)
server.app.use('/status', statusRoutes)
server.app.use('/rating', ratingRoutes)
server.app.use('/forum', forumRoutes)
server.app.get('/documentation', (req: Request, resp: Response) => {
    resp.sendFile('./index.html', { root: 'dist/documentation/' }
    );
  })
  
  server.app.get('/*', (req: Request, resp: Response) => {
    resp.sendFile('index.html', { root: 'dist/public/' }
    );
  });

server.start(() => {
    console.log("Server started on port: " + server.port);
});

mongoose.connect('mongodb+srv://ohayo:ohayo@cluster0.jkzgg.mongodb.net/ohayo',
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err: any) => {
        if (err) {
            console.log("error", err);
            throw err;
        }
        else {
            console.log('Connected to DB');

        }
    });
