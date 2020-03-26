import { MSH } from "./segments";
import { HL7Obj } from './base/HL7Obj';
/**
 *
 * @param input Input HL7 string
 * @returns Replace all \n with \r and multipile \r's in a row with a single \r
 */
export declare function normalizeNewLines(input: string): string;
/**
 *
 * @param segment_string
 * @returns the first 3 letters of the segment (MSH, PID, ... )
 */
export declare function getSegmentNameFromString(segment_string: string): string;
/**
 *
 * @param input fulltext HL7 message
 * Call After normalizing all of the new lines
 *
 * @returns parsed MSH Segment
 */
export declare function getMSHFromMessage(input: string): MSH;
/**
 *
 * @param data any string data
 * @returns data wrapped with MLLP headers and tailers
 */
export declare function wrapInMLLP(data: string): string;
/**
 * @description Creates an ACK for any hl7 message. DOES NOT WRAP IN MLLP
 * @param message Text HL7 message after normalized lines
 * @param ack_code AA - Application Accept | AE - Application Error | AR - Application Reject
 * @param error_message Optional Error message to be included in thh ACK
 */
export declare function buildACK(message: string, ack_code: string, error_message?: string): string;
/**
 * Returns a string version of the date that has been encoded in HL7 Date formats
 * @param date
 */
export declare function encodeDateToHL7String(date: Date): string;
/**
 *
 * @param dateStr String of characters in the HL7 date format. yyyymmddhhmm
 */
export declare function parseDateFromHL7String(dateStr: string): Date;
/**
 *
 * @param prefix optional prefix to be put at the beginning of the ID
 * @returns a unique message controll ID (based on the current date)
 */
export declare function messageControlIDGenerator(prefix?: string): string;
/**
 *
 * @param segments HL7Obj[]
 * @returns The String version of the message to be sent over MLLP
 */
export declare function buildStringMessageFromArray(segments: HL7Obj[]): string;
/**
 *
 * @param paragraphs A multiline body of text that.
 * @returns A single line of text where each new line is a ~
 */
export declare function normalizeNewlinesForOBX(paragraphs: string): string;
/**
 *
 * @param input String that needs to be encoded
 * Replaces encoded characters with the appropriate escape sequence.
 */
export declare function encodeSpecialCharacters(input: string): string;
