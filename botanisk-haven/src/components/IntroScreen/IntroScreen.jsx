import styles from "./IntroScreen.module.css";

function IntroScreen({ onStartHunt }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.mascotPlaceholder}>Mascot PNG goes here</div>

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