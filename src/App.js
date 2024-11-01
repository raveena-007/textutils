import './App.css';
import Alert1 from './Components/Alert1';
import About1 from './Components/About1';
import Navbar1 from './Components/Navbar1';
import TextForm1 from './Components/TextForm1';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
     <Router>
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert1 alert={alert} />
        <div className="container my-3">
           <Routes>
           {/* All children of Routes must be Route components */}
           <Route exact path="/about" element={<About1 mode={mode} />} />
          <Route exact path="/" element={<TextForm1 header="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
     </Router>
    </>
  );
}

export default App;
