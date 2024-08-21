import React, {useState} from "react";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Blog Editor</h1>
      <Editor onChange={setContent} />
      <div style={{marginTop: "20px"}}>
        <h2>Preview</h2>
        <div
          dangerouslySetInnerHTML={{__html: content}}
          style={{border: "1px solid #ccc", padding: "10px"}}
        />
      </div>
    </div>
  );
};

export default EditorPage;
