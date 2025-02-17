import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // header state
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
 

  function handleSubmit(){
    let token=JSON.parse(localStorage.getItem("Token"));
    localStorage.removeItem('Token');
    localStorage.setItem("loginIn", false);
    navigate("/Signup")
  }
  return (

    <header
      className={`${
        isActive ? "bg-white py-4 shadow-lg" : "bg-transparent py-6"
      } fixed w-full z-10 lg:px-8 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px] lg:w-[50px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* search and cart */}
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            {/* //serach */}
            {/* <BsSearch className="text-2xl lg:text-3xl" /> */}
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl lg:text-3xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] text-white rounded-full flex justify-center items-center">
              {/* {itemAmount} */}
              {JSON.parse(sessionStorage.getItem("item"))}
            </div>
          </div>
          <div>
            <button onClick={handleSubmit}>Logout</button>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
