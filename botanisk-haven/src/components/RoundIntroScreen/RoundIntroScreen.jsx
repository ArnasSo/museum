import styles from "./RoundIntroScreen.module.css";
import mascotExcited from "../../assets/mascots/mascot-excited.png";
import ProgressDots from "../ProgressDots/ProgressDots";

function RoundIntroScreen({ plant, roundNumber, totalRounds, onStartRound }) {
  return (
    <section className={styles.screen}>
      <div className={styles.card}>
        <header className={styles.topBar}>
          <div>
            <p className={styles.kicker}>New Hunt</p>
            <p className={styles.round}>
              {roundNumber} / {totalRounds}
            </p>
          </div>

          <ProgressDots current={roundNumber} total={totalRounds} />
        </header>

        <div className={styles.center}>
          <div className={styles.bubble}>
            <p className={styles.text}>
              Can you find
            </p>

            <p className={styles.plantName}>
              {plant.name}?
            </p>
          </div>

          <img
            src={mascotExcited}
            alt="Mascot guide"
            className={styles.mascot}
          />
        </div>

        <button className={styles.button} onClick={onStartRound}>
          Let's find it!
        </button>
      </div>
    </section>
  );
}

export default RoundIntroScreen;