"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../db/index"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', function (req, res) {
    const body = req.body;
    index_1.default.query('INSERT INTO Users (Username, Password) VALUES ($1, $2)', [body.username, body.pass])
        .then(result => res.status(200).send('Account successfully created'))
        .catch(err => res.status(400).send('Failed'));
});
exports.default = router;
