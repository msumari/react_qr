import React,{ useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import 'animate.css';


function Home() {

  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )

  return (
    <div className="pt-20 grid place-items-center">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#BA352F" d="M48.9,-32.8C58.5,-11.5,58.2,11,48.4,26C38.6,41,19.3,48.6,-2.1,49.8C-23.5,51,-47,45.9,-56.1,31.3C-65.1,16.7,-59.7,-7.3,-48,-29.8C-36.2,-52.3,-18.1,-73.3,0.7,-73.7C19.6,-74.2,39.2,-54.1,48.9,-32.8Z" transform="translate(100 100)" />
</svg>
<div className="-mt-96 w-full grid place-items-center">
<img src="https://firebasestorage.googleapis.com/v0/b/qr-code-26ff1.appspot.com/o/pork.png?alt=media&token=26efa83e-8216-43bf-a38b-986f1b1240ff" alt="logo" className="h-24 animate__animated  animate__zoomInDown delay-4s "/>
</div>

<Link to="/creator"><button className="rounded-lg h-12 w-48 bg-red-700 text-white font-bold">Get Started</button></Link>

    </div>
  );
}

export default Home;
