const DocumentList = ({documents, onDocumentClick}) => {
  return (
    <ul style={{listStyleType: "none", paddingLeft: 0, marginTop: "40px"}}>
      {documents.map((doc, index) => (
        <li key={index} style={{marginBottom: "10px"}}>
          <button onClick={() => onDocumentClick(index)}>
            Blog {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;
