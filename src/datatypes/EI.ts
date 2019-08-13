import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { Depth, DepthEnum } from '../base/depth';
import { IS } from './IS';
import { ID } from './ID';

//<entity identifier (ST)> ^ <namespace ID (IS)> ^ <universal ID (ST)> ^ <universal ID type (ID)>


export class EI extends HL7Obj {
    entity_id: ST = new ST(this.depth.peekDown());
    namespace_id: IS = new IS(this.depth.peekDown());
    universal_id: ST = new ST(this.depth.peekDown());
    universal_id_type: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.entity_id,
        this.namespace_id,
        this.universal_id,
        this.universal_id_type
    ];
}