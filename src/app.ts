
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/router';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

//root route for check status
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
