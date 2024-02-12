import { ReactComponentElement, ReactElement, ReactNode } from "react";
import styles from "./Carousel.module.scss";
import { Cast } from "@/__generated__/graphql";
import { FeaturedMediaArray, FeaturedMovie, FeaturedTv } from "@/types";

type CarouselProps = {
  items: Cast[] | FeaturedMediaArray;
  CardComponent: React.FunctionComponent<{ item: any }>;
};

const Carousel: React.FC<CarouselProps> = ({ items, CardComponent }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemsWrapper}>
        {items.map((a, i) => (
          <CardComponent key={i} item={a} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
