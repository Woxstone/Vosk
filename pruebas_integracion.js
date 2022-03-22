// import { RTF_doc } from '../RTF_doc.js';
import fs from 'fs';


function writeRTF(filePath) {
    let temp = '';

    // let temp = cabecera;
    // temp += this.textRTF;
    // temp += final;

    const prueba = `\\b Esto es un texto en \\b0`;

    temp = prueba

    try {
        fs.writeFileSync(filePath, temp);
    } catch (err) {  
        err.message += 'Problema al grabar textRTF';
        throw (err)
    }
}

writeRTF('pruebasNegrita.rtf');