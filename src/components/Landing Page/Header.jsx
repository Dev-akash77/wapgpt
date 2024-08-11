import React, { useContext, useEffect } from 'react'
import { CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AllData } from '../../context/DataStore';
import { IoSunnySharp } from "react-icons/io5";
const Header = () => {
  const {darkmode,darkM}=useContext(AllData);
  useEffect(()=>{
    let body=document.querySelector("body");
    if (darkM.darkmode) {
      body.classList.add("dark")
    }else{
      body.classList.remove("dark")
    }
  },[darkM])
  
  return (
    <>
    <div className='header fc'>
      <div className="container header_container fcb">

       <div className="logo_name fcb">
       <div className="logomain cc">
         <Link to="/chatbot" className="fc"><img src="/images/wappGPTlogo.svg" alt="Logo" /></Link>
        </div>
        <h2>wap<span>GPT</span></h2>
       </div>

       <div className="allLink fcb">
        <button className='pro'>Try Pro</button>
        <button className="changeicon" onClick={darkmode}>
          {darkM.darkmode?<IoSunnySharp className="mi modeicon"/>:<CiDark className='modeicon'/>}
          <p className={`modeArticle ${darkM.darkmode&&"changedark"}`}>
          {darkM.darkmode?"Light":"Dark"}
          </p>
        </button>
       </div>
      </div>
    </div>
    </>
  )
}

export default Header