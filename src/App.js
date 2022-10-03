import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { CreatePage } from "./pages/CreatePage/CreatePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const initialState = {
    name: "",
    host: "",
    startDate: null,
    endDate: null,
    startTime: "",
    endTime: "",
    location: "",
    img: [],
  };
  const [input, setInput] = useState(initialState);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/create'
          element={<CreatePage input={input} setInput={setInput} />}
        />
      </Routes>
    </div>
  );
}

export default App;
