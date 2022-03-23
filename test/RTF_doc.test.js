import { RTF_doc } from '../RTF_doc.js';
import fs from 'fs';


afterEach(() => {
    clearTextRTF();
});

function clearTextRTF() {
    RTF_doc.textRTF = '';
}

describe('Metodos de la clase', () => {
    it('Mete el texto en un codigo RTF', () => {
        const intake = 'Esto es un texto en';
        const expected = `{Esto es un texto en}`;

        const result = RTF_doc.writeText(intake);

        expect(result).toEqual(expected);
    });

    it('Mete el texto en un codigo RTF seguido del existente', () => {
        const intake = 'Esto es un texto en';
        const intake2 = ' Barcelona';
        const expected = `{Esto es un texto en}{ Barcelona}`;

        let result = RTF_doc.writeText(intake);
        result = RTF_doc.writeText(intake2);

        expect(result).toEqual(expected);
    });

    it('se persiste correctamente', () => {
        const intake = 'Esto es un texto en Barcelona';
        const expectedCall = `{\\rtf1
{\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red0\\green255\\blue255;\\red0\\green255\\blue0;\\red255\\green0\\blue255;\\red255\\green0\\blue0;\\red255\\green255\\blue0;\\red255\\green255\\blue255;\\red0\\green0\\blue128;\\red0\\green128\\blue128;\\red0\\green128\\blue0;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red128\\green128\\blue0;\\red128\\green128\\blue128;\\red192\\green192\\blue192;}
{Esto es un texto en Barcelona}
}`
        const spy = jest.spyOn(fs, 'writeFileSync');

        RTF_doc.writeText(intake);
        RTF_doc.writeRTF('pruebas.rtf');

        expect(spy).toHaveBeenCalledWith('pruebas.rtf', expectedCall);
    });

    it('Lo pone en negrita', () => {
        const intake = 'Esto es un texto en Barcelona';
        const expectedCall = `{\\rtf1
{\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red0\\green255\\blue255;\\red0\\green255\\blue0;\\red255\\green0\\blue255;\\red255\\green0\\blue0;\\red255\\green255\\blue0;\\red255\\green255\\blue255;\\red0\\green0\\blue128;\\red0\\green128\\blue128;\\red0\\green128\\blue0;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red128\\green128\\blue0;\\red128\\green128\\blue128;\\red192\\green192\\blue192;}
{\\b Esto es un texto en Barcelona}
}`;

        const spy = jest.spyOn(fs, 'writeFileSync');

        RTF_doc.writeTextBold(intake);
        RTF_doc.writeRTF('pruebas.rtf');

        expect(spy).toHaveBeenCalledWith('pruebas.rtf', expectedCall);
    });

    it('Combinar los dos write', () => {
        const intake = 'Esto es un texto en';
        const intake2 = ' Barcelona';
        const expectedResult = `{Esto es un texto en}{\\b  Barcelona}`;

        const temp = RTF_doc.writeText(intake);
        const result = RTF_doc.writeTextBold(intake2);

        expect(result).toEqual(expectedResult);
    });

    it('Mete un salto de pagina', () => {
        const intake = `Esto es un texto en
`;
        const expected = `{Esto es un texto en
\\par}`;

        const result = RTF_doc.writeTextLineBreaks(intake);

        expect(result).toEqual(expected);
    });

    it('Pone de color rojo el texto', () => {
        const intake = `Barcelona`;
        const expected = `{\\cf6 Barcelona}`;

        const result = RTF_doc.writeTextRed(intake);

        expect(result).toEqual(expected);
    })
})