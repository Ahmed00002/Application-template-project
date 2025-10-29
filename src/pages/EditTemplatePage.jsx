import React, { useEffect, useState } from "react";
import pdfMake, { fonts } from "pdfmake/build/pdfmake";
// import "pdfmake/build/vfs_fonts.js";
import pdfFonts from "../assets/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";

// Simple Editor
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";

const EditTemplatePage = () => {
  // console.log(Object.keys(pdfMake.vfs));
  let location = useLocation();
  const [value, setValue] = useState(location?.state || "");

  pdfMake.vfs = pdfFonts.pdfMake;
  pdfMake.fonts = {
    NotoSans: {
      normal: "NotoSans.ttf",
      bold: "NotoSans.ttf",
      italics: "NotoSans.ttf",
      bolditalics: "NotoSans.ttf",
    },
    Kalpurush: {
      normal: "kalpurush.ttf",
      bold: "kalpurush.ttf",
      italics: "kalpurush.ttf",
      bolditalics: "kalpurush.ttf",
    },
    RuposhiBagla: {
      normal: "Ruposhi_Bangla.ttf",
      bold: "Ruposhi_Bangla_Bold.ttf",
      italics: "Ruposhi_Bangla_Italic.ttf",
      bolditalics: "Ruposhi_Bangla_Bold_Italic.ttf",
    },
  };

  const downloadPDF = () => {
    const documentDefinition = {
      content: htmlToPdfmake(value, {
        defaultStyles: {
          p: {
            lineHeight: 1,
            margin: 1,
            bold: false,
          },
          strong: {
            bold: true,
          },
        },
      }),
      defaultStyle: {
        font: "RuposhiBagla",
        fontSize: 18,
        bold: true,
      },
    };
    pdfMake.createPdf(documentDefinition, fonts).open();
  };

  return (
    <section className="py-10 center">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Chutir Application</h1>
        <Button onClick={downloadPDF}>Download PDF</Button>
      </div>
      <SimpleEditor content={location.state} setValue={setValue} />
    </section>
  );
};

export default EditTemplatePage;
