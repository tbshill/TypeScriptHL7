import { OBX } from './segments';
// OBX|1|00849946|00849946|73120^X-ray hand, 2 views^^73130^Radiologic examination, hand; minimum of 3 views||20190812144500|20190812144500||||||NO IHC PRIORS|||213195^JAN^DAO^^MD|(801)000-1234^(801)000-1236||CR||||||||^^^20190812144500^^R||||RT HAND INJURY, RT WRIST^RT HAND INJURY, RT WRIST|||||20190812144500||||||||73130|
const test_OBX = "OBX|52|TX|CT Abdomen and Pelvis w/o Cont^CT Abdomen and Pelvis w/o Contrast||||||||F|||20190813000027";
let obx = new OBX();
obx.fromString(test_OBX);
console.log(obx.toString());