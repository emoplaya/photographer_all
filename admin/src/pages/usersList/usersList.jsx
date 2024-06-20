import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Убедитесь, что у вас установлен react-toastify

const UsersList = ({ url }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(`${url}/api/user/listuser`); // Замените на ваш endpoint
    if (response.data.success) {
      setUsers(response.data.data);
    } else {
      toast.error("Ошибка при получении списка пользователей");
    }
  };

  const removeUser = async (userId) => {
    const response = await axios.post(`${url}/api/user/removeuser`, {
      id: userId,
    });
    await fetchUsers();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Ошибка при удалении пользователя");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="userslist">
      <div className="list users flex-col">
        <p>Список пользователей</p>
        <div className="list-table">
          <div className="list-table-format-userslist title">
            <b>Имя</b>
            <b>Email</b>
            <b>Удалить</b>
          </div>
          {users.map((user, index) => (
            <div key={index} className="list-table-format-userslist">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p
                onClick={() => removeUser(user._id)}
                className="cursor pointer"
              >
                X
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
