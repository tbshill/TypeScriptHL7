"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mllpProtocol(emitter, socket, encodingChars) {
    let message = '';
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);
    const header = encodingChars ? encodingChars.head : VT;
    const trailer = encodingChars ? encodingChars.tail : FS + CR;
    return (onDataBufferData) => {
        let str_data = onDataBufferData.toString();
        if (str_data.indexOf(header) > -1) {
            message = '';
            str_data = str_data.replace(header, '');
        }
        message += str_data;
        if (str_data.indexOf(trailer) > -1) {
            message = message.replace(trailer, '');
            emitter.emit('mllp', { message, socket });
        }
    };
}
exports.mllpProtocol = mllpProtocol;
