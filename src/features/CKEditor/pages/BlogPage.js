import React, {useState} from "react";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const toggleMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h1>Blog Editor</h1>
      {isEditing ? (
        <div>
          <Editor onChange={setContent} />
          <button onClick={toggleMode} style={{marginTop: "20px"}}>
            Preview
          </button>
        </div>
      ) : (
        <div>
          <h2>Preview</h2>
          <div
            dangerouslySetInnerHTML={{__html: content}}
            style={{border: "1px solid #ccc", padding: "10px",
              maxWidth: "795px", // Set a maximum width relative to the parent container
              overflow: "auto", // Ensure that scrollbars appear if the content exceeds the div's size
              boxSizing: "border-box", // Ensure padding and border are included in the element's width and height
            }}
          />
          <button onClick={toggleMode} style={{marginTop: "20px"}}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditorPage;
