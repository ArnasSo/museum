import styles from "./ResultMessage.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import mascotConfused from "../../assets/mascots/mascot-confused.png";
import butterflyOpen from "../../assets/images/butterfly-open.svg";
import butterflyClosed from "../../assets/images/butterfly-closed.svg";

function ResultMessage({ type, plantName, onTryAgain, onContinue }) {
  if (type === "success") {
    const butterflies = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  type: Math.random() > 0.5 ? "open" : "closed",
  delay: Math.random() * 6,
  duration: 8 + Math.random() * 6,
  startX: Math.random() * 100,
  drift: (Math.random() - 0.5) * 300,
  size: 0.6 + Math.random() * 0.8,
}));

    return (
      <div className={`${styles.message} ${styles.success}`}>
        {/* 🦋 butterflies */}
        <div className={styles.butterflies} aria-hidden="true">
  {butterflies.map((b) => (
    <div
      key={b.id}
      className={styles.butterflyWrapper}
      style={{
        left: `${b.startX}%`,
        animationDelay: `${b.delay}s`,
        animationDuration: `${b.duration}s`,
        "--drift": `${b.drift}px`,
        "--size": b.size,
      }}
    >
      <img
        src={b.type === "open" ? butterflyOpen : butterflyClosed}
        className={styles.butterfly}
        alt=""
      />
    </div>
  ))}
</div>

        {/* 🧍 mascot */}
        <img
          src={mascotExcited}
          alt="Happy mascot"
          className={styles.mascot}
        />

        <p className={styles.title}>You found it!</p>

        <p className={styles.text}>
          Yay! You found <strong>{plantName}</strong>.
        </p>

        <button
          className={`${styles.button} ${styles.successButton}`}
          onClick={onContinue}
        >
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

        <button
          className={`${styles.button} ${styles.failButton}`}
          onClick={onTryAgain}
        >
          Try again
        </button>
      </div>
    );
  }

  return null;
}

export default ResultMessage;