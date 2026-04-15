import { useMemo } from "react";
import styles from "./ResultMessage.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import mascotConfused from "../../assets/mascots/mascot-confused.png";
import butterflyOpen from "../../assets/images/butterfly-open.svg";
import butterflyClosed from "../../assets/images/butterfly-closed.svg";

function ResultMessage({ type, plantName, onTryAgain, onContinue }) {
  const butterflies = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 6,
        startX: Math.random() * 100,
        drift: (Math.random() - 0.5) * 320,
        sway: 20 + Math.random() * 28,
        tilt: -14 + Math.random() * 28,
        size: 0.6 + Math.random() * 0.8,
        flapDuration: 0.28 + Math.random() * 0.42,
        flapDelay: Math.random() * 1.2,
      })),
    []
  );

  if (type === "success") {
    return (
      <div className={`${styles.message} ${styles.success}`}>
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
                "--sway": `${b.sway}px`,
                "--tilt": `${b.tilt}deg`,
                "--size": b.size,
                "--flap-duration": `${b.flapDuration}s`,
                "--flap-delay": `${b.flapDelay}s`,
              }}
            >
              <div className={styles.butterfly}>
                <img
                  src={butterflyOpen}
                  className={`${styles.butterflyFrame} ${styles.openFrame}`}
                  alt=""
                />
                <img
                  src={butterflyClosed}
                  className={`${styles.butterflyFrame} ${styles.closedFrame}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <img src={mascotExcited} alt="Happy mascot" className={styles.mascot} />

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