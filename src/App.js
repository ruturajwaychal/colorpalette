import "./App.css";
import React, { useState } from "react";
import Appbar from "./components/Appbar/Appbar";
// import Colorpalette from "./components/Colorpalette/Colorpalette";
import InputData from "./components/DataSection/InputData";
import About from "./components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");

  const remveBodyClass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    remveBodyClass();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042742";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
    }
  };

  // const toggleMode = (cls) => {
  //   console.log(cls);
  //   remveBodyClass();
  //   document.body.classList.add("bg-" + cls);
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042742";
  //     // showAlert("Dark mode has been enabled", "success");
  //     // document.title="TextUtils-Dark Mode";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled", "success");
  //     // document.title="TextUtils-Light Mode";
  //   }
  // };
  return (
    <Router>
      <div className="App">
        <Appbar mode={mode} toggleMode={toggleMode} />
        {/* <InputData mode={mode} /> */}
        {/* <Colorpalette /> */}
        {/* <About /> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <InputData mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
