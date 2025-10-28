import React, { useMemo } from "react";
import { useState } from "react";

// React pdf renderer
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Simple Editor
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";

const EditTemplatePage = () => {
  const [value, setValue] = useState("");

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  //   convert to document
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>demo pdf</View>
      </Page>
    </Document>
  );

  return (
    <>
      <section className="py-10 center">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Chutir Application</h1>
          <Button></Button>
        </div>
        <SimpleEditor content={value} setValue={setValue} />
      </section>
    </>
  );
};

export default EditTemplatePage;
