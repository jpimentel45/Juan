import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      
        <Navbar />
        <br />
        
    
    </Router>
  );
}

export default App;
