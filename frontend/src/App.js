import "./App.css";
import React , {useState} from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact"
import Read from "./Components/Read";
import FeedRead from "./Components/FeedRead";
import LoadingBar from 'react-top-loading-bar'
import Alert from "./Components/Alerts";


function App() {
  const [progress,setProgress] = useState(0)
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // 
  };



  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Alert alert={alert} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path="/services" element={<Services setProgress={setProgress}/>} />
        <Route exact path="/contact" element={<Contact setProgress={setProgress}/>} />
        <Route exact path="/read" element={<Read setProgress={setProgress} showAlert={showAlert}/>} />
        <Route exact path="/show" element={<FeedRead setProgress={setProgress} showAlert={showAlert}/>} />
        </Routes>
      
      </HashRouter>
    </div>
  );
}

export default App;
