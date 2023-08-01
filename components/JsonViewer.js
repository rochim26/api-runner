import React from "react";

const JsonViewer = ({ jsonResult }) => {
  const handleCopyJson = () => {
    const textArea = document.createElement("textarea");
    textArea.value = jsonResult;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("JSON copied to clipboard!");
  };

  return (
    <div>
      <pre>{jsonResult}</pre>
      <button onClick={handleCopyJson}>Copy JSON</button>
    </div>
  );
};

export default JsonViewer;
