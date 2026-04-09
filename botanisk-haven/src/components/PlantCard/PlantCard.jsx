import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
  const imageUrl = new URL(
    `../../assets/plants/${plant.image}`,
    import.meta.url
  ).href;

  const climateEmojis = {
    Tropical: "🌴☀️",
    "Dry desert": "🏜️🌵",
    Mediterranean: "🌿☀️",
    Temperate: "🌤️🌳",
    Cold: "❄️🌲",
    Rainforest: "🌧️🌴",
    Wetland: "💧🌱",
  };

  const getLikeBadges = (likesText) => {
    const text = likesText.toLowerCase();
    const badges = [];

    if (text.includes("lots of sun") || text.includes("full sun")) {
      badges.push({ emoji: "☀️☀️☀️", label: "Loves sun" });
    } else if (text.includes("medium sun")) {
      badges.push({ emoji: "☀️☀️", label: "Some sun" });
    } else if (text.includes("little sun") || text.includes("low sun")) {
      badges.push({ emoji: "☀️", label: "Low sun" });
    }

    if (text.includes("very little water")) {
      badges.push({ emoji: "💧", label: "Tiny water" });
    } else if (text.includes("little water")) {
      badges.push({ emoji: "💧", label: "Low water" });
    } else if (text.includes("moderate water")) {
      badges.push({ emoji: "💧💧", label: "Some water" });
    } else if (text.includes("lots of water")) {
      badges.push({ emoji: "💧💧💧", label: "Lots of water" });
    }

    if (text.includes("warm")) {
      badges.push({ emoji: "🌡️☀️", label: "Warm" });
    }

    if (text.includes("hot")) {
      badges.push({ emoji: "🔥", label: "Hot" });
    }

    if (text.includes("rocks")) {
      badges.push({ emoji: "🪨🌱", label: "Rocky spots" });
    }

    return badges;
  };

  const likeBadges = getLikeBadges(plant.likes);

  return (
    <article className={styles.card}>
      <div className={styles.polaroid}>
        <div className={styles.imageWrap}>
          <img src={imageUrl} alt={plant.name} className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{plant.name}</h2>
        <p className={styles.introduction}>{plant.introduction}</p>

        <div className={styles.metaGrid}>
          <div className={`${styles.metaPill} ${styles.climatePill}`}>
            <span className={styles.metaEmoji}>
              {climateEmojis[plant.climate] || "🌿"}
            </span>
            <span className={styles.metaValue}>{plant.climate}</span>
          </div>

          <div className={`${styles.metaPill} ${styles.likesPill}`}>
            <span className={styles.metaLabel}>Likes</span>

            <div className={styles.likesBadges}>
              {likeBadges.length > 0 ? (
                likeBadges.map((badge, index) => (
                  <span key={index} className={styles.likeBadge}>
                    <span className={styles.likeEmoji}>{badge.emoji}</span>
                    <span className={styles.likeText}>{badge.label}</span>
                  </span>
                ))
              ) : (
                <span className={styles.metaValue}>{plant.likes}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PlantCard;