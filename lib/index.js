"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAnimationFrame = exports.animationFrame = void 0;
var canvas_1 = __importDefault(require("canvas"));
var jsdom_1 = __importDefault(require("jsdom"));
var JSDOM = jsdom_1.default.JSDOM;
var dom = new JSDOM("<!DOCTYPE html><body></body>");
var document = dom.window.document;
var window = dom.window;
window.focus = function () { };
global.document = document;
global.window = window;
global.Image = canvas_1.default.Image;
global.window.Element = undefined;
global.navigator = { userAgent: 'node' };
// global.XMLHttpRequest = FakeXMLHttpRequest
global.HTMLCanvasElement = window.HTMLCanvasElement;
global.HTMLVideoElement = window.HTMLVideoElement;
global.URL = function () { };
global.URL.createObjectURL = function (base64) { return "data:image/png;base64," + base64; };
global.URL.revokeObjectURL = function () { };
// phaser on node variables
global.phaserOnNodeFPS = 15;
var animationFrame = function (cb) {
    if (typeof cb !== 'function')
        return 0; // this line saves a lot of cpu
    window.setTimeout(function () { return cb(0); }, 1000 / global.phaserOnNodeFPS);
    return 0;
};
exports.animationFrame = animationFrame;
window.requestAnimationFrame = function (cb) {
    return animationFrame(cb);
};
var requestAnimationFrame = window.requestAnimationFrame;
exports.requestAnimationFrame = requestAnimationFrame;
//# sourceMappingURL=index.js.map