import React, { useState } from "react";
import Upload from "../../assets/icons/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "10x15",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/photos/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        price: "",
        category: "15x20",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Добавить изображение</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : Upload} alt="" />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Название</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="напишите здесь"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Категория</p>
            <select onChange={onChangeHandler} name="category">
              <option value="10x15">10x15</option>
              <option value="15x20">15x20</option>
              <option value="20x30">20x30</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Цена</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="200 ₽"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Add;
