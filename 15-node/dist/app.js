"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./todos/todos.route"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/todos', todos_route_1.default);
app.use((err, req, res, next) => {
    res.send({
        err, req, res, next
    });
});
app.listen(3000);
