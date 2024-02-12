import { convertLanguage, formatCurrency } from "@/utils/general";
import Carousel from "../Carousel/Carousel";
import CastCard from "../CastCard/CastCard";
import styles from "./MainSection.module.scss";
import { Cast, MovieDetail, TvDetail } from "@/__generated__/graphql";
import { ReactNode } from "react";

const FactItem = ({
  value,
  label,
}: {
  value: string | undefined | null | ReactNode;
  label: string;
}) => {
  if (!value) {
    return undefined;
  }

  return (
    <div className={styles.rightColumnItem}>
      <h4 className={styles.h4}>{label}</h4>
      {Array.isArray(value) ? (
        value.map((a) => (
          <div key={a} className={styles.factValue}>
            {a}
          </div>
        ))
      ) : (
        <div className={styles.factValue}>{value}</div>
      )}
    </div>
  );
};

type MainSectionProps = {
  data: MovieDetail | TvDetail;
};
const MainSection = ({ data }: MainSectionProps) => {
  const isMovie = Boolean(data.__typename === "MovieDetail");

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h3 className={styles.h3}>
          {isMovie ? "Top Billed Cast" : "Series Cast"}
        </h3>
        <div className={styles.carouselContainer}>
          <Carousel CardComponent={CastCard} items={data.casts as Cast[]} />
        </div>
      </div>
      <section className={styles.rightColumn}>
        <FactItem label="Status" value={data.status} />
        <FactItem
          label="Network"
          value={
            (isMovie || (data as TvDetail).networkLogos?.length === 0) ? undefined : (
              <img
                src={`https://image.tmdb.org/t/p/w500/${(data as TvDetail).networkLogos}`}
              />
            )
          }
        />
        <FactItem
          label="Original Language"
          value={convertLanguage(data.originalLanguage)}
        />
        <FactItem
          label="Budget"
          value={formatCurrency(Number((data as MovieDetail).budget))}
        />
        <FactItem
          label="Revenue"
          value={formatCurrency(Number((data as MovieDetail).budget))}
        />
        <FactItem label="Type" value={(data as TvDetail).type} />
        <section className={styles.rightColumnItem}>
          <h4 className={styles.keywords}>Keywords</h4>
          <ul>
            {data.keywords?.map((a) => (
              <li key={a} className={styles.badge}>
                {a}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default MainSection;
