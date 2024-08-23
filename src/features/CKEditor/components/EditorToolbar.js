const EditorToolbar = ({onPreview, onSave, onNew, onDelete}) => {
  return (
    <div style={{marginTop: "20px"}}>
      <button onClick={onPreview} style={{marginRight: "20px"}}>
        Preview
      </button>
      <button onClick={onSave} style={{marginRight: "20px"}}>
        Save
      </button>
      <button onClick={onNew} style={{marginRight: "20px"}}>
        New
      </button>
      <button onClick={onDelete} style={{marginRight: "20px"}}>
        Delete
      </button>
    </div>
  );
};

export default EditorToolbar;
