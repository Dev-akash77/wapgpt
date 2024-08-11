import React, { useContext, useEffect, useRef } from "react";
import { AllData } from "../context/DataStore";
import { IoCheckmarkDone } from "react-icons/io5";

const AiChat = () => {
  const { data } = useContext(AllData);
  const chatEndRef = useRef(null);

   useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);
  return (
    <div className="chatbot_chat_main c">
      {data.length === 0 ? (
        <p className="err">No messages yet. Start a conversation!</p>
      ) : (
        data.map((cur, index) => (
          <div className="mychat_aichat_main" key={index}>
            {/*! My chat */}
            <div className="chat_main">
              <div className="chat_cont">
                <div className="chat">
                  <p className="chat_article">{cur.userData}</p>
                </div>
                <div className="seenmain">
                  <div className="seen">
                    <IoCheckmarkDone className={`si ${cur.aiData && "sb"}`} />
                    <p className="time">{cur.time}</p>
                  </div>
                  <div className="chat_logo_main">
                    <p className="cl">A</p>
                  </div>
                </div>
              </div>
            </div>
            {/*! AI chat */}
            {cur.aiData ? (
              <>
                <div className="chat_main">
                  <div className="acc">
                    <div className="aicontent">
                      <p
                        className="aiarticle"
                        dangerouslySetInnerHTML={{ __html: cur.aiData }}
                      ></p>
                    </div>
                    <div className="time_logo_main">
                    <div className="aiclm">
                      <img src="/images/wappGPTlogo.svg" alt="ai logo" />
                    </div>
                    <div className="time">{cur.time}</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="pre_loading_main">
                  <div className="imglogo_main">
                  <img src="/images/wappGPTlogo.svg" alt="ai logo" />
                  </div>
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))
      )}
        <div ref={chatEndRef} />
    </div>
  );
};

export default AiChat;
