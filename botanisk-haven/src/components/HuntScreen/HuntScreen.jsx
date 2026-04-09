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
  const [scanValue, setScanValue] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    setShowHint(false);
    setScanValue("");
    setShowScanner(false);
  }, [plant]);

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
    console.log("SCANNED:", decodedText);
    console.log("EXPECTED:", plant.qr_code);

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

        {result && (
          <ResultMessage
            type={result}
            plantName={plant.name}
            onTryAgain={onTryAgain}
          />
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
            disabled={result === "success"}
          />

          <button
            className={styles.testButton}
            onClick={handleFakeScan}
            disabled={result === "success"}
          >
            Check QR
          </button>
        </div>
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