"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../db/index"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res) {
    index_1.default.query('SELECT * from NewDraft();', [])
        .then(results => res.send(results.rows))
        .catch(err => console.error(err.stack));
});
exports.default = router;
