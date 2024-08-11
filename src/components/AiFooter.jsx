import React, { useContext, useRef} from 'react'
import { VscSend } from "react-icons/vsc";
import { AllData } from '../context/DataStore';
const AiFooter = () => {
  const {input,setInput,sendPrompt}=useContext(AllData);
  const inputfield = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendPrompt(input); 
      inputfield.current.blur();
      
    }
  };
  return (
    <>
    <footer className='cc'>
        <div className="input_main fcb">
            <input type="text" placeholder="Type your message here..." value={input}  onKeyDown={handleKeyDown} onChange={(e)=>{setInput(e.target.value)}} ref={inputfield}/>
            <VscSend className="send" onClick={()=>{sendPrompt(input)}}/>
        </div>
    </footer>
    </>
  )
}

export default AiFooter