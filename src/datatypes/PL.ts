import { HL7Obj } from '../base/HL7Obj';
import { IS } from './IS';
import { HD } from './HD';
import { ST } from './ST';

//<point of care (IS )> ^ <room (IS )> ^ <bed (IS)> ^ <facility (HD)> ^ < location status (IS )> ^ <person location type (IS)> ^ <building (IS )> ^ <floor (IS )> ^ <location description (ST)>

export class PL extends HL7Obj {
    point_of_care: IS = new IS(this.depth.peekDown());
    room: IS = new IS(this.depth.peekDown());
    bed: IS = new IS(this.depth.peekDown());
    facility: HD = new HD(this.depth.peekDown());
    location_status: IS = new IS(this.depth.peekDown());
    person_location_type: IS = new IS(this.depth.peekDown());
    building: IS = new IS(this.depth.peekDown());
    floor: IS = new IS(this.depth.peekDown());
    location_description: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.point_of_care,
        this.room,
        this.bed,
        this.facility,
        this.location_status,
        this.person_location_type,
        this.building,
        this.floor,
        this.location_description,
    ]
}