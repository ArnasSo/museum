import { useState } from "react";
import "./App.css";

import LandingScreen from "./components/LandingScreen/LandingScreen";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import HuntScreen from "./components/HuntScreen/HuntScreen";
import EndScreen from "./components/EndScreen/EndScreen";

function App() {
  const [screen, setScreen] = useState("landing");

  const handleRestart = () => {
    setScreen("landing");
  };

  return (
    <div className="app">
      {screen === "landing" && (
        <LandingScreen onStart={() => setScreen("intro")} />
      )}

      {screen === "intro" && (
        <IntroScreen onStartHunt={() => setScreen("hunt")} />
      )}

      {screen === "hunt" && (
        <HuntScreen onFinish={() => setScreen("end")} />
      )}

      {screen === "end" && (
        <EndScreen onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;