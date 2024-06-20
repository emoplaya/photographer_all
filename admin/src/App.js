import React from "react";
import "./scss/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./pages/AddUsers/AddUsers";
import UsersList from "./pages/usersList/usersList";

function App() {
  const url = "http://localhost:5000";
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/adduser" element={<AddUser url={url} />} />
          <Route path="/userlist" element={<UsersList url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
