import styles from "./IntroScreen.module.css";

function IntroScreen({ onStartHunt }) {
  const mascotImage = new URL(
    "../../assets/mascots/mascot-happy.png",
    import.meta.url
  ).href;

  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.mascotWrap}>
          <img
            src={mascotImage}
            alt="Happy mascot"
            className={styles.mascot}
          />
        </div>

        <div className={styles.bubble}>
          Welcome to the plant hunt! I will give you hints. Find the right
          plant, scan its QR code, and complete all 5 hunts!
        </div>

        <button className={styles.button} onClick={onStartHunt}>
          Start the Hunt
        </button>
      </div>
    </section>
  );
}

export default IntroScreen;