import express, { NextFunction, Request,Response } from 'express';
import todoRoutes from './todos/todos.route';
const app = express();

app.use(express.json());
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: 
    Response, next: NextFunction)=> {
    res.send({
        err, req, res, next
    });
});

app.listen(3000);
