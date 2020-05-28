"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var FakeXMLHttpRequest = /** @class */ (function () {
    function FakeXMLHttpRequest() {
        this.status = 200;
    }
    FakeXMLHttpRequest.prototype.open = function (_type, url) {
        this.url = path_1.default.resolve(__dirname, url);
    };
    FakeXMLHttpRequest.prototype.send = function () {
        var _this = this;
        // use base64 for images and utf8 for json files
        var encoding = /\.json$/gm.test(this.url) ? 'utf8' : 'base64';
        fs_1.default.readFile(this.url, { encoding: encoding }, function (err, data) {
            if (err)
                throw err;
            _this.response = data;
            _this.responseText = data;
            var event = { target: { status: _this.status } };
            _this.onload(_this, event);
        });
    };
    FakeXMLHttpRequest.prototype.onload = function (xhr, event) { };
    FakeXMLHttpRequest.prototype.onerror = function (err) { };
    FakeXMLHttpRequest.prototype.onprogress = function () { };
    return FakeXMLHttpRequest;
}());
exports.default = FakeXMLHttpRequest;
//# sourceMappingURL=fakeXMLHttpRequest.js.map