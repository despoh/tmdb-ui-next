import { useRouter } from "next/router";
import CircularBar from "../CircularBar/CircularBar";
import styles from "./Card.module.scss";
import { FeaturedMovie, FeaturedTv } from "@/types";
import Link from "next/link";

type CardProps = {
  item: FeaturedMovie | FeaturedTv;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const { __typename, id, posterPath, title, releaseDate, voteAverage } = item;
  const isMovie = __typename === "Movie";

  const getHref = () => {
    if (isMovie) {
      return `/movie/${id}`;
    } else {
      return `/tv/${id}`;
    }
  };
  return (
    <Link href={getHref()}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.h2}>{title}</h2>
          <p className={styles.releaseDate}>{releaseDate}</p>
          <div className={styles.ring}>
            <CircularBar
              outer={{ width: "34px", height: "34px" }}
              inner={{ width: "30px", height: "30px" }}
              value={voteAverage ? Math.ceil(Number(voteAverage) * 10) : 0}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
