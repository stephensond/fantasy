"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const draft_1 = __importDefault(require("../routes/draft"));
const newdraft_1 = __importDefault(require("../routes/newdraft"));
const selectone_1 = __importDefault(require("../routes/selectone"));
const selectall_1 = __importDefault(require("../routes/selectall"));
const enddraft_1 = __importDefault(require("../routes/enddraft"));
const adduser_1 = __importDefault(require("../routes/adduser"));
const login_1 = __importDefault(require("../routes/login"));
const app = express_1.default();
var PORT = process.env.PORT || 9000;
const server = http_1.default.createServer(app);
server.listen(PORT);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/id', selectone_1.default);
app.use('/all', selectall_1.default);
app.use('/draft', draft_1.default);
app.use('/newDraft', newdraft_1.default);
app.use('/endDraft', enddraft_1.default);
app.use('/addUser', adduser_1.default);
app.use('/login', login_1.default);
