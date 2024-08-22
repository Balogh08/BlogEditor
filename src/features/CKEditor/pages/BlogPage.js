import React, {useState} from "react";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [content, setContent] = useState("");
  const [contentToSave, setContentToSave] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [selectedDocIndex, setSelectedDocIndex] = useState(null);

  const handleSave = () => {
    // Save the current content to the documents list
    setDocuments([...documents, contentToSave]);
    setContent(""); // Clear the editor for new content
    setSelectedDocIndex(documents.length); // Update to new document index
    console.debug("selectedDocIndex: ", selectedDocIndex);
  };

  const handleDocumentClick = (index) => {
    // Load the selected document into the editor
    setContent(documents[index]);
    console.debug("documents[index]: ", documents[index]);
    setSelectedDocIndex(index);
  };

  const toggleMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h1>Blog Editor</h1>
      {isEditing ? (
        <div>
          <Editor
            onChange={setContentToSave}
            initialData={content} />
          <button onClick={toggleMode} style={{marginTop: "20px"}}>
            Preview
          </button>
          <button onClick={handleSave} style={{marginTop: "20px"}}>
            Save
          </button>

          <h2 style={{marginTop: "40px"}}>Saved Documents</h2>
          <ul style={{listStyleType: "none", paddingLeft: 0}}>
            {documents.map((doc, index) => (
              <li key={index} style={{marginBottom: "10px"}}>
                <button onClick={() => handleDocumentClick(index)}>
              Document {index + 1}
                </button>
              </li>
            ))}
          </ul>
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
