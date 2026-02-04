import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchModels } from '../services/api';
import { updateAssignedModels } from '../services/userApi';


const AssignModel = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // user ID from URL
  const [user, setUser] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
  const load = async () => {
    try {
      // Step 1: get models
      const modelData = await fetchModels();
      setModels(modelData);

      // Step 2: fetch user data including assigned models
      const userRes = await fetch(`http://localhost:5000/api/users/${id}`);
      const userData = await userRes.json();

      setUser(userData);

      // ccheck if assignedModels is valid and map IDs
      if (userData.assignedModels && Array.isArray(userData.assignedModels)) {
        const assignedIds = userData.assignedModels.map((model) => {
          if (typeof model === 'string') return model; // Already ID
          return model._id; // Populated object
        });

        setSelectedModels(assignedIds);
      }
    } catch (err) {
      console.error("Error fetching models or user:", err);
    }
  };

  load();
}, [id]);

  const handleCheckboxChange = (modelId) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter((id) => id !== modelId));
    } else {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const handleAssign = async () => {
  try {
    await updateAssignedModels(id, selectedModels);
    alert('Models assigned successfully!');
    navigate('/admin/users');  // redirect
  } catch (err) {
    console.error('Error assigning models:', err);
  }
};



  return (
    <div style={{ padding: '20px' }}>
      <h2>Assign Models to {user?.name}</h2>
      {models.length === 0 ? (
        <p>No models found</p>
      ) : (
        models.map((model) => (
          <div key={model._id}>
            <label>
              <input
                  type="checkbox"
                  checked={selectedModels.includes(model._id)}
                  onChange={() => handleCheckboxChange(model._id)}
                />{" "}
                {model.name}
            </label>
          </div>
        ))
      )}
      <button onClick={handleAssign} style={{ marginTop: '10px' }}>Save</button>
    </div>
  );
};

export default AssignModel;

