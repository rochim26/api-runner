import React, { useState } from "react";

const Home = () => {
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/api/hello");
  const [jsonResult, setJsonResult] = useState("");

  const handleApiUrlChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleRunApi = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setJsonResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

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
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <input
              type="text"
              value={apiUrl}
              onChange={handleApiUrlChange}
              className="form-control"
              placeholder="Enter API URL"
            />
            <button onClick={handleRunApi} className="btn btn-primary">
              Run API
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <pre>{jsonResult}</pre>
          <button onClick={handleCopyJson} className="btn btn-secondary">
            Copy JSON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
