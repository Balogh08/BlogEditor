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

  // const saveDocument = () => {
  //   console.debug("contentToSave: ", contentToSave);
  //   if (selectedDocIndex !== null) {
  //     const updatedDocuments = documents.map((doc, index) =>
  //       index === selectedDocIndex ? contentToSave : doc,
  //     );
  //     setDocuments(updatedDocuments);
  //   } else {
  //     setDocuments([...documents, contentToSave]);
  //   }
  //   clearEditor();
  // };

  const saveDocument = () => {
    // Parse the contentToSave as an HTML document
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentToSave, "text/html");

    // Select all <img> tags
    const images = doc.querySelectorAll("img");

    // Update each <img> tag's width and height attributes to 100%
    images.forEach((img) => {
      img.setAttribute("width", "100%");
      img.setAttribute("height", "100%");
    });

    // Serialize the modified document back to a string
    const updatedContentToSave = doc.body.innerHTML;

    // Update the documents array with the modified content
    if (selectedDocIndex !== null) {
      const updatedDocuments = documents.map((doc, index) =>
        index === selectedDocIndex ? updatedContentToSave : doc,
      );
      setDocuments(updatedDocuments);
    } else {
      setDocuments([...documents, updatedContentToSave]);
    }

    // Clear the editor (assuming this is a function that exists)
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


  // useEffect(() => {
  //   console.debug("isEditing: ", isEditing);
  //   if (!isEditing) {
  //     const previewData = () => {
  //       const iframe = iframeRef.current;
  //       // console.debug("iframe: ", iframe);
  //       if (iframe) {
  //         const html = `
  //           <!DOCTYPE html>
  //           <html>
  //             <head>
  //               <title>Preview</title>
  //             <style>
  //                 body {
  //                   padding: 20px;
  //                 }
  //                 .formatted p img {
  //                   display: inline;
  //                   margin: 0;
  //                 }
  //               </style>
  //             </head>
  //             <body class="formatted ck-content">
  //               ${contentToSave}
  //             </body>
  //           </html>
  //         `;
  //         iframe.contentWindow.document.open();
  //         iframe.contentWindow.document.write(html);
  //         iframe.contentWindow.document.close();
  //       }
  //     };
  //     previewData();
  //   }
  // }, [contentToSave, isEditing]);

  useEffect(() => {
    console.debug("isEditing: ", isEditing);
    if (!isEditing) {
      const previewData = () => {
        const iframe = iframeRef.current;

        if (iframe) {
          // Parse the contentToSave as an HTML document
          const parser = new DOMParser();
          const doc = parser.parseFromString(contentToSave, "text/html");

          // Select all <img> tags and update their width and height to 100%
          const images = doc.querySelectorAll("img");
          images.forEach((img) => {
            // img.setAttribute("width", "100%");
            // img.setAttribute("height", "100%");
          });

          // Serialize the modified document back to a string
          const updatedContentToSave = doc.body.innerHTML;

          // Construct the HTML for the iframe
          const html = `
            <!DOCTYPE html>
            <html>
              <head>
                <title>Preview</title>
                <style>
                @import url('/ckeditor5.css');
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
                ${updatedContentToSave}
              </body>
            </html>
          `;

          // Inject the HTML into the iframe
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
