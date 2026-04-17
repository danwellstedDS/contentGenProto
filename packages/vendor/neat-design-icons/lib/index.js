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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconProvider = exports.default = exports.createFromIconfontCN = void 0;
var Context_1 = __importDefault(require("./components/Context"));
__exportStar(require("./icons-react"), exports);
var IconFont_1 = require("./components/IconFont");
Object.defineProperty(exports, "createFromIconfontCN", { enumerable: true, get: function () { return __importDefault(IconFont_1).default; } });
var NeatIcon_1 = require("./components/NeatIcon");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(NeatIcon_1).default; } });
var IconProvider = Context_1.default.Provider;
exports.IconProvider = IconProvider;
