import { HL7Obj } from "../../base/HL7Obj";
import { TS } from '../TS';
import { IS } from '../IS';
import { HD } from '../HD';
import { CN } from '..';
/**
 * Clinical User - OBR
 *  - principal_interpreter
 *  - assistant_inperpreter
 *  - technician
 *  - transcriptionist
 */
export declare class Z_CU extends HL7Obj {
    name: CN;
    start_datetime: TS;
    end_datetime: TS;
    point_of_care: IS;
    room: IS;
    bed: IS;
    facility: HD;
    location_satus: IS;
    patient_location_type: IS;
    building: IS;
    floor: IS;
    hl7_obj_array: (IS | TS | HD | CN)[];
}
