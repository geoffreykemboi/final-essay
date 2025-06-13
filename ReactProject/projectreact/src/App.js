import logo from './logo.svg';
import './App.css';
import './style.css';
import React from "react";
import MyFirstComponent from './component';
import React, {useState,useEffect} from "react";





function App() {
  const [name,setName] = useState("Christine")

  return (
    <h1>My name {name}</h1>

      useEffect(() => {

  
        alert("is this you" + name);


      })



  );
}

export default App;
