"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("./todo.model"));
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const newTodo = new todo_model_1.default(Math.random().toString(), req.body.text);
    TODOS.push(newTodo);
    res.status(201).send(newTodo);
};
exports.getTodos = (req, res) => {
    res.send(TODOS);
};
exports.updateTodo = (req, res) => {
    const todoId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0)
        return res.sendStatus(404);
    TODOS[todoIndex] = new todo_model_1.default(TODOS[todoIndex].id, text);
    res.sendStatus(204);
};
exports.deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0)
        return res.sendStatus(404);
    TODOS.splice(todoIndex, 1);
    res.sendStatus(204);
};
