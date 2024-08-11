import React, { createContext, useEffect, useState } from "react";
import run from "../config/gemini";

export const AllData = createContext();

export const DataProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [darkM, setDarkM] = useState(JSON.parse(localStorage.getItem("data")) || {darkmodes:false});
  const sendPrompt = async (prompt) => {
    if (!prompt) {
      return false;
    }
    // ! time
    let curTime = new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const newEntry = { userData: input, aiData: null,time:curTime };
    setData((prevData) => [...prevData, newEntry]);
    setInput("");

    try {
      const response = await run(input);
      setData((prevData) => {
        const updatedData = [...prevData];
        const newResponse = response.split("**");
        let newResponseData = "";

        for (let i = 0; i < newResponse.length; i++) {
          if (i === 0 || i % 2 !== 0) {
            newResponseData += `<b>${newResponse[i]}</b>`;
          } else {
            newResponseData += newResponse[i];
          }
        }
        let responsetwo = newResponseData.split("*").join("</br>");
        updatedData[updatedData.length - 1].aiData = responsetwo;
        updatedData[updatedData.length - 1].time = curTime;
        return updatedData;
      });
    } catch (error) {
      console.error("Error fetching AI data:", error);
    }
  };
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(darkM))
  },[darkM])
  const darkmode=()=>{
    setDarkM(prevState => ({
      darkmode: !prevState.darkmode
    }));
  }

  return (
    <AllData.Provider value={{ setInput, input, data, sendPrompt,darkmode,darkM}}>
      {children}
    </AllData.Provider>
  );
};
