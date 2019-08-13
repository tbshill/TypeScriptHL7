import { MLLPServer } from './mllp';

// import { MSH, ORC } from './segments';
// import { CQ } from './datatypes';
// import { Depth, DepthEnum } from './base/depth';

// const test_MSH = "MSH|^~\&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||";
// const test_ORC = "ORC|NW|00849727|00849727||||^^^201908140915^^R||20190812055207|42315237615^Christensen^Ashlee||202549^Newbold^Douglas|^^^1004^^^^^Mammogram|(801)840-2100^(801)840-2139||SCREENING |104646^SLC|||||||3845 W 4700 S^^TAYLORSVILLE^UT^84118^8018402100^8018402139^8018402139"
// const CQ_test = "^^^201908140915^^R"


// const msh = new MSH();
// const orc = new ORC();

// const cq = new CQ(new Depth(DepthEnum.FEILD));

// msh.fromString(test_MSH);
// orc.fromString(test_ORC);

// cq.fromString(CQ_test);
// console.log(cq.units.toString());

// console.log(cq.toString());

// // console.log(orc.quantity_timing.);

// // console.log(msh.toString());
// console.log(orc.toString());

const mllp = new MLLPServer("0.0.0.0", 6300);
mllp.on('started', () => {
    console.log(`Started Server on ${mllp.port}`)
})
mllp.on('close', () => {
    console.log("Stopped");
})
mllp.on('mllp', (event) => {
    const message = event.message;
    const socket = event.socket;
    socket.write(mllp.wrapInMLLP('HI'));
})
mllp.start()