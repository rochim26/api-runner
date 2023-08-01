import React, { useState } from "react";
import axios from "axios";

const ApiRunner = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [jsonResult, setJsonResult] = useState("");

  const handleApiUrlChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleRunApi = async () => {
    try {
      const response = await axios.get(apiUrl);
      setJsonResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={apiUrl}
        onChange={handleApiUrlChange}
        placeholder="Enter API URL"
      />
      <button onClick={handleRunApi}>Run API</button>
      <pre>{jsonResult}</pre>
    </div>
  );
};

export default ApiRunner;
