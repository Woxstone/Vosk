import ffmpeg from "fluent-ffmpeg";
// var vosk = require('vosk');
import vosk from "vosk";
import fs from 'fs';
// const fs = require("fs");
import { spawn } from "child_process"
// const { spawn } = require("child_process");


const m4afilename = './default_audio.m4a';
const outputFile = m4afilename.replace(".m4a", ".wav");

let converttowav = async function (m4afilename, outputFile) {
    let command = ffmpeg(m4afilename).save(outputFile);
};

converttowav(m4afilename, outputFile).then(speechrecog(outputFile));


function speechrecog(FILE_NAME) {

    const MODEL_PATH = "./vosk-model-small-es-0.22"
    const SAMPLE_RATE = 16000
    const BUFFER_SIZE = 4000

    if (!fs.existsSync(MODEL_PATH)) {
        console.log("Please download the model from https://alphacephei.com/vosk/models and unpack as " + MODEL_PATH + " in the current folder.")
        process.exit()
    }

    if (process.argv.length > 2)
        FILE_NAME = process.argv[2]

    vosk.setLogLevel(0);
    const model = new vosk.Model(MODEL_PATH);
    const rec = new vosk.Recognizer({ model: model, sampleRate: SAMPLE_RATE });
    const settings = rec.setWords(true);

    const ffmpeg_run = spawn('ffmpeg', ['-loglevel', 'quiet', '-i', FILE_NAME,
        '-ar', String(SAMPLE_RATE), '-ac', '1',
        '-f', 's16le', '-bufsize', String(BUFFER_SIZE), '-']);

    ffmpeg_run.stdout.on('data', (stdout) => {
        if (rec.acceptWaveform(stdout)) {
            console.log(rec.result());
        }
        else { 
            // console.log(rec.partialResult()); 
        }
        console.log(rec.finalResult());
    });
}

export { speechrecog };