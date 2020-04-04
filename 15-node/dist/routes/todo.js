"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendStatus(200);
});
router.post('/');
router.patch('/');
router.delete('/');
exports.default = router;
