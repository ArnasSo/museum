import styles from "./EndScreen.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";

function EndScreen({ onRestart }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.confetti} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.piece}></span>
          ))}
        </div>

        <p className={styles.kicker}>Completed!</p>

        <h2 className={styles.title}>
          You found them all!
        </h2>

        <img
          src={mascotExcited}
          alt="Happy mascot"
          className={styles.mascot}
        />

        <p className={styles.text}>
          Amazing job! You finished the whole plant hunt 🎉
        </p>

        <button className={styles.button} onClick={onRestart}>
          Play again
        </button>
      </div>
    </section>
  );
}

export default EndScreen;