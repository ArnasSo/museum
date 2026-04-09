import styles from "./RoundIntroScreen.module.css";

function RoundIntroScreen({ plant, roundNumber, totalRounds, onStartRound }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <p className={styles.round}>
          Hunt {roundNumber} / {totalRounds}
        </p>

        <div className={styles.mascot}>Mascot PNG here</div>

        <div className={styles.bubble}>
          <p className={styles.text}>
            Can you help me find <strong>{plant.name}</strong>?
          </p>
        </div>

        <button className={styles.button} onClick={onStartRound}>
          Yes, let’s go!
        </button>
      </div>
    </section>
  );
}

export default RoundIntroScreen;