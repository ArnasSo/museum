import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
  return (
    <article className={styles.card}>
      <div className={styles.polaroid}>
        <div className={styles.imagePlaceholder}>
          Plant image: {plant.image}
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.name}>{plant.name}</h2>
        <p className={styles.climate}>{plant.climate}</p>
        <p className={styles.introduction}>{plant.introduction}</p>
      </div>
    </article>
  );
}

export default PlantCard;