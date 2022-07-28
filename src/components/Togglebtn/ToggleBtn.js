import { useState } from "react";
import "./ToggleBtn.css";

const ToggleBtn = (props) => {
  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    setTheme(!theme);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "gray" : "white",
        // height: "100vh",
        // width: "100vw",
        // overflow: "hidden",
      }}
    >
      <div className="toggle-slide" onClick={handleClick}>
        <div className={`switch ${theme ? "slide " : ""}`}></div>
      </div>
    </div>
  );
};

export default ToggleBtn;
