import { MSA, MSH } from "./segments";

export function normalizeNewLines(input: string): string {
    let normalized_newlines = input.replace(new RegExp(/\r/, 'g'), '\n');
    // console.log(typeof (normalizeNewlines))
    normalized_newlines = normalized_newlines.replace(new RegExp(/\n{2,}/, 'g'), '\n');
    return normalized_newlines;
}

export function getSegmentNameFromString(input: string): string {
    return input.substr(0, 3);
}

export function getMSHFromMessage(input: string): MSH {
    const msh_string = input.split('\n')[0];
    const msh = new MSH();
    msh.fromString(msh_string);
    return msh;

}

export function wrapInMLLP(data: string): string {
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);

    return VT + data + FS + CR;
}

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