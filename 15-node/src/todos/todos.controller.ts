import { RequestHandler} from 'express';
import Todo from './todo.model';

const TODOS: Todo[] = [];

export const createTodo:RequestHandler = (req, res, next) => {
    const newTodo = new Todo(Math.random().toString(), req.body.text);
    
    TODOS.push(newTodo);

    res.status(201).send(newTodo);
};

export const getTodos: RequestHandler = (req,res) => {
    res.send(TODOS);
}

export const updateTodo: RequestHandler<{id:string}> = (req,res) => {
    const todoId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) return res.sendStatus(404);

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);

    res.sendStatus(204);
}

export const deleteTodo: RequestHandler<{id: string}> = (req,res) => {
    const todoId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) return res.sendStatus(404);

    TODOS.splice(todoIndex, 1);

    res.sendStatus(204);
}