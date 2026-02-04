import React from "react";
import { useParams } from "react-router-dom";

const ModelViewer = () => {
  const { folder } = useParams();

//path//
  const modelPath = `/model/${folder}/index.html`;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Viewing: {folder}</h1>
      <iframe
        src={modelPath}
        width="100%"
        height="600px"
        title={folder}
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default ModelViewer;


