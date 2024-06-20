import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddUser = ({ url }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${url}/api/user/register`, userData);
    if (response.data.success) {
      setUserData({
        name: "",
        email: "",
        password: "",
      });
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add-user">
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="add-user-details">
          <p>Данные пользователя</p>
          <input
            onChange={handleInputChange}
            value={userData.name}
            type="text"
            name="name"
            placeholder="Введите имя"
          />
          <input
            onChange={handleInputChange}
            value={userData.email}
            type="email"
            name="email"
            placeholder="Введите email"
          />
          <input
            onChange={handleInputChange}
            value={userData.password}
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className="add-btn">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddUser;
