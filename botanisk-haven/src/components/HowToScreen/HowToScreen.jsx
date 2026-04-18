import styles from "./HowToScreen.module.css";

function HowToScreen({ onReady }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-confused.png",
    import.meta.url
  ).href;

  const cameraIcon = new URL(
    "../../assets/icons/camera-icon.png",
    import.meta.url
  ).href;

  const findIcon = new URL(
    "../../assets/icons/arid.png",
    import.meta.url
  ).href;

  const qrIcon = new URL(
    "../../assets/icons/QR-icon.png",
    import.meta.url
  ).href;

  const hintIcon = new URL(
    "../../assets/icons/hint-icon.png",
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            HOW
            <br />
            TO
            <br />
            PLAY?
          </h1>

          <div className={styles.mascotWrap}>
            <img
              src={mascotImage}
              alt="Plant Hunt mascot"
              className={styles.mascot}
            />
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.stepCard}>
            <p className={styles.stepText}><b>STEP 1:</b>Explore
              <img
                src={findIcon}
                alt=""
                className={styles.inlineIcon}
                aria-hidden="true"
              />
              </p>
          </div>

          <div className={styles.stepCard}>
            <p className={styles.stepText}>
              <b>STEP 2:</b>Press
              <img
                src={cameraIcon}
                alt=""
                className={styles.inlineIcon}
                aria-hidden="true"
              />
            </p>
          </div>

          <div className={styles.stepCard}>
            <p className={styles.stepText}><b>STEP 3:</b>Scan&nbsp;
              <img
                src={qrIcon}
                alt=""
                className={styles.inlineIcon}
                aria-hidden="true"
              />
              </p>
            
          </div>
        </div>

        <div className={styles.tipRow}>
          <p className={styles.tipText}>Need help? Use Hint</p>
          <img
            src={hintIcon}
            alt=""
            className={styles.tipIcon}
            aria-hidden="true"
          />
        </div>

        <div className={styles.ctaWrap}>
          <button className={styles.cta} onClick={onReady} type="button">
            <span className={styles.ctaText}>I&apos;M READY</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowToScreen;