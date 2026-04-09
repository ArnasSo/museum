import styles from "./LandingScreen.module.css";

function LandingScreen({ onStart }) {
  return (
    <section className={styles.screen} onClick={onStart}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Plant Hunt</h1>
        <p className={styles.subtitle}>Explore, find, scan, and win!</p>
        <p className={styles.cta}>Tap anywhere to start</p>
      </div>
    </section>
  );
}

export default LandingScreen;