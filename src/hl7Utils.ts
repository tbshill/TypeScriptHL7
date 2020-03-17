import { MSA, MSH } from "./segments";
import { HL7Obj } from './base/HL7Obj';

/**
 * 
 * @param input Input HL7 string
 * @returns Replace all \r with \n and multipile \n's in a row with a single \n
 */
export function normalizeNewLines(input: string): string {
    let normalized_newlines = input.replace(new RegExp(/\n/, 'g'), '\r');
    normalized_newlines = normalized_newlines.replace(new RegExp(/\r{2,}/, 'g'), '\r');
    return normalized_newlines;
}

/**
 * 
 * @param segment_string 
 * @returns the first 3 letters of the segment (MSH, PID, ... )
 */
export function getSegmentNameFromString(segment_string: string): string {
    return segment_string.substr(0, 3);
}

/**
 * 
 * @param input fulltext HL7 message 
 * Call After normalizing all of the new lines
 * 
 * @returns parsed MSH Segment
 */
export function getMSHFromMessage(input: string): MSH {
    const msh_string = input.split('\r')[0];
    const msh = new MSH();
    msh.fromString(msh_string);
    return msh;

}

/**
 * 
 * @param data any string data
 * @returns data wrapped with MLLP headers and tailers
 */
export function wrapInMLLP(data: string): string {
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);

    return VT + data + FS + CR;
}
/**
 * @description Creates an ACK for any hl7 message. DOES NOT WRAP IN MLLP
 * @param message Text HL7 message after normalized lines
 * @param ack_code AA - Application Accept | AE - Application Error | AR - Application Reject
 * @param error_message Optional Error message to be included in thh ACK
 */
export function buildACK(message: string, ack_code: string, error_message: string = ''): string {

    const msh_string = message.split('\n')[0];


    const msh = new MSH();
    const ack_msh = new MSH();

    msh.fromString(msh_string);
    ack_msh.fromString(msh_string);

    ack_msh.sending_application.fromString(msh.receiving_application.toString());
    ack_msh.sending_facility.fromString(msh.receiving_facility.toString());
    ack_msh.receiving_application.fromString(msh.sending_application.toString());
    ack_msh.receiving_facility.fromString(msh.sending_facility.toString());

    const ack_msa = new MSA();
    ack_msa.segment.fromString('MSA');
    ack_msa.ack_code.value = ack_code;
    ack_msa.text_message.value = error_message;
    ack_msa.message_control_id.fromString(msh.message_control_id.toString());

    return [ack_msh.toString(), ack_msa.toString()].join('\n');

}

/**
 * Returns a string version of the date that has been encoded in HL7 Date formats
 * @param date 
 */
export function encodeDateToHL7String(date: Date): string {
    // console.log(typeof (date));
    date = new Date(date);

    if (date.getFullYear() == 1899) {
        return "";
    }

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1, "0", 2);
    const day = pad(date.getDate(), "0", 2);
    const hour = pad(date.getHours(), "0", 2);
    const minute = pad(date.getMinutes(), "0", 2);

    if (hour == "00" && minute == "00") {
        return `${year}${month}${day}`
    }

    return `${year}${month}${day}${hour}${minute}`
}

/**
 * @example
 *   pad(8,"0",4) -> "0008"
 * 
 * @param input number to padd
 * @param padString what to pad with
 * @param length  total length of string
 */
function pad(input: number, padString: string, length: number) {
    let str = input.toString();
    while (str.length < length)
        str = padString + str;
    return str;
}

/**
 * 
 * @param prefix optional prefix to be put at the beginning of the ID
 * @returns a unique message controll ID (based on the current date)
 */
export function messageControlIDGenerator(prefix: string = ''): string {
    return prefix + encodeDateToHL7String(new Date()) + Date.now().toString()
}
/**
 * 
 * @param segments HL7Obj[]
 * @returns The String version of the message to be sent over MLLP
 */
export function buildStringMessageFromArray(segments: HL7Obj[]) {
    return segments.map(segment => segment.toString()).join('\r');
}

/**
 * 
 * @param paragraphs A multiline body of text that.
 * @returns A single line of text where each new line is a ~
 */
export function normalizeNewlinesForOBX(paragraphs: string): string {
    return paragraphs.split("\n").join("~")
}


/**
 * 
 * @param input String that needs to be encoded
 * Replaces encoded characters with the appropriate escape sequence. 
 */
export function encodeSpecialCharacters(input: string): string {
    input = input.replace(/\\/g, '\\E\\'); // Escape Character#
    input = input.replace(/\|/g, '\\F\\'); // Feild Separator
    input = input.replace(/\^/g, '\\S\\'); // Component Separator
    input = input.replace(/&/g, '\\T\\'); // SubComponent Separator
    input = input.replace(/~/g, '\\R\\'); // Repetition Separator
    input = input.replace(/#/g, '\\P\\'); // Truncation Character
    return input;

}