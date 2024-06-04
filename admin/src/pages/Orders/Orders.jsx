import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="order add">
      <h3>Заказы</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src="" alt="" />
            <div>
              <p className="order-item-photos">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>{order.address.email}</p>
            <p>Количество: {order.items.length}</p>
            <p>{order.amount} ₽</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="В обработке">В обработке</option>
              <option value="Обрабатывается">Обрабатывается</option>
              <option value="Доставлен">Доставлен</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
