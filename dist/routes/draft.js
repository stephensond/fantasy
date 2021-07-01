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
    index_1.default.query('UPDATE draftroom SET teamid =$1 WHERE playerid=$2', [body.team, body.id])
        .then(result => res.status(200).send(body.id.toString()))
        .catch(err => console.error(err.stack));
});
exports.default = router;
