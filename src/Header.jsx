import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import 'animate.css';


function Header() {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div>
      <div className="relative bg-red-700 w-full h-10 flex items-center justify-around text-2xl  text-white font-bold">
        <BiMenuAltLeft className="cursor-pointer -ml-6 " onClick={toggle} />
        <Link to="/"><h1 className="-ml-6">Pork Management</h1></Link>
      </div>
      {menu && (
        <div className="p-3 bg-red-700 fixed z-20 flex flex-col justify-around items-center rounded-br-3xl min-h-[50%]">
          <Link to="/" className="text-white text-xl pl-2 font-bold animate__animated  animate__bounceInLeft delay-2s">
            Home
          </Link>
          <Link to="/creator" className="text-white text-xl pl-2 font-bold animate__animated animate__bounceInLeft delay-2s">
            QrCreator
          </Link>
          <Link to="/reader" className="text-white text-xl pl-2 font-bold animate__animated animate__bounceInLeft delay-2s">
            Reader
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
