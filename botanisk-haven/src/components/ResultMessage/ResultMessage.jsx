import styles from "./ResultMessage.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import mascotConfused from "../../assets/mascots/mascot-confused.png";

function ResultMessage({ type, plantName, onTryAgain }) {
  if (type === "success") {
    return (
      <div className={`${styles.message} ${styles.success}`}>
        <img
          src={mascotExcited}
          alt="Happy mascot"
          className={styles.mascot}
        />
        <p className={styles.title}>You found it!</p>
        <p className={styles.text}>
          Yay! You found <strong>{plantName}</strong>. Okay, let’s continue!
        </p>
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
        <p className={styles.title}>Try again!</p>
        <p className={styles.text}>
          Oops! That was not the right plant. Let’s try again.
        </p>
        <button className={styles.button} onClick={onTryAgain}>
          Try again
        </button>
      </div>
    );
  }

  return null;
}

export default ResultMessage;