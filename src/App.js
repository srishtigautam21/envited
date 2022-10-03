import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create' element={<CreateEventPage />} />
      </Routes>
    </div>
  );
}

export default App;
