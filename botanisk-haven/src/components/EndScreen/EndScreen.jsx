import styles from "./EndScreen.module.css";

function EndScreen({ onRestart }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <h2 className={styles.title}>You found them all!</h2>
        <p className={styles.text}>
          Amazing job! You completed the whole plant hunt.
        </p>
        <button className={styles.button} onClick={onRestart}>
          Another round
        </button>
      </div>
    </section>
  );
}

export default EndScreen;