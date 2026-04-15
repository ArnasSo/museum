import { useEffect, useRef, useState } from "react";
import styles from "./HuntScreen.module.css";
import PlantCard from "../PlantCard/PlantCard";
import ResultMessage from "../ResultMessage/ResultMessage";
import QrScanner from "../QrScanner/QrScanner";
import ProgressDots from "../ProgressDots/ProgressDots";
import hintIcon from "../../assets/icons/hint-icon.png";
import cameraIcon from "../../assets/icons/camera-icon.png";

function HuntScreen({
  plant,
  roundNumber,
  totalRounds,
  result,
  onScanSuccess,
  onScanFail,
  onTryAgain,
  onContinue,
}) {
  const [showHint, setShowHint] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    setShowHint(false);
    setShowScanner(false);

  }, [plant]);


  const handleShowHint = () => {
    if (result === "success") return;

    setShowHint(prev => !prev);
  };

  const handleRealScan = (decodedText) => {
    const scannedValue = String(decodedText).trim();
    const expectedValue = String(plant.qr_code).trim();

    setShowScanner(false);

    if (showHint) {
      setShowHint(false);
      setHintTick(0);

      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current);
      }

      if (hintProgressRef.current) {
        clearInterval(hintProgressRef.current);
      }
    }

    if (scannedValue === expectedValue) {
      onScanSuccess();
    } else {
      onScanFail();
    }
  };

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <header className={styles.topBar}>
          <div className={styles.roundInfo}>
            <p className={styles.kicker}>Plant Hunt</p>
            <p className={styles.round}>
              Hunt {roundNumber} / {totalRounds}
            </p>
          </div>

          <ProgressDots current={roundNumber} total={totalRounds} />
        </header>

        {showHint && (
          <div className={styles.hintBanner}>
            <div className={styles.hintBannerInner}>
              <p className={styles.hintLabel}>Hint</p>
              <p className={styles.hintText}>{plant.hint}</p>
            </div>
          </div>
        )}

        <div className={styles.mainContent}>
          <PlantCard plant={plant} />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.iconButton} ${styles.hintButton}`}
            onClick={handleShowHint}
            disabled={result === "success"}
            aria-label="Show hint"
          >
            <img src={hintIcon} alt="" />
          </button>

          <button
            type="button"
            className={`${styles.iconButton} ${styles.cameraButton}`}
            onClick={() => setShowScanner(true)}
            disabled={result === "success"}
            aria-label="Open camera"
          >
            <img src={cameraIcon} alt="" />
          </button>
        </div>
      </div>

      {showScanner && (
        <QrScanner
          onScan={handleRealScan}
          onClose={() => setShowScanner(false)}
        />
      )}

      {result && (
        <div className={styles.resultOverlay}>
          <div className={styles.resultBox}>
            <ResultMessage
              type={result}
              plantName={plant.name}
              onTryAgain={onTryAgain}
              onContinue={onContinue}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default HuntScreen;