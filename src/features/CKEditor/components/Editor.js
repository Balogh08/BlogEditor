import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo} from "ckeditor5";

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
            items: ["undo", "redo", "|", "bold", "italic"],
          },
          plugins: [
            Bold, Essentials, Italic, Mention, Paragraph, Undo,
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
