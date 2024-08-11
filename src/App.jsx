import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatBot from "./components/ChatBot";
import LandingPage from "./components/Landing Page/LnadingPage.jsx";
import { DataProvider } from "./context/DataStore";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          {/* <ChatBot/> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
