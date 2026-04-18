import styles from "./EndScreen.module.css";

function EndScreen({ onClaimReward, onRestart }) {
  const mascotEnd = new URL(
    "../../assets/mascots/mascot-end.png",
    import.meta.url
  ).href;

  const mascotStars = new URL(
    "../../assets/mascots/mascot-stars.png",
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.kicker}>BIG WIN</p>

          <h2 className={styles.title}>Hunt completed!</h2>

          <img
            src={mascotStars}
            alt=""
            className={styles.stars}
            aria-hidden="true"
          />

          <img
            src={mascotEnd}
            alt="Celebrating mascot"
            className={styles.mascot}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.cta} ${styles.primaryCta}`}
            onClick={onClaimReward}
            type="button"
          >
            <span className={styles.ctaText}>CLAIM REWARD</span>
          </button>

          <button
            className={`${styles.cta} ${styles.secondaryCta}`}
            onClick={onRestart}
            type="button"
          >
            <span className={styles.ctaText}>PLAY AGAIN</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default EndScreen;