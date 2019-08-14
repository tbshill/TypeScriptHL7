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
export class Z_CU extends HL7Obj {
    name: CN = new CN(this.depth.peekDown());
    start_datetime: TS = new TS(this.depth.peekDown());
    end_datetime: TS = new TS(this.depth.peekDown());
    point_of_care: IS = new IS(this.depth.peekDown());
    room: IS = new IS(this.depth.peekDown());
    bed: IS = new IS(this.depth.peekDown());
    facility: HD = new HD(this.depth.peekDown());
    location_satus: IS = new IS(this.depth.peekDown());
    patient_location_type: IS = new IS(this.depth.peekDown());
    building: IS = new IS(this.depth.peekDown());
    floor: IS = new IS(this.depth.peekDown());

    hl7_obj_array = [
        this.name,
        this.start_datetime,
        this.end_datetime,
        this.point_of_care,
        this.room,
        this.bed,
        this.facility,
        this.location_satus,
        this.patient_location_type,
        this.building,
        this.floor,
    ]
}