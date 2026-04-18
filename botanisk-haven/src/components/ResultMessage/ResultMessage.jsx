import { useMemo } from "react";
import styles from "./ResultMessage.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import mascotConfused from "../../assets/mascots/mascot-confused.png";
import butterflyOpen from "../../assets/images/butterfly-open.svg";
import butterflyClosed from "../../assets/images/butterfly-closed.svg";

function ResultMessage({ type, plantName, funFact, onTryAgain, onContinue }) {
  const butterflies = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 6,
        startX: Math.random() * 100,
        drift: (Math.random() - 0.5) * 260,
        sway: 16 + Math.random() * 20,
        tilt: -10 + Math.random() * 20,
        size: 0.6 + Math.random() * 0.6,
        flapDuration: 0.35 + Math.random() * 0.4,
        flapDelay: Math.random() * 1,
      })),
    []
  );

  if (type === "success") {
    return (
      <div className={`${styles.message} ${styles.success}`}>
        {/* 🦋 Butterflies */}
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

        <p className={`${styles.kicker} ${styles.successKicker}`}>EUREKA!</p>

        <img
          src={mascotExcited}
          alt="Happy mascot"
          className={`${styles.mascot} ${styles.successMascot}`}
        />

        <div className={styles.factCard}>
          <div className={styles.factHeader}>
            <span className={styles.factEmoji}>💡</span>
            <span className={styles.factTitle}>DID YOU KNOW?</span>
          </div>

          <div className={styles.factBody}>
            <p className={styles.factText}>{funFact}</p>
          </div>
        </div>

        <button
          className={`${styles.cta} ${styles.successButton}`}
          onClick={onContinue}
          type="button"
        >
          <span className={styles.ctaText}>NEXT PLANT</span>
        </button>
      </div>
    );
  }

  if (type === "fail") {
    return (
      <div className={`${styles.message} ${styles.fail}`}>
        <p className={`${styles.kicker} ${styles.failKicker}`}>OOPS!</p>

        <div className={styles.failSpeechWrap}>
          <div className={styles.speechBubble}>
            <p className={styles.speechText}>
              That&apos;s not the right plant.
            </p>
          </div>
        </div>

        <img
          src={mascotConfused}
          alt="Confused mascot"
          className={`${styles.mascot} ${styles.failMascot}`}
        />

        <button
          className={`${styles.cta} ${styles.failButton}`}
          onClick={onTryAgain}
          type="button"
        >
          <span className={styles.ctaText}>TRY AGAIN</span>
        </button>
      </div>
    );
  }

  return null;
}

export default ResultMessage;