import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Protected from "./components/Protected";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import SignUp from "./components/Signup";
const App = () => {
  sessionStorage.setItem("item", JSON.stringify(0));

  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<Protected />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
          {/* Public Routes */}
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
