import { HL7Obj } from '../base/HL7Obj';
import { Depth, DepthEnum } from '../base/depth';
import { ST, ID, TS, CE, XCN, EI, PL, XTN, TQ, Z_PA } from '../datatypes';

export class ORC extends HL7Obj {
    /** ORC-0 */segment: ST = new ST(new Depth(DepthEnum.FEILD));
    /** ORC-1 */order_control: ID = new ID(new Depth(DepthEnum.FEILD));
    /** ORC-2 */placer_order_number: EI = new EI(new Depth(DepthEnum.FEILD));
    /** ORC-3 */filler_order_number: EI = new EI(new Depth(DepthEnum.FEILD));
    /** ORC-4 */placer_groupe_number: EI = new EI(new Depth(DepthEnum.FEILD));
    /** ORC-5 */order_status: ID = new ID(new Depth(DepthEnum.FEILD));
    /** ORC-6 */response_flag: ID = new ID(new Depth(DepthEnum.FEILD));
    /** ORC-7 */quantity_timing: TQ = new TQ(new Depth(DepthEnum.FEILD));
    /** ORC-8 */parent: Z_PA = new Z_PA(new Depth(DepthEnum.FEILD)); // TODO: Build THis
    /** ORC-9 */datetime_transaction: TS = new TS(new Depth(DepthEnum.FEILD));
    /** ORC-10 */entered_by: XCN = new XCN(new Depth(DepthEnum.FEILD));
    /** ORC-11 */verified_by: XCN = new XCN(new Depth(DepthEnum.FEILD));
    /** ORC-12 */ordering_provider: XCN = new XCN(new Depth(DepthEnum.FEILD));
    /** ORC-13 */enterers_location: PL = new PL(new Depth(DepthEnum.FEILD));
    /** ORC-14 */call_back_phone_number: XTN = new XTN(new Depth(DepthEnum.FEILD));
    /** ORC-15 */order_effective_datetime: TS = new TS(new Depth(DepthEnum.FEILD));
    /** ORC-16 */order_control_code_reason: CE = new CE(new Depth(DepthEnum.FEILD));
    /** ORC-17 */entering_organization: CE = new CE(new Depth(DepthEnum.FEILD));
    /** ORC-18 */entering_device: CE = new CE(new Depth(DepthEnum.FEILD));
    /** ORC-19 */action_by: XCN = new XCN(new Depth(DepthEnum.FEILD));


    hl7_obj_array = [
        this.segment,
        this.order_control,
        this.placer_order_number,
        this.filler_order_number,
        this.placer_groupe_number,
        this.order_status,
        this.response_flag,
        this.quantity_timing,
        this.parent,
        this.datetime_transaction,
        this.entered_by,
        this.verified_by,
        this.ordering_provider,
        this.enterers_location,
        this.call_back_phone_number,
        this.order_effective_datetime,
        this.order_control_code_reason,
        this.entering_organization,
        this.entering_device,
        this.action_by,
    ]

    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }
}