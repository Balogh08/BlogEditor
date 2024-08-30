import React, {useEffect, useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {ClassicEditor} from "ckeditor5";
import {editorConfig} from "../config/editorConfig";


const Editor = ({onChange, initialData}) => {
  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    setEditorData(initialData);
  }, [initialData]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    onChange(data);
  };

  return (
    <div style={{width: "795px"}}>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={editorData}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
