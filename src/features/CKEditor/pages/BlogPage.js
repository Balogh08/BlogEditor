import {useState, useRef, useEffect} from "react";
import Editor from "../components/Editor";
import EditorToolbar from "../components/EditorToolbar";
import DocumentList from "../components/DocumentList";
import "ckeditor5/ckeditor5.css";

const BlogPage = () => {
  const [content, setContent] = useState("");
  const [contentToSave, setContentToSave] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [selectedDocIndex, setSelectedDocIndex] = useState(null);
  const iframeRef = useRef(null); // Ref to the iframe element

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


  useEffect(() => {
    console.debug("isEditing: ", isEditing);
    if (!isEditing) {
      const previewData = () => {
        const iframe = iframeRef.current;
        // console.debug("iframe: ", iframe);
        if (iframe) {
          // Find the necessary CSS files from the main document
          const mainCSSElement = [...document.querySelectorAll("link")]
              .find((linkElement) => linkElement.href.endsWith("./node_modules/ckeditor5/dist/ckeditor5.css"));
          // const snippetCSSElement = [...document.querySelectorAll("link")]
          //     .find((linkElement) => linkElement.href.endsWith("snippet.css"));
          console.debug("mainCSSElement: ", mainCSSElement);
          const html = `
            <!DOCTYPE html>
            <html>
              <head>
                <title>Preview</title>
                ${mainCSSElement ? `<link rel="stylesheet" href="${mainCSSElement.href}" type="text/css">` : ""}
              <style>
                  body {
                    padding: 20px;
                  }
                  .formatted p img {
                    display: inline;
                    margin: 0;
                  }
                </style>
              </head>
              <body class="formatted ck-content">
                ${contentToSave}
              </body>
            </html>
          `;
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(html);
          iframe.contentWindow.document.close();
        }
      };
      previewData();
    }
  }, [contentToSave, isEditing]);

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
          <iframe
            title="preview"
            ref={iframeRef}
            style={{width: "100%", border: "solid 2px #333"}}
          ></iframe>
          <button onClick={toggleMode} style={{marginTop: "20px"}}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
