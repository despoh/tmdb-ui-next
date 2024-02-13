import { formatTime } from "@/utils/general";
import CircularBar from "../CircularBar/CircularBar";
import styles from "./Header.module.scss";
import { MovieDetail, TvDetail } from "@/__generated__/graphql";

type HeaderProps = {
  data: TvDetail | MovieDetail;
};

const Header = ({ data }: HeaderProps) => {
  const releaseYear = data.releaseDate
    ? `${new Date(data.releaseDate).getFullYear()}`
    : "";
  const isMovie = Boolean(data.__typename === "MovieDetail");

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${data.backdropPath}")`,
      }}
      className={styles.container}
    >
      <div className={styles.customBg}>
        <div className={styles.wrapper}>
          <div
            className={`${styles.poster} ${data.posterPath ? undefined : styles.noPoster}`}
          >
            <img
              src={
                data.posterPath
                  ? `https://image.tmdb.org/t/p/w500/${data.posterPath}`
                  : "/picture.svg"
              }
            />
          </div>
          <div className={styles.infoContainer}>
            <h2 className={styles.title}>
              <span>{data.title}</span>
              <span className={styles.releaseYear}>{`(${releaseYear})`}</span>
            </h2>
            <div className={styles.facts}>
              {isMovie && data.releaseDate && <span>{data.releaseDate}</span>}
              <span className={isMovie ? styles.prependDot : undefined}>
                {data.genres?.join(", ")}
              </span>
              {isMovie && (
                <span className={styles.prependDot}>
                  {formatTime(Number((data as MovieDetail).duration))}
                </span>
              )}
            </div>

            <CircularBar
              outer={{ width: "68px", height: "68px" }}
              inner={{ width: "60px", height: "60px" }}
              value={Math.ceil(Number(data.voteAverage) * 10)}
            />
            <p className={styles.tagline}>{data.tagline}</p>
            <h3 className={styles.overviewLabel}>Overview</h3>
            <p>{data.overview}</p>
            <ol className={styles.directorsContainer}>
              {isMovie &&
                (data as MovieDetail).directors?.map((a) => {
                  return (
                    <li key={a} className={styles.profile}>
                      <p className={styles.director}>{a}</p>
                      <p>Director</p>
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
