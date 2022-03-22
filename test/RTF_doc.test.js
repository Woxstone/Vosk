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
        const expected = `Esto es un texto en`;

        const result = RTF_doc.writeText(intake);

        expect(result).toEqual(expected);
    });

    it('Mete el texto en un codigo RTF seguido del existente', () => {
        const intake = 'Esto es un texto en';
        const intake2 = ' Barcelona';
        const expected = `Esto es un texto en Barcelona`;

        let result = RTF_doc.writeText(intake);
        result = RTF_doc.writeText(intake2);

        expect(result).toEqual(expected);
    });

    it('se persiste correctamente', () => {
        const intake = 'Esto es un texto en Barcelona';
        const expectedResult = `{\\rtf1\\ansi\\deff3\\adeflang1025
{\\fonttbl{\\f0\\froman\\fprq2\\fcharset0 Times New Roman;}{\\f1\\froman\\fprq2\\fcharset2 Symbol;}{\\f2\\fswiss\\fprq2\\fcharset0 Arial;}{\\f3\\froman\\fprq2\\fcharset0 Liberation Serif{\\*\\falt Times New Roman};}{\\f4\\fswiss\\fprq2\\fcharset0 Liberation Sans{\\*\\falt Arial};}{\\f5\\fmodern\\fprq1\\fcharset0 Liberation Mono{\\*\\falt Courier New};}{\\f6\\fmodern\\fprq1\\fcharset0 NSimSun;}{\\f7\\fnil\\fprq2\\fcharset0 Microsoft YaHei;}{\\f8\\fswiss\\fprq0\\fcharset128 Arial;}{\\f9\\fnil\\fprq2\\fcharset0 Arial;}}
{\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red0\\green255\\blue255;\\red0\\green255\\blue0;\\red255\\green0\\blue255;\\red255\\green0\\blue0;\\red255\\green255\\blue0;\\red255\\green255\\blue255;\\red0\\green0\\blue128;\\red0\\green128\\blue128;\\red0\\green128\\blue0;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red128\\green128\\blue0;\\red128\\green128\\blue128;\\red192\\green192\\blue192;}
{\\stylesheet{\\s0\\snext0\\rtlch\\af9\\afs24\\alang1081 \\ltrch\\lang3082\\langfe2052\\hich\\af3\\loch\\nowidctlpar\\hyphpar0\\ltrpar\\cf0\\f3\\fs24\\lang3082\\dbch\\af10\\langfe2052 Normal;}
{\\s15\\sbasedon0\\snext16\\rtlch\\af9\\afs28 \\ltrch\\hich\\af4\\loch\\sb240\\sa120\\keepn\\f4\\fs28\\dbch\\af7 T\\u237\\'edtulo;}
{\\s16\\sbasedon0\\snext16\\loch\\sl276\\slmult1\\sb0\\sa140 Cuerpo de texto;}
{\\s17\\sbasedon16\\snext17\\rtlch\\af8 \\ltrch\\loch\\sl276\\slmult1\\sb0\\sa140 Lista;}
{\\s18\\sbasedon0\\snext18\\rtlch\\af8\\afs24\\ai \\ltrch\\loch\\sb120\\sa120\\noline\\fs24\\i Leyenda;}
{\\s19\\sbasedon0\\snext19\\rtlch\\af8\\alang255 \\ltrch\\lang255\\langfe255\\loch\\noline\\lang255\\dbch\\langfe255 \\u205\\'cdndice;}
{\\s20\\sbasedon0\\snext20\\rtlch\\af5\\afs20 \\ltrch\\hich\\af5\\loch\\sb0\\sa0\\f5\\fs20\\dbch\\af6 Texto preformateado;}
}{\\*\\generator LibreOffice/7.3.1.3$Windows_X86_64 LibreOffice_project/a69ca51ded25f3eefd52d7bf9a5fad8c90b87951}{\\info{\\creatim\\yr0\\mo0\\dy0\\hr0\\min0}{\\revtim\\yr0\\mo0\\dy0\\hr0\\min0}{\\printim\\yr0\\mo0\\dy0\\hr0\\min0}}{\\*\\userprops}\\deftab709
\\hyphauto1\\viewscale100
{\\*\\pgdsctbl
{\\pgdsc0\\pgdscuse451\\pgwsxn11906\\pghsxn16838\\marglsxn1134\\margrsxn1134\\margtsxn1134\\margbsxn1134\\pgdscnxt0 Estilo de p\\u225\\'e1gina predeterminado;}}
\\formshade\\paperh16838\\paperw11906\\margl1134\\margr1134\\margt1134\\margb1134\\sectd\\sbknone\\pgndec\\sftnnar\\saftnnrlc\\sectunlocked1\\pgwsxn11906\\pghsxn16838\\marglsxn1134\\margrsxn1134\\margtsxn1134\\margbsxn1134\\ftnbj\\ftnstart1\\ftnrstcont\\ftnnar\\aenddoc\\aftnrstcont\\aftnstart1\\aftnnrlc
{\\*\\ftnsep\\chftnsep}\\pgndec\\pard\\plain \\s20\\rtlch\\af5\\afs20 \\ltrch\\hich\\af5\\loch\\sb0\\sa0\\f5\\fs20\\dbch\\af6\\loch\\ql\\sb0\\sa0\\ltrpar{\\loch
Esto es un texto en Barcelona}
\\par }`
        const spy = jest.spyOn(fs, 'writeFileSync');

        let result = RTF_doc.writeText(intake);

        RTF_doc.writeRTF('pruebas.rtf');
        expect(spy).toHaveBeenCalledWith('pruebas.rtf', expectedResult);
    });

    xit('Lo pone en negrita', () => {
        const intake = 'Esto es un texto en Barcelona';
        const expectedResult = `{\\rtf1\\ansi\\deff3\\adeflang1025
{\\fonttbl{\\f0\\froman\\fprq2\\fcharset0 Times New Roman;}{\\f1\\froman\\fprq2\\fcharset2 Symbol;}{\\f2\\fswiss\\fprq2\\fcharset0 Arial;}{\\f3\\froman\\fprq2\\fcharset0 Liberation Serif{\\*\\falt Times New Roman};}{\\f4\\fswiss\\fprq2\\fcharset0 Liberation Sans{\\*\\falt Arial};}{\\f5\\fmodern\\fprq1\\fcharset0 Liberation Mono{\\*\\falt Courier New};}{\\f6\\fmodern\\fprq1\\fcharset0 NSimSun;}{\\f7\\fnil\\fprq2\\fcharset0 Microsoft YaHei;}{\\f8\\fswiss\\fprq0\\fcharset128 Arial;}{\\f9\\fnil\\fprq2\\fcharset0 Arial;}}
{\\colortbl;\\red0\\green0\\blue0;\\red0\\green0\\blue255;\\red0\\green255\\blue255;\\red0\\green255\\blue0;\\red255\\green0\\blue255;\\red255\\green0\\blue0;\\red255\\green255\\blue0;\\red255\\green255\\blue255;\\red0\\green0\\blue128;\\red0\\green128\\blue128;\\red0\\green128\\blue0;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red128\\green128\\blue0;\\red128\\green128\\blue128;\\red192\\green192\\blue192;}
{\\stylesheet{\\s0\\snext0\\rtlch\\af9\\afs24\\alang1081 \\ltrch\\lang3082\\langfe2052\\hich\\af3\\loch\\nowidctlpar\\hyphpar0\\ltrpar\\cf0\\f3\\fs24\\lang3082\\dbch\\af10\\langfe2052 Normal;}
{\\s15\\sbasedon0\\snext16\\rtlch\\af9\\afs28 \\ltrch\\hich\\af4\\loch\\sb240\\sa120\\keepn\\f4\\fs28\\dbch\\af7 T\\u237\\'edtulo;}
{\\s16\\sbasedon0\\snext16\\loch\\sl276\\slmult1\\sb0\\sa140 Cuerpo de texto;}
{\\s17\\sbasedon16\\snext17\\rtlch\\af8 \\ltrch\\loch\\sl276\\slmult1\\sb0\\sa140 Lista;}
{\\s18\\sbasedon0\\snext18\\rtlch\\af8\\afs24\\ai \\ltrch\\loch\\sb120\\sa120\\noline\\fs24\\i Leyenda;}
{\\s19\\sbasedon0\\snext19\\rtlch\\af8\\alang255 \\ltrch\\lang255\\langfe255\\loch\\noline\\lang255\\dbch\\langfe255 \\u205\\'cdndice;}
{\\s20\\sbasedon0\\snext20\\rtlch\\af5\\afs20 \\ltrch\\hich\\af5\\loch\\sb0\\sa0\\f5\\fs20\\dbch\\af6 Texto preformateado;}
}{\\*\\generator LibreOffice/7.3.1.3$Windows_X86_64 LibreOffice_project/a69ca51ded25f3eefd52d7bf9a5fad8c90b87951}{\\info{\\creatim\\yr0\\mo0\\dy0\\hr0\\min0}{\\revtim\\yr0\\mo0\\dy0\\hr0\\min0}{\\printim\\yr0\\mo0\\dy0\\hr0\\min0}}{\\*\\userprops}\\deftab709
\\hyphauto1\\viewscale100
{\\*\\pgdsctbl
{\\pgdsc0\\pgdscuse451\\pgwsxn11906\\pghsxn16838\\marglsxn1134\\margrsxn1134\\margtsxn1134\\margbsxn1134\\pgdscnxt0 Estilo de p\\u225\\'e1gina predeterminado;}}
\\formshade\\paperh16838\\paperw11906\\margl1134\\margr1134\\margt1134\\margb1134\\sectd\\sbknone\\pgndec\\sftnnar\\saftnnrlc\\sectunlocked1\\pgwsxn11906\\pghsxn16838\\marglsxn1134\\margrsxn1134\\margtsxn1134\\margbsxn1134\\ftnbj\\ftnstart1\\ftnrstcont\\ftnnar\\aenddoc\\aftnrstcont\\aftnstart1\\aftnnrlc
{\\*\\ftnsep\\chftnsep}\\pgndec\\pard\\plain \\s20\\rtlch\\af5\\afs20 \\ltrch\\hich\\af5\\loch\\sb0\\sa0\\f5\\fs20\\dbch\\af6\\loch\\ql\\sb0\\sa0\\ltrpar{\\loch
Esto es un texto en Barcelona {\b negrita}}
\\par }`;

        const spy = jest.spyOn(fs, 'writeFileSync');

        let result = RTF_doc.writeTextNegrita(intake);


        RTF_doc.writeRTF('pruebas.rtf');
        expect(spy).toHaveBeenCalledWith('pruebas.rtf', expectedResult);
    });
})