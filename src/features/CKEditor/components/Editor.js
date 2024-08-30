import React, {useEffect, useState, useRef} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {DecoupledEditor} from "ckeditor5";
import {editorConfig} from "../config/editorConfig";

import "ckeditor5/ckeditor5.css";


const Editor = ({onChange, initialData}) => {
  const [editorData, setEditorData] = useState("");
  const editorContainerRef = useRef(null);
  const editorMenuBarRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const editorRef = useRef(null);

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
      <div>
        <div className="main-container">
          <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
            <div className="editor-container__menu-bar" ref={editorMenuBarRef}></div>
            <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
            <div className="editor-container__editor-wrapper">
              <div className="editor-container__editor">
                <div ref={editorRef}>
                  <CKEditor
                    onReady={(editor) => {
                      editorToolbarRef.current.appendChild(
                          editor.ui.view.toolbar.element);
                      editorMenuBarRef.current.appendChild(
                          editor.ui.view.menuBarView.element);
                    }}
                    onAfterDestroy={() => {
                      Array.from(editorToolbarRef.current.children).forEach(
                          (child) => child.remove());
                      Array.from(editorMenuBarRef.current.children).forEach(
                          (child) => child.remove());
                    }}
                    editor={DecoupledEditor}
                    config={editorConfig}
                    data={editorData}
                    onChange={handleEditorChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
