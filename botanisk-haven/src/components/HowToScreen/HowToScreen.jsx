import styles from "./HowToScreen.module.css";

function HowToScreen({ onReady }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-excited.png",
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <img
              src={mascotImage}
              alt="Plant Hunt mascot"
              className={styles.mascot}
            />

            <h1 className={styles.title}>
              HOW
              <br />
              TO PLAY?
            </h1>
          </div>

          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <span className={styles.icon} aria-hidden="true">
                🔎
              </span>
              <p className={styles.stepText}>STEP 1: Find the plant</p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.icon} aria-hidden="true">
                📷
              </span>
              <p className={styles.stepText}>STEP 2: Click camera icon</p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.icon} aria-hidden="true">
                ⌗
              </span>
              <p className={styles.stepText}>STEP 3: Scan the QR code</p>
            </div>
          </div>

          <p className={styles.tip}>Tip: Click hint icon to get a hint</p>
        </div>

        <button className={styles.button} onClick={onReady}>
          I’M READY!
        </button>
      </div>
    </section>
  );
}

export default HowToScreen;