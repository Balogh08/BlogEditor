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
    setContent("");
    setSelectedDocIndex(null);
  };

  const deleteCurrent = () => {
    if (selectedDocIndex !== null) {
      // Create a new list without the selected document
      const updatedDocuments =
        documents.filter((_, index) => index !== selectedDocIndex);
      setDocuments(updatedDocuments);
    }

    // Clear the editor and reset the selected index
    setContent("");
    setSelectedDocIndex(null);
  };


  const toggleMode = () => {
    setContent(contentToSave);
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
          <button onClick={toggleMode} style={{marginTop: "20px", marginRight: "20px"}}>
            Preview
          </button>
          <button onClick={handleSave} style={{marginTop: "20px", marginRight: "20px"}}>
            Save
          </button>
          <button onClick={createNew} style={{marginTop: "20px", marginRight: "20px"}}>
            New
          </button>
          <button onClick={deleteCurrent} style={{marginTop: "20px", marginRight: "20px"}}>
            Delete
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
            dangerouslySetInnerHTML={{__html: contentToSave}}
            style={{border: "1px solid #ccc", padding: "10px",
              maxWidth: "795px",
              overflow: "auto",
              boxSizing: "border-box",
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
