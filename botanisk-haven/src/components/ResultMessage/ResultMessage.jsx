import styles from "./ResultMessage.module.css";

function ResultMessage({ type, plantName, onTryAgain }) {
  if (type === "success") {
    return (
      <div className={`${styles.message} ${styles.success}`}>
        <p className={styles.title}>You found it!</p>
        <p className={styles.text}>Amazing! You found {plantName}.</p>
      </div>
    );
  }

  if (type === "fail") {
    return (
      <div className={`${styles.message} ${styles.fail}`}>
        <p className={styles.title}>Try again!</p>
        <p className={styles.text}>
          Oops! That was not the right plant. Let’s try once more.
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