import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteModel, fetchModels } from '../services/api';

const DashboardPage = () => {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getModels = async () => {
      const data = await fetchModels();
      setModels(data);
    };
    getModels();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this model?')) {
      await deleteModel(id);
      setModels(models.filter((model) => model._id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📊 Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
        <Link to="/add-model"><button style={buttonStyle}>➕ Add New Model</button></Link>
        <Link to="/admin/users"><button style={buttonStyle}>👥 Manage Users</button></Link>
      </div>

      <div style={tableHeaderStyle}>
        <div style={{ width: '120px' }}>Thumbnail</div>
        <div style={{ flex: 1 }}>Model Name</div>
        <div style={{ flex: 2 }}>Description</div>
        <div style={{ flex: 1 }}>Folder</div>
        <div style={{ width: '240px' }}>Actions</div>
      </div>

      {models.map((model) => (
        <div key={model._id} style={modelRowStyle}>
          <img
              src={model.thumbnail}
              alt={model.name}
              style={{ width: "100px", height: "100px" }}
            />
          <div style={{ flex: 1, paddingLeft: '10px' }}>
            <h4 style={{ margin: 0 }}>{model.name}</h4>
          </div>
          <div style={{ flex: 2, paddingLeft: '10px' }}>
            <p style={{ margin: 0 }}>{model.description}</p>
          </div>
          <div style={{ flex: 1, paddingLeft: '10px' }}>
            <p style={{ margin: 0 }}>{model.folder}</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button style={actionButton} onClick={() => window.open(`/model/${model.folder}/index.html`, "_blank")}>
              👁️ View
            </button>
            <button style={actionButton} onClick={() => handleEdit(model._id)}>✏️ Edit</button>
            <button style={{ ...actionButton, backgroundColor: '#ff4d4d' }} onClick={() => handleDelete(model._id)}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3f51b5',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const tableHeaderStyle = {
  display: 'flex',
  fontWeight: 'bold',
  borderBottom: '2px solid #444',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#f4f4f4',
  borderRadius: '6px'
};

const modelRowStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '6px',
  marginBottom: '10px'
};

const actionButton = {
  padding: '6px 12px',
  backgroundColor: '#2196f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default DashboardPage;
