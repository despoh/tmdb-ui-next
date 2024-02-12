import Link from "next/link";
import styles from "./ListItem.module.scss";
import { Media } from "@/__generated__/graphql";

type ListItemProps = {
  data: Media;
};
const ListItem = ({ data }: ListItemProps) => {
  const { __typename, id, title, overview, releaseDate, posterPath } = data;

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
      <li className={styles.container}>
        <div
          className={`${styles.image} ${posterPath ? undefined : styles.noPoster}`}
        >
          <img
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w500/${posterPath}`
                : "/picture.svg"
            }
          />
        </div>
        <div className={styles.infoContainer}>
          <div>
            <h2>{title}</h2>
            <span className={styles.releaseDate}>{releaseDate}</span>
          </div>
          <p className={styles.overview}>{overview}</p>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
