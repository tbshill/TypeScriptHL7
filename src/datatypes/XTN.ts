import { HL7Obj } from '../base/HL7Obj';

import { ID, ST, NM } from '.';
//In Version 2.3, replaces the TN data type. [NNN] [(999)]999-9999 [X99999] [B99999] [C any text] ^ <telecommunication use code (ID)> ^ <telecommunication equipment type (ID)> ^ <email address (ST)> ^ <country code (NM)> ^ <area/city code (NM)> ^ <phone number (NM)> ^ <extension (NM)> ^ <any text (ST)>
export class XTN extends HL7Obj {
    private validatePhoneNumber(input: String): boolean {
        return true; // TODO: Fix Me
    }

    validated_number: ST = new ST(this.depth.peekDown());
    telecom_use_code: ID = new ID(this.depth.peekDown());
    telecom_equipment_type: ID = new ID(this.depth.peekDown());
    email: ST = new ST(this.depth.peekDown());
    country_code: NM = new NM(this.depth.peekDown());
    area_code: NM = new NM(this.depth.peekDown());
    phone_number: NM = new NM(this.depth.peekDown());
    extension: NM = new NM(this.depth.peekDown());
    text: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.validated_number,
        this.telecom_use_code,
        this.telecom_equipment_type,
        this.email,
        this.country_code,
        this.area_code,
        this.phone_number,
        this.extension,
        this.text,
    ]

}