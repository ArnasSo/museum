import { useEffect, useState } from "react";
import styles from "./HuntScreen.module.css";
import PlantCard from "../PlantCard/PlantCard";
import ResultMessage from "../ResultMessage/ResultMessage";
import QrScanner from "../QrScanner/QrScanner";

function HuntScreen({
  plant,
  roundNumber,
  totalRounds,
  result,
  onScanSuccess,
  onScanFail,
  onTryAgain,
}) {
  const [showHint, setShowHint] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    setShowHint(false);
    setShowScanner(false);
  }, [plant]);

  const handleRealScan = (decodedText) => {
    const scannedValue = String(decodedText).trim();
    const expectedValue = String(plant.qr_code).trim();

    setShowScanner(false);

    if (scannedValue === expectedValue) {
      onScanSuccess();
    } else {
      onScanFail();
    }
  };

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <p className={styles.round}>
          Hunt {roundNumber} / {totalRounds}
        </p>

        <PlantCard plant={plant} />

        <div className={styles.actions}>
          <button
            className={styles.secondaryButton}
            onClick={() => setShowHint((prev) => !prev)}
            disabled={result === "success"}
          >
            {showHint ? "Hide hint" : "Show hint"}
          </button>

          <button
            className={styles.primaryButton}
            onClick={() => setShowScanner(true)}
            disabled={result === "success"}
          >
            Open camera
          </button>
        </div>

        {showHint && (
          <div className={styles.hintBox}>
            <p className={styles.hintLabel}>Hint</p>
            <p className={styles.hintText}>{plant.hint}</p>
          </div>
        )}
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
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default HuntScreen;