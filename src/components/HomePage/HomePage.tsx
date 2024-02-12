import { useEffect, useState } from "react";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg")`,
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.introContainer}>
          <h2 className={styles.h2}>Welcome.</h2>
          <h3 className={styles.h3}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <SearchBar />
      </div>
      <FeaturedSection type="trending" />
      <FeaturedSection type="popular" />
    </div>
  );
};

export default HomePage;
