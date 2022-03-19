import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div>
      <div className="relative bg-red-700 w-full h-10 flex items-center justify-around text-2xl  text-white font-bold">
        <BiMenuAltLeft className="cursor-pointer -ml-6 " onClick={toggle} />
        <h1 className="-ml-6">Pork Management</h1>
      </div>
      {menu && (
        <div className="w-1/2 h-screen bg-red-700 fixed z-20 grid place-items-center">
          <Link to="/" className="text-white text-2xl pl-6 font-bold">
            Home
          </Link>
          <Link to="/creator" className="text-white text-2xl pl-6 font-bold">
            QrCreator
          </Link>
          <Link to="/reader" className="text-white text-2xl pl-6 font-bold">
            Reader
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
