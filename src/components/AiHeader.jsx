import React from 'react'
import { GoDotFill } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
const AiHeader = () => {

  return (
    <>
    <header>
       <div className="mainlogo_chat">
       <img src="/images/wappGPTlogo.svg" alt="chatbot image" />
        <div className="heading_online_main c">
            <h1 className="heading">WappGPT</h1>
            <div className="online_main f">
                <GoDotFill/>
                 Online
            </div>
        </div>
       </div>
       <Link to='/'><RxCrossCircled className='crossLogo'/></Link>
    </header>
    </>
  )
}

export default AiHeader