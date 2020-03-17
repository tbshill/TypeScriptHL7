import { HL7Obj } from '../base/HL7Obj';
import { IS } from './IS';
import { HD } from './HD';
import { ST } from './ST';
export declare class PL extends HL7Obj {
    point_of_care: IS;
    room: IS;
    bed: IS;
    facility: HD;
    location_status: IS;
    person_location_type: IS;
    building: IS;
    floor: IS;
    location_description: ST;
    hl7_obj_array: (ST | IS | HD)[];
}
