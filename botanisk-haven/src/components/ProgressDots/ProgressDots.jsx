import styles from "./ProgressDots.module.css";

function ProgressDots({ current, total }) {
  return (
    <div className={styles.dots} aria-label={`Progress ${current} of ${total}`}>
      {Array.from({ length: total }, (_, index) => {
        const step = index + 1;
        const isActive = step === current;
        const isDone = step < current;

        return (
          <span
            key={step}
            className={`${styles.dot} ${
              isActive ? styles.active : isDone ? styles.done : ""
            }`}
          />
        );
      })}
    </div>
  );
}

export default ProgressDots;