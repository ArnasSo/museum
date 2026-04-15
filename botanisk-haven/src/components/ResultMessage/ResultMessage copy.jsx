import styles from "./ResultMessage.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import mascotConfused from "../../assets/mascots/mascot-confused.png";

function ResultMessage({ type, plantName, onTryAgain, onContinue }) {
  if (type === "success") {
    return (
      <div className={`${styles.message} ${styles.success}`}>
        <div className={styles.confetti} aria-hidden="true">
          <span className={`${styles.piece} ${styles.orange}`}></span>
          <span className={`${styles.piece} ${styles.yellow}`}></span>
          <span className={`${styles.piece} ${styles.green}`}></span>
          <span className={`${styles.piece} ${styles.blue}`}></span>
          <span className={`${styles.piece} ${styles.orange}`}></span>
          <span className={`${styles.piece} ${styles.yellow}`}></span>
          <span className={`${styles.piece} ${styles.green}`}></span>
          <span className={`${styles.piece} ${styles.blue}`}></span>
        </div>

        <img
          src={mascotExcited}
          alt="Happy mascot"
          className={styles.mascot}
        />

        <p className={styles.title}>You found it!</p>

        <p className={styles.text}>
          Yay! You found <strong>{plantName}</strong>.
        </p>

        <button className={`${styles.button} ${styles.successButton}`} onClick={onContinue}>
          Continue
        </button>
      </div>
    );
  }

  if (type === "fail") {
    return (
      <div className={`${styles.message} ${styles.fail}`}>
        <img
          src={mascotConfused}
          alt="Confused mascot"
          className={styles.mascot}
        />

        <p className={styles.title}>Almost!</p>

        <p className={styles.text}>
          That was not the right plant yet. Let’s try again.
        </p>

        <button className={`${styles.button} ${styles.failButton}`} onClick={onTryAgain}>
          Try again
        </button>
      </div>
    );
  }

  return null;
}

export default ResultMessage;