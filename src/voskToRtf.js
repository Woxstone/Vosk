import { RTF_doc } from "./RTF_doc.js";

class ParserVoskToRTF {
    static Parser(IntakeArray, accuracy) {
        IntakeArray.forEach((element) => {
            if (!element.hasOwnProperty('result')) {
                RTF_doc.writeText();
            } else {
                const words = element.result;
                words.forEach((word) => {
                    if (word.conf <= accuracy) {
                        RTF_doc.writeTextRed(`${word.word} `);
                    } else {
                        RTF_doc.writeText(`${word.word} `);
                    }
                })
            }
        })
    }

    static WriteText(path) {
        console.log(RTF_doc.textRTF);
        RTF_doc.writeRTF(path);
    }
}

export { ParserVoskToRTF };