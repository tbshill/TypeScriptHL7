import { buildACK, wrapInMLLP, getSegmentNameFromString, normalizeNewLines, getMSHFromMessage } from './hl7Utils';

import { MLLPServer } from "./network/mllp";
import * as net from 'net';
import { MSH, PID } from './segments';

// const axios = require('axios')


const mllp = new MLLPServer('0.0.0.0', 6200);
mllp.on('mllp', event => {
    let message = event.message as string;
    const socket = event.socket as net.Socket;

    try {

        message = normalizeNewLines(message);
        const msh: MSH = getMSHFromMessage(message);


        if (msh.message_type.event.value == 'ORM') {
            console.log("ORM");

            const segment_strings = message.split('\n');


            ['MSH| ...', 'PID| ...', 'PV1| ...', 'ORC| ...', 'OBR| ...',]



            // GET PID
            const pid_segments_strings = segment_strings.filter(segment_string => {
                const segment_name = getSegmentNameFromString(segment_string);
                return segment_name === 'PID';
            });

            ['PID|...']

            const pid = new PID();
            pid.fromString(pid_segments_strings[0]);
            console.log(pid.toString());

            // MAP to MODEL
            const patient_model = {
                gt_id: pid.external_id.toString(),
                mrn: pid.internal_id.toString()
            }

            console.log(patient_model);

            // Call API to save to DB
            axios.post('http://localhost:8888/patient', patient_model)
                .then(result => {
                    console.log(result);
                }).catch(err => {
                    console.error(err);
                });


        }


        const ack = buildACK(message, 'AA');
        socket.write(wrapInMLLP(ack));


    } catch (error) {
        // console.error(error);
        const ack = buildACK(message, 'AE', error.message);
        socket.write(wrapInMLLP(ack));
    }


})

mllp.start();