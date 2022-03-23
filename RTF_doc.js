import fs from 'fs';

const cabecera = `{\\rtf1
{\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red0\\green255\\blue255;\\red0\\green255\\blue0;\\red255\\green0\\blue255;\\red255\\green0\\blue0;\\red255\\green255\\blue0;\\red255\\green255\\blue255;\\red0\\green0\\blue128;\\red0\\green128\\blue128;\\red0\\green128\\blue0;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red128\\green128\\blue0;\\red128\\green128\\blue128;\\red192\\green192\\blue192;}
`;

const final = `
}`;


class RTF_doc {
    static textRTF = '';

    static writeRTF(filePath) {
        let temp = cabecera;
        temp += this.textRTF;
        temp += final;

        try {
            fs.writeFileSync(filePath, temp);
        } catch (err) {
            err.message += 'Problema al grabar textRTF';
            throw (err)
        }
    }

    static writeText(texto = '') {
        this.textRTF += `{${texto}}`;
        return this.textRTF;
    }
    
    static writeTextBold(texto = '') {
        this.textRTF += `{\\b ${texto}}`;
        return this.textRTF;
    }

    static writeTextLineBreaks(texto = '') {
        this.textRTF += `{${texto}\\par}`;
        return this.textRTF;
    }

    static writeTextRed(texto = '') {
        this.textRTF += `{\\cf6 ${texto}}`;
        return this.textRTF;
    }

}



export { RTF_doc };