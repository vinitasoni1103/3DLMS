import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ModelList = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/models")
      .then((res) => setModels(res.data))
      .catch((err) => console.error("Error fetching models", err));
  }, []);

  return (
    <>
    <Header />
    <div style={{ textAlign: "center" }}>
      <h2>Available 3D Models</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
      {models.map((model, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
             <img
              src={model.thumbnail}
              alt={model.name}
              style={{ width: "60%", height: "120px", objectFit: "cover", borderRadius: "4px" }}
            />
             <h3>{model.name}</h3>
             <p style={{ fontSize: "0.9rem", color: "#555" }}>{model.description}</p>
            <Link to={`/view/${model.folder}`}>
              <button>View Model</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ModelList;
