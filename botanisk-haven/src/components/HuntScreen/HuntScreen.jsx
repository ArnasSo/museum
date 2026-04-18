import { useEffect, useState } from "react";
import styles from "./HuntScreen.module.css";
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
    setShowHint((prev) => !prev);
  };

  const handleRealScan = (decodedText) => {
    const scannedValue = String(decodedText).trim();
    const expectedValue = String(plant.qr_code).trim();

    setShowScanner(false);
    setShowHint(false);

    if (scannedValue === expectedValue) {
      onScanSuccess();
    } else {
      onScanFail();
    }
  };

  const plantImage = new URL(
    `../../assets/plants/${plant.image}`,
    import.meta.url
  ).href;

  const climateImage = new URL(
    `../../assets/icons/${plant.climate_image}`,
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <header className={styles.topBar}>
          <div className={styles.roundInfo}>
            <p className={styles.kicker}>PLANT HUNT</p>
            <p className={styles.round}>
              HUNT {roundNumber} / {totalRounds}
            </p>
          </div>

          <ProgressDots current={roundNumber} total={totalRounds} />
        </header>

        {showHint && (
          <div className={styles.hintOverlay}>
            <div className={styles.hintBanner}>
              <div className={styles.hintBannerInner}>
                <p className={styles.hintLabel}>Hint</p>
                <p className={styles.hintText}>{plant.hint}</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.mainContent}>
          <div className={styles.imageWrap}>
            <img
              src={plantImage}
              alt={plant.name}
              className={styles.plantImage}
            />
          </div>

          <div className={styles.infoBlock}>
            <h1 className={styles.plantName}>{plant.name}</h1>
            <p className={styles.description}>{plant.introduction}</p>

            <div className={styles.climateBar}>
              <img src={climateImage} alt="" className={styles.climateIcon} />
              <span className={styles.climateText}>{plant.likes}</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setShowScanner(true)}
            disabled={result === "success"}
            aria-label="Open camera"
          >
            <img src={cameraIcon} alt="" />
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={handleShowHint}
            disabled={result === "success"}
            aria-label="Show hint"
          >
            <img src={hintIcon} alt="" />
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
              funFact={plant.fun_fact}
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