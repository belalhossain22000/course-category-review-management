
import cors from 'cors';
import express, { Application, Request, Response } from 'express';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes


//root route for check status
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
