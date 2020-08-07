"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = require("./todos.controller");
const router = express_1.Router();
router.get('/', todos_controller_1.getTodos);
router.post('/', todos_controller_1.createTodo);
router.patch('/:id', todos_controller_1.updateTodo);
router.delete('/:id', todos_controller_1.deleteTodo);
exports.default = router;