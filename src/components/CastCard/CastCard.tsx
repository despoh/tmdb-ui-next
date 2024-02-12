import { Cast } from "@/__generated__/graphql";
import styles from "./CastCard.module.scss";

type CastCardProps = {
  item: Cast;
};

const CastCard = ({ item }: CastCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={
            item.profile_path
              ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
              : "/headIcon.svg"
          }
        />
      </div>
      <div className={styles.infoContainer}>
        <div>{item.name}</div>
        <div className={styles.character}>{item.character}</div>
      </div>
    </div>
  );
};

export default CastCard;
