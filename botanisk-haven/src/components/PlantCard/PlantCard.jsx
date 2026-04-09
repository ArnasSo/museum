import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
  const imageUrl = new URL(
    `../../assets/plants/${plant.image}`,
    import.meta.url
  ).href;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
  <img src={imageUrl} alt={plant.name} className={styles.image} />
</div>

      <h2 className={styles.title}>{plant.name}</h2>
      <p className={styles.introduction}>{plant.introduction}</p>
      <p className={styles.meta}>
        <strong>Climate:</strong> {plant.climate}
      </p>
      <p className={styles.meta}>
        <strong>Likes:</strong> {plant.likes}
      </p>
    </div>
  );
}

export default PlantCard;