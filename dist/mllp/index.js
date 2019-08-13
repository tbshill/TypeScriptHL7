"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var net = __importStar(require("net"));
var events_1 = require("events");
var MLLPServer = /** @class */ (function (_super) {
    __extends(MLLPServer, _super);
    function MLLPServer(host, port, options) {
        var _this = _super.call(this) || this;
        _this.VT = String.fromCharCode(0x0b);
        _this.FS = String.fromCharCode(0x1c);
        _this.CR = String.fromCharCode(0x0d);
        _this.header = _this.VT;
        _this.trailer = _this.FS + _this.CR;
        _this.started = new Date();
        _this.messageCount = 0;
        _this.name = '';
        if (options) {
            _this.header = options.header || _this.header;
            _this.trailer = options.trailer || _this.trailer;
            _this.name = options.name || _this.name;
        }
        _this.host = host || '127.0.0.1';
        _this.port = port || 6000;
        _this.message = '';
        _this.socket = new net.Socket();
        _this.server = net.createServer(function (socket) {
            _this.socket = socket;
            socket.on('data', function (data) {
                var str_data = data.toString();
                console.log(str_data);
                // Check for the start of the MLLP message
                if (str_data.indexOf(_this.header) > -1) {
                    _this.message = ''; // Reset the message
                    str_data = str_data.replace(_this.header, '');
                }
                // Append the str_data to the message
                _this.message += str_data;
                // Check for closing tags
                if (str_data.indexOf(_this.trailer) > -1) {
                    _this.message = _this.message.replace(_this.trailer, ''); // Remove the trailer
                    // Emit the Data after the trailer
                    // Push the message into the Event Loop
                    // Offload the responsibility of creating an ACK 
                    // const context = this.getSummary();
                    // context.socket = socket;
                    _this.emit('mllp', { message: _this.message, socket: socket });
                    _this.messageCount += 1;
                }
            });
        });
        _this.server.on('error', function (err) {
            console.error(err);
            _this.emit('error', err);
        });
        _this.server.on('connection', function () {
            _this.emit('connection');
        });
        _this.server.on('close', function () {
            _this.emit('close');
        });
        return _this;
    }
    MLLPServer.prototype.start = function () {
        this.server.listen(this.port, this.host);
        this.emit('started');
    };
    MLLPServer.prototype.stop = function () {
        this.server.close();
        this.server.removeAllListeners();
        this.emit('stopped');
    };
    MLLPServer.prototype.wrapInMLLP = function (data) {
        return this.header + data + this.trailer;
    };
    return MLLPServer;
}(events_1.EventEmitter));
exports.MLLPServer = MLLPServer;
