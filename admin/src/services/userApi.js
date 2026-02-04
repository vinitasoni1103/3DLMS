const API_BASE = 'http://localhost:5000/api/users'; // Update if needed

export const fetchUsers = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

// services/userApi.js
export const updateAssignedModels = async (userId, modelIds) => {
  const res = await fetch(`http://localhost:5000/api/users/${userId}/assign-models`, {
    method: 'POST', // ✅ Match your backend route method
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ assignedModels: modelIds }),
  });
  return res.json();
};


  