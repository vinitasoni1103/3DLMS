import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/userApi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Users</h2>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Assigned Models</th>
            <th>Assign More</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
            {user.assignedModels && user.assignedModels.length > 0 ? (
            <ul>
              {user.assignedModels.map((model) => (
                <li key={model._id}>{model.name}</li>
              ))}
            </ul>
          ) : (
            <em>No models assigned</em>
          )}
          </td>
        <td>
          <button onClick={() => navigate(`/admin/assign/${user._id}`)}>
            Assign Models
          </button>
        </td>
      </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
