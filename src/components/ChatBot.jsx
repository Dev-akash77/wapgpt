import React from 'react'
import AiHeader from './AiHeader'
import AiFooter from './AiFooter'
import AiChat from './AiChat'

const ChatBot = () => {
  return (
    <div className="chatbot_main_wrapper">
    <div className="chat_bot_main">
      <AiHeader/>
      <AiChat/>
      <AiFooter/>
    </div>
    </div>
  )
}

export default ChatBot