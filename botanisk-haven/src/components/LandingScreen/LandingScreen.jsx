import styles from "./LandingScreen.module.css";

function LandingScreen({ onStart }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-happy.png",
    import.meta.url
  ).href;

  return (
    <section
      className={styles.screen}
      onClick={onStart}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onStart();
        }
      }}
      aria-label="Start Plant Hunt"
    >
      <div className={styles.card}>
        <div className={styles.topDecor}></div>

        <p className={styles.kicker}>Museum Adventure</p>

        <h1 className={styles.title}>Plant Hunt</h1>

        <p className={styles.subtitle}>
          Explore, find, scan, and win!
        </p>

        <div className={styles.mascotWrap}>
          <img
            src={mascotImage}
            alt="Plant Hunt mascot"
            className={styles.mascot}
          />
        </div>

        <div className={styles.ctaWrap}>
          <p className={styles.cta}>TAP TO START</p>
        </div>
      </div>
    </section>
  );
}

export default LandingScreen;