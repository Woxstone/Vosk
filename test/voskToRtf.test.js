import { ParserVoskToRTF } from '../src/voskToRtf.js';
import { RTF_doc } from '../src/RTF_doc.js';
jest.mock('../src/RTF_doc.js');

afterEach(() => {
    // clearTextRTF();
    jest.clearAllMocks()
});

function clearTextRTF() {
    RTF_doc.textRTF.mockClear();
}

describe('Prueba de la clase', () => {
    describe('Testeando Parser', () => {
        it('intake no result', () => {
            const intake = [{ text: 'Hola' }];
            const expectedCall = 'Hola';

            const spyWriteText = jest.spyOn(RTF_doc, 'writeText');

            ParserVoskToRTF.Parser(intake);

            expect(spyWriteText).toHaveBeenCalledWith(expectedCall);
        });

        it('intake with result but conf higher than theshold', () => {
            const intake = [{ result: [{ conf: 1, word: 'Cosa' }] }];
            const expectedCall = 'Cosa ';

            const spyWriteText = jest.spyOn(RTF_doc, 'writeText');
            const spywriteTextRed = jest.spyOn(RTF_doc, 'writeTextRed');

            ParserVoskToRTF.Parser(intake);

            expect(spyWriteText).toHaveBeenCalledWith(expectedCall);
            expect(spywriteTextRed).not.toHaveBeenCalled();
        });

        it('intake with result but conf lower than theshold', () => {
            const intake = [{ result: [{ conf: 0.5, word: 'Otra' }] }];
            const expectedCall = 'Otra ';

            const spyWriteText = jest.spyOn(RTF_doc, 'writeText');
            const spywriteTextRed = jest.spyOn(RTF_doc, 'writeTextRed');

            ParserVoskToRTF.Parser(intake);

            expect(spyWriteText).not.toHaveBeenCalled();
            expect(spywriteTextRed).toHaveBeenCalledWith(expectedCall);
        });

        it('intake with result but combination', () => {
            const intake = [{ result: [{ conf: 0.5, word: 'Otra' }] }, { result: [{ conf: 1, word: 'Cosa' }] }];
            const expectedCall = 'Otra ';
            const expectedCall2 = 'Cosa ';

            const spyWriteText = jest.spyOn(RTF_doc, 'writeText');
            const spywriteTextRed = jest.spyOn(RTF_doc, 'writeTextRed');

            ParserVoskToRTF.Parser(intake);

            expect(spyWriteText).toHaveBeenCalledWith(expectedCall2);
            expect(spywriteTextRed).toHaveBeenCalledWith(expectedCall);
        });
    });

    it('WriteText shold call writeRTF', () => {
        const path_false = './notARealPath.rtf';

        const spywriteRTF = jest.spyOn(RTF_doc, 'writeRTF');

        ParserVoskToRTF.WriteText(path_false);

        expect(spywriteRTF).toHaveBeenCalledWith(path_false);
    })
});