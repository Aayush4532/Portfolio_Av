import React, { useEffect, useState } from "react";
import Style from "./boot.module.css";

const Boot = ({ onLogin }) => {
  const fullName = "Aayush Verma";
  const [currentText, setCurrentText] = useState(""); 
  useEffect(() => {
    if (currentText.length < fullName.length) {
      const typingInterval = setTimeout(() => {
        setCurrentText(fullName.slice(0, currentText.length + 1));
      }, 150);

      return () => clearTimeout(typingInterval); 
    }
  }, [currentText, fullName]);

  return (
    <div className={Style.container}>
      <div className={Style.profile}>
        <div className={Style.avatar}>
          <img src="assets/photos.jpg" alt="Profile Avatar" />
        </div>
        <div className={Style.text}>
          {currentText}
        </div>
        <p id="info">Fullstack Web & App Developer</p>
        <button className={Style.button} onClick={onLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Boot;
