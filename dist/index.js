"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var Server_1 = require("./classes/Server");
var anime_route_1 = __importDefault(require("./routes/anime.route"));
var manga_route_1 = __importDefault(require("./routes/manga.route"));
var user_route_1 = __importDefault(require("./routes/user.route"));
var auth_routes_1 = __importDefault(require("./routes/auth.routes"));
var status_route_1 = __importDefault(require("./routes/status.route"));
var rating_route_1 = __importDefault(require("./routes/rating.route"));
var forum_route_1 = __importDefault(require("./routes/forum.route"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var server = new Server_1.Server();
var options = {
    origin: process.env.CLIENT,
    credentials: true
};
server.app.use(express_1.default.urlencoded({ limit: '5mb', extended: true }));
server.app.use(express_1.default.json({ limit: '5mb' }));
server.app.use(cors_1.default(options));
server.app.use(express_1.default.static('./dist/public/'));
server.app.use(express_1.default.static('./dist/documentation/'));
server.app.use('/anime', anime_route_1.default);
server.app.use('/manga', manga_route_1.default);
server.app.use('/user', user_route_1.default);
server.app.use('/auth', auth_routes_1.default);
server.app.use('/status', status_route_1.default);
server.app.use('/rating', rating_route_1.default);
server.app.use('/forum', forum_route_1.default);
server.app.get('/documentation', function (req, resp) {
    resp.sendFile('./index.html', { root: 'dist/documentation/' });
});
server.app.get('/*', function (req, resp) {
    resp.sendFile('index.html', { root: 'dist/public/' });
});
server.start(function () {
    console.log("Server started on port: " + server.port);
});
mongoose_1.default.connect('mongodb+srv://ohayo:ohayo@cluster0.jkzgg.mongodb.net/ohayo', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("error", err);
        throw err;
    }
    else {
        console.log('Connected to DB');
    }
});
