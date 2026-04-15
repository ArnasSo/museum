import { useMemo, useState } from "react";
import "./App.css";

import plants from "./data/plants.json";

import LandingScreen from "./components/LandingScreen/LandingScreen";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import HowToScreen from "./components/HowToScreen/HowToScreen";
import RoundIntroScreen from "./components/RoundIntroScreen/RoundIntroScreen";
import HuntScreen from "./components/HuntScreen/HuntScreen";
import EndScreen from "./components/EndScreen/EndScreen";

function App() {
  const [screen, setScreen] = useState("landing");
  const [gameKey, setGameKey] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundStep, setRoundStep] = useState("intro");
  const [result, setResult] = useState(null);

  const selectedPlants = useMemo(() => {
    const shuffled = [...plants].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, [gameKey]);

  const currentPlant = selectedPlants[currentRound];

  const startNewGame = () => {
    setGameKey((prev) => prev + 1);
    setCurrentRound(0);
    setRoundStep("intro");
    setResult(null);
    setScreen("landing");
  };

  const handleStartIntro = () => {
    setScreen("intro");
  };

  const handleShowHowTo = () => {
    setScreen("howto");
  };

  const handleStartGame = () => {
    setScreen("game");
    setCurrentRound(0);
    setRoundStep("intro");
    setResult(null);
  };

  const handleGoToHunt = () => {
    setRoundStep("hunt");
    setResult(null);
  };

  const handleScanSuccess = () => {
    setResult("success");
  };

  const handleContinue = () => {
    const isLastRound = currentRound === selectedPlants.length - 1;

    if (isLastRound) {
      setScreen("end");
      setResult(null);
      return;
    }

    setCurrentRound((prev) => prev + 1);
    setRoundStep("intro");
    setResult(null);
  };

  const handleScanFail = () => {
    setResult("fail");
  };

  const handleTryAgain = () => {
    setResult(null);
    setRoundStep("hunt");
  };

  return (
    <div className="app">
      {screen === "landing" && <LandingScreen onStart={handleStartIntro} />}

      {screen === "intro" && <IntroScreen onStartHunt={handleShowHowTo} />}

      {screen === "howto" && <HowToScreen onReady={handleStartGame} />}

      {screen === "game" && roundStep === "intro" && currentPlant && (
        <RoundIntroScreen
          plant={currentPlant}
          roundNumber={currentRound + 1}
          totalRounds={selectedPlants.length}
          onStartRound={handleGoToHunt}
        />
      )}

      {screen === "game" && roundStep === "hunt" && currentPlant && (
        <HuntScreen
          plant={currentPlant}
          roundNumber={currentRound + 1}
          totalRounds={selectedPlants.length}
          result={result}
          onScanSuccess={handleScanSuccess}
          onScanFail={handleScanFail}
          onTryAgain={handleTryAgain}
          onContinue={handleContinue}
        />
      )}

      {screen === "end" && <EndScreen onRestart={startNewGame} />}
    </div>
  );
}

export default App;