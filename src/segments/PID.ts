import { HL7Obj } from '../base/HL7Obj';
import { ST, TS, IS, XTN, CE, ID, NM, DLN } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';
import { SIGABRT } from 'constants';
import { XPN } from '../datatypes/XPN.todo';

export class PID extends HL7Obj {
    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }
    /** PID-0 */segment: ST = new ST(this.depth.peekDown());
    /** PID-1 */set_id: SI = new SI(this.depth.peekDown());
    /** PID-2 */external_id: CX = new CX(this.depth.peekDown());
    /** PID-3 */internal_id: CX = new CX(this.depth.peekDown());
    /** PID-4 */alternate_id: CX = new CX(this.depth.peekDown());
    /** PID-5 */patient_name: XPN = new XPN(this.depth.peekDown());
    /** PID-6 */mothers_maiden_name: XPN = new XPN(this.depth.peekDown());
    /** PID-7 */datetime_of_birth: TS = new TS(this.depth.peekDown());
    /** PID-8 */sex: IS = new IS(this.depth.peekDown());
    /** PID-9 */patient_alias: XPN = new XPN(this.depth.peekDown());
    /** PID-10 */race: IS = new IS(this.depth.peekDown());
    /** PID-11 */patient_address: XAD = new XAD(this.depth.peekDown());
    /** PID-12 */country_code: IS = new IS(this.depth.peekDown());
    /** PID-13 */phone_home: XTN = new XTN(this.depth.peekDown());
    /** PID-14 */phone_business: XTN = new XTN(this.depth.peekDown());
    /** PID-15 */primary_language: CE = new CE(this.depth.peekDown());
    /** PID-16 */marital_status: IS = new IS(this.depth.peekDown());
    /** PID-17 */religion: IS = new IS(this.depth.peekDown());
    /** PID-18 */account_number: CX = new CX(this.depth.peekDown());
    /** PID-19 */ssn: ST = new ST(this.depth.peekDown());
    /** PID-20 */drivers_license: DLN = new DLN(this.depth.peekDown());
    /** PID-21 */mothers_id: CX = new CX(this.depth.peekDown());
    /** PID-22 */ethnic_group: IS = new IS(this.depth.peekDown());
    /** PID-23 */birth_place: ST = new ST(this.depth.peekDown());
    /** PID-24 */multiple_birth_indicator: ID = new ID(this.depth.peekDown());
    /** PID-25 */birth_order: NM = new NM(this.depth.peekDown());
    /** PID-26 */citizenship: IS = new IS(this.depth.peekDown());
    /** PID-27 */veterans_military_status: CE = new CE(this.depth.peekDown());
    /** PID-28 */nationality: CE = new CE(this.depth.peekDown());
    /** PID-29 */death_datetime: TS = new TS(this.depth.peekDown());
    /** PID-30 */death_indicator: ID = new ID(this.depth.peekDown());


}