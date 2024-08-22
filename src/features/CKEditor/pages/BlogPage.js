import React, {useState} from "react";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [content, setContent] = useState("");
  const [contentToSave, setContentToSave] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [selectedDocIndex, setSelectedDocIndex] = useState(null);

  const handleSave = () => {
    if (selectedDocIndex !== null) {
      // Update the existing document if an index is selected
      const updatedDocuments = documents.map((doc, index) =>
        index === selectedDocIndex ? contentToSave : doc,
      );
      setDocuments(updatedDocuments);
    } else {
      // Add a new document if no index is selected
      setDocuments([...documents, contentToSave]);
      // setSelectedDocIndex(documents.length); // Update to the new document index
    }

    setContent(""); // Clear the editor for new content
    setSelectedDocIndex(null);
  };

  const handleDocumentClick = (index) => {
    // Load the selected document into the editor
    setContent(documents[index]);
    setSelectedDocIndex(index);
  };

  const createNew = () => {
    setContent("New");
    setSelectedDocIndex(null);
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
          <button onClick={createNew} style={{marginTop: "20px"}}>
            New
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
