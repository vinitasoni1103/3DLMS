import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addModel } from '../services/api';

const AddModelPage = () => {
  const [name, setName] = useState('');
  const [folder, setFolder] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addModel({ name, folder, description, thumbnail });
    navigate('/dashboard');
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>➕ Add New 3D Model</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Model Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Model Folder Name"
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Model Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ ...inputStyle, height: '100px' }}
        />
        <input
          type="text"
          placeholder="Thumbnail Image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '6px',
  border: '1px solid #aaa'
};

const submitButtonStyle = {
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default AddModelPage;
