"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hl7Utils_1 = require("./hl7Utils");
var mllp_1 = require("./network/mllp");
var segments_1 = require("./segments");
// const axios = require('axios')
var mllp = new mllp_1.MLLPServer('0.0.0.0', 6200);
mllp.on('mllp', function (event) {
    var message = event.message;
    var socket = event.socket;
    try {
        message = hl7Utils_1.normalizeNewLines(message);
        var msh = hl7Utils_1.getMSHFromMessage(message);
        if (msh.message_type.event.value == 'ORM') {
            console.log("ORM");
            var segment_strings = message.split('\n');
            ['MSH| ...', 'PID| ...', 'PV1| ...', 'ORC| ...', 'OBR| ...',];
            // GET PID
            var pid_segments_strings = segment_strings.filter(function (segment_string) {
                var segment_name = hl7Utils_1.getSegmentNameFromString(segment_string);
                return segment_name === 'PID';
            });
            ['PID|...'];
            var pid = new segments_1.PID();
            pid.fromString(pid_segments_strings[0]);
            console.log(pid.toString());
            // MAP to MODEL
            var patient_model = {
                gt_id: pid.external_id.toString(),
                mrn: pid.internal_id.toString()
            };
            console.log(patient_model);
            // Call API to save to DB
            axios.post('http://localhost:8888/patient', patient_model)
                .then(function (result) {
                console.log(result);
            }).catch(function (err) {
                console.error(err);
            });
        }
        var ack = hl7Utils_1.buildACK(message, 'AA');
        socket.write(hl7Utils_1.wrapInMLLP(ack));
    }
    catch (error) {
        // console.error(error);
        var ack = hl7Utils_1.buildACK(message, 'AE', error.message);
        socket.write(hl7Utils_1.wrapInMLLP(ack));
    }
});
mllp.start();
