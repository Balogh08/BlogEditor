import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, FindAndReplace} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

const Editor = ({onChange}) => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    onChange(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={ {
          toolbar: {
            items: [
              // --- Document-wide tools ----------------------------------------------------------------------
              "undo",
              "redo",
              "|",
              "formatPainter",
              "caseChange",
              "findAndReplace",
              "selectAll",
              "wproofreader",
              "|",
              "insertTemplate",
              "tableOfContents",
              "|"],
          },
          plugins: [
            Bold, Essentials, Italic, Mention, Paragraph, Undo, FindAndReplace,
          ],
          licenseKey: "",
          mention: {
            // Mention configuration
          },
          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        } }
        data={editorData}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
