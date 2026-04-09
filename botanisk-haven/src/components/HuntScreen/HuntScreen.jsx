import { useState } from "react";
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
  const [scanValue, setScanValue] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  const handleFakeScan = () => {
    if (!scanValue.trim()) {
      return;
    }

    if (scanValue.trim() === plant.qr_code) {
      onScanSuccess();
    } else {
      onScanFail();
    }
  };

  const handleRealScan = (decodedText) => {
    setShowScanner(false);

    if (decodedText.trim() === plant.qr_code) {
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
          >
            {showHint ? "Hide hint" : "Show hint"}
          </button>

          <button
            className={styles.primaryButton}
            onClick={() => setShowScanner(true)}
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

        <div className={styles.testBox}>
          <label className={styles.testLabel} htmlFor="qr-test-input">
            Temporary QR test input
          </label>

          <input
            id="qr-test-input"
            className={styles.input}
            type="text"
            placeholder={`Type ${plant.qr_code}`}
            value={scanValue}
            onChange={(event) => setScanValue(event.target.value)}
          />

          <button className={styles.testButton} onClick={handleFakeScan}>
            Check QR
          </button>
        </div>

        {result && (
          <ResultMessage
            type={result}
            plantName={plant.name}
            onTryAgain={onTryAgain}
          />
        )}
      </div>

      {showScanner && (
        <QrScanner
          onScan={handleRealScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </section>
  );
}

export default HuntScreen;