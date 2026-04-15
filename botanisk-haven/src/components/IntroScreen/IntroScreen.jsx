import styles from "./IntroScreen.module.css";

function IntroScreen({ onStartHunt }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-happy.png",
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <p className={styles.pageLabel}>Plant Hunt</p>

        <div className={styles.bubbleWrap}>
          <div className={styles.bubble}>
            <p className={styles.bubbleText}>
              Welcome to the plant hunt! I will give you hints. Find the right
              plant, scan its QR code, and complete all 5 hunts!
            </p>
          </div>
        </div>

        <div className={styles.mascotWrap}>
          <img
            src={mascotImage}
            alt="Happy mascot"
            className={styles.mascot}
          />
        </div>

        <button className={styles.button} onClick={onStartHunt}>
          Begin the Hunt!
        </button>
      </div>
    </section>
  );
}

export default IntroScreen;