import styles from "./LandingScreen.module.css";

function LandingScreen({ onStart }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-happy.png",
    import.meta.url
  ).href;

  const logoImage = new URL(
    "../../assets/images/site-logo.png",
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
          event.preventDefault();
          onStart();
        }
      }}
      aria-label="Start Plant Hunt"
    >
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <img
            src={logoImage}
            alt="Plant Hunt logo"
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>
          Start your
          <br />
          exciting journey!
        </h1>

        <div className={styles.mascotWrap}>
          <img
            src={mascotImage}
            alt="Plant Hunt mascot"
            className={styles.mascot}
          />
        </div>

        <p className={styles.cta}>
  <span className={styles.ctaText}>START</span>
</p>
      </div>
    </section>
  );
}

export default LandingScreen;