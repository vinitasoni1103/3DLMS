import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchModels, updateModel } from '../services/api';

const EditModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({ name: '', folder: '', description: '', thumbnail: '' });

  useEffect(() => {
    const loadModel = async () => {
      const models = await fetchModels();
      const existingModel = models.find((m) => m._id === id);
      if (existingModel) {
        setModel(existingModel);
      }
    };
    loadModel();
  }, [id]);

  const handleChange = (e) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateModel(id, model);
    alert('Model updated successfully!');
    navigate('/dashboard');
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h2 style={{ marginBottom: '30px', color: '#333' }}>Edit 3D Model</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px', 
          width: '400px', 
          margin: 'auto', 
          padding: '25px',
          border: '1px solid #ddd',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Model Name"
          value={model.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="folder"
          placeholder="Model Folder"
          value={model.folder}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="description"
          placeholder="Model Description"
          value={model.description}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={model.thumbnail}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button 
          type="submit" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Update Model
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

export default EditModel;
