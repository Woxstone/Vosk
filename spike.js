import ffmpeg from "fluent-ffmpeg";
import vosk from "vosk";
import fs from 'fs';
import { spawn } from "child_process";
import { ParserVoskToRTF } from "./src/voskToRtf.js";


const pathFile = './audioEntexto.rtf';
const accuracy = 0.75;
const m4afilename = './Grabación.m4a';
const outputFile = m4afilename.replace(".m4a", ".wav");

let converttowav = async function (m4afilename, outputFile) {
    ffmpeg(m4afilename).save(outputFile);
};

const results = []

converttowav(m4afilename, outputFile).then(() => {
    speechrecog(outputFile, pathFile, accuracy);
});

function speechrecog(FILE_NAME, path) {

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
    rec.setWords(true);

    const ffmpeg_run = spawn('ffmpeg', ['-loglevel', 'quiet', '-i', FILE_NAME,
        '-ar', String(SAMPLE_RATE), '-ac', '1',
        '-f', 's16le', '-bufsize', String(BUFFER_SIZE), '-']);

    ffmpeg_run.stdout.on('data', (stdout) => {
        if (rec.acceptWaveform(stdout))
            results.push(rec.result());
        results.push(rec.finalResult());
    });

    ffmpeg_run.stdout.on('close', () => {
        ParserVoskToRTF.Parser(results, accuracy);
        ParserVoskToRTF.WriteText(path);
    });
}