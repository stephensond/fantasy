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
    index_1.default.query('SELECT Username FROM Users WHERE username = $1 AND password = $2', [body.username, body.pass])
        .then(result => result.rows)
        .then(rows => (rows.length === 1) ? res.status(200).send(rows[0])
        : res.status(400).send())
        .catch(err => console.log(err));
});
exports.default = router;
