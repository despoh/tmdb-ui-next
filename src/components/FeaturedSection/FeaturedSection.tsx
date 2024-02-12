import Carousel from "../Carousel/Carousel";
import Selector from "../Selector/Selector";
import styles from "./FeaturedSection.module.scss";
import FEATURED_SECTION_DATA from "./data";
import { useEffect, useState } from "react";
import { FeaturedSectionType, FeaturedMediaArray } from "@/types";
import Card from "../Card/Card";

interface FeaturedSectionProps {
  type: FeaturedSectionType;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ type }) => {
  const { getData, headingLabel, selectorOptions } =
    FEATURED_SECTION_DATA[type];

  const [items, setItems] = useState<FeaturedMediaArray>([]);
  const [selectedOption, setSelectedOption] = useState(
    selectorOptions[0].value,
  );

  useEffect(() => {
    (async () => {
      const data = await getData(selectedOption);
      setItems(data);
    })();
  }, [selectedOption]);

  const onSelectorChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section
      className={`${styles.container} ${type === "trending" ? styles.trending : undefined}`}
    >
      <div className={styles.header}>
        <h2 className={styles.h2}>{headingLabel}</h2>
        <Selector
          options={selectorOptions}
          onSelectorChange={onSelectorChange}
        />
      </div>
      <div className={styles.carouselContainer}>
        <Carousel CardComponent={Card} items={items} />
      </div>
    </section>
  );
};

export default FeaturedSection;
