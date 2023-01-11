"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const InteractionHandler_1 = __importDefault(require("./helpers/InteractionHandler"));
const EventHandler_1 = __importDefault(require("./helpers/EventHandler"));
const Mongoose_1 = __importDefault(require("../database/Mongoose"));
const config = __importStar(require("../config"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const Utils_1 = __importDefault(require("./utils/Utils"));
class Client extends discord_js_1.Client {
    constructor() {
        super({
            intents: config.intents
        });
        this.config = config;
        this.events = new EventHandler_1.default(this);
        this.buttons = new InteractionHandler_1.default('Buttons');
        this.modals = new InteractionHandler_1.default('Modals');
        this.logger = new Logger_1.default();
        this.util = new Utils_1.default(this);
        this.db = new Mongoose_1.default(this);
    }
    start() {
        this.events.load();
        this.buttons.load();
        this.modals.load();
        this.db.connect()
            .then(async () => await this.login(config.internal.token));
    }
}
exports.default = Client;
