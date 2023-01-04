import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { RenderR } from "./components/RenderR";
import { Home } from "./components/Home";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }



if (currentForm === 'register'){
  return (
    <div className="App">
      <Register onFormSwitch={toggleForm} />
    </div>
  );
}

else if (currentForm === 'login') {
  return (
    <div className="App">
      <Login onFormSwitch={toggleForm} />
    </div>
  );
}

else if (currentForm === 'RenderR') {
  return (
    <div className="App">
      <RenderR onFormSwitch={toggleForm} />
    </div>
  );
}

else  {
  return (
    <div className="App">
      <Home onFormSwitch={toggleForm} />
    </div>
  );
}

} 

export default App;
