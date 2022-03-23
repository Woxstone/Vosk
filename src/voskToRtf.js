import { RTF_doc } from "./RTF_doc.js";

class ParserVoskToRTF {
    static Parser(IntakeArray, accuracy = 0.8) {
        
        IntakeArray.forEach((element) => {
            if (!element.hasOwnProperty('result')) {
                RTF_doc.writeText(element.text);
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
        RTF_doc.writeRTF(path);
    }
}

export { ParserVoskToRTF };