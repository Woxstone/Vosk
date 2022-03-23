const RTF_doc = jest.fn();

RTF_doc.textRTF = jest.fn();
RTF_doc.writeRTF = jest.fn();
RTF_doc.writeText = jest.fn();
RTF_doc.writeTextBold = jest.fn();
RTF_doc.writeTextLineBreaks = jest.fn();
RTF_doc.writeTextRed = jest.fn();

export { RTF_doc };