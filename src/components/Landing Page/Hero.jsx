import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleCursor = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleCursor);
    
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  
  return (
    <>
        <div className="cursor" onMouseMove={(e)=>{handleCursor(e)}}
          style={{
            position: "absolute",
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
          }}></div>
      <main className="fc">
        <div className="container mdir fcb">
          <div className="left c">
            <p className="description">
              The <span className="accc">AI Chatbot</span> offers intelligent, real-time conversational
              interactions using advanced <span>AI technology</span>.
            </p>
            <Link to="/chatbot" className="va"><div className="view fc"> <FaEye/> wapGPT</div></Link>
          </div>
          <div className="rigth">
            <div className="background">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="forground_main cc">
              <div className="logodiv fc">
               <Link to="/chatbot" className="cc"><img src="/images/wappGPTlogo.svg" alt="logo" /></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
