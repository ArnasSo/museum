import styles from "./RoundIntroScreen.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";

function RoundIntroScreen({ plant, roundNumber, totalRounds, onStartRound }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <p className={styles.round}>
          Hunt {roundNumber} / {totalRounds}
        </p>

        <img
          src={mascotExcited}
          alt="Mascot guide"
          className={styles.mascot}
        />

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