import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, NM } from '.';
export declare class XTN extends HL7Obj {
    private validatePhoneNumber;
    validated_number: ST;
    telecom_use_code: ID;
    telecom_equipment_type: ID;
    email: ST;
    country_code: NM;
    area_code: NM;
    phone_number: NM;
    extension: NM;
    text: ST;
    hl7_obj_array: (ST | ID | NM)[];
}
