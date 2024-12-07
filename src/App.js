import React, { useState } from "react";
import Boot from "./components/Boot";
import Home from "./components/home";
const App = () => {
  const [showBoot, setShowBoot] = useState(true);
  const handleLogin = () => {
    setShowBoot(false);
  };
  return (
    <>{showBoot ? <Boot onLogin={() => setShowBoot(false)} /> : <Home />}</>
  );
};
export default App;
