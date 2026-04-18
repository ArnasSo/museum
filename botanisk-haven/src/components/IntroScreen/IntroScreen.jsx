import styles from "./IntroScreen.module.css";

function IntroScreen({ onStartHunt }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-happy.png",
    import.meta.url,
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.bubbleWrap}>
          <div className={styles.bubble}>
            <p className={styles.bubbleText}>
              G&apos;day, I need your help in hunting some extraordinary plants.
              <br />
              <br />
              Will you help me?
            </p>
          </div>
        </div>

        <div className={styles.mascotWrap}>
          <img src={mascotImage} alt="Happy mascot" className={styles.mascot} />
        </div>

        <div className={styles.ctaWrap}>
          <button className={styles.cta} onClick={onStartHunt} type="button">
            <span className={styles.ctaText}>I&apos;M IN!</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroScreen;