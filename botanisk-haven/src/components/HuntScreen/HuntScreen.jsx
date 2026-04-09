import styles from "./HuntScreen.module.css";

function HuntScreen({ onFinish }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <p className={styles.round}>Plant Hunt Round 1 / 5</p>
        <h2 className={styles.title}>Find this plant</h2>
        <p className={styles.hint}>
          Hint: Look for the plant that floats on the water.
        </p>

        <button className={styles.scanButton}>Open Camera</button>

        <button className={styles.fakeFinish} onClick={onFinish}>
          Temporary Finish Button
        </button>
      </div>
    </section>
  );
}

export default HuntScreen;