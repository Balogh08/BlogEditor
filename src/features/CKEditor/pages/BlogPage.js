import {useState} from "react";
import Editor from "../components/Editor";
import EditorToolbar from "../components/EditorToolbar";
import DocumentList from "../components/DocumentList";

const BlogPage = () => {
  const [content, setContent] = useState("");
  const [contentToSave, setContentToSave] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [selectedDocIndex, setSelectedDocIndex] = useState(null);

  const saveDocument = () => {
    if (selectedDocIndex !== null) {
      const updatedDocuments = documents.map((doc, index) =>
        index === selectedDocIndex ? contentToSave : doc,
      );
      setDocuments(updatedDocuments);
    } else {
      setDocuments([...documents, contentToSave]);
    }
    clearEditor();
  };

  const loadDocument = (index) => {
    setContent(documents[index]);
    setSelectedDocIndex(index);
  };

  const createNewDocument = () => {
    clearEditor();
  };

  const deleteDocument = () => {
    if (selectedDocIndex !== null) {
      const updatedDocuments =
        documents.filter((_, index) => index !== selectedDocIndex);
      setDocuments(updatedDocuments);
    }
    clearEditor();
  };

  const toggleMode = () => {
    setContent(contentToSave);
    setIsEditing(!isEditing);
  };

  const clearEditor = () => {
    setContent("");
    setSelectedDocIndex(null);
  };

  return (
    <div>
      <h1>Blog Editor</h1>
      {isEditing ? (
        <div>
          <Editor onChange={setContentToSave} initialData={content} />
          <EditorToolbar
            onPreview={toggleMode}
            onSave={saveDocument}
            onNew={createNewDocument}
            onDelete={deleteDocument}
          />
          <h2>Blogs</h2>
          <DocumentList documents={documents} onDocumentClick={loadDocument} />
        </div>
      ) : (
        <div>
          <h2>Preview</h2>
          <div
            dangerouslySetInnerHTML={{__html: contentToSave}}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
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

export default BlogPage;
