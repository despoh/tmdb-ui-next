import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./SearchPage.module.scss";
import { Movie, SearchResult, Tv } from "@/__generated__/graphql";
import Pagination from "../Pagination/Pagination";
import { useRouter } from "next/router";

type SearchPageProps = {
  movieData: SearchResult;
  tvData: SearchResult;
  mediaType?: string;
  searchKeyword?: string;
  pageNumber?: number;
};

const SearchPage = ({
  movieData,
  tvData,
  mediaType = "movie",
  searchKeyword,
  pageNumber = 1,
}: SearchPageProps) => {
  const router = useRouter();
  const dataToBeRendered = mediaType === "movie" ? movieData.data : tvData.data;
  const totalItems =
    mediaType === "movie" ? movieData.totalPages : tvData.totalPages;

  const onPaginationClick = (pageNumber: number) => {
    router.push(
      `/search/${mediaType}?query=${searchKeyword}&page=${pageNumber}`,
    );
  };

  const onMediaTypeClick = (type: string) => {
    router.push(`/search/${type}?query=${searchKeyword}&page=1`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <h3 className={styles.searchResultHeading}>Search Results</h3>
          <ul className={styles.list}>
            <li
              className={mediaType === "movie" ? styles.active : undefined}
              onClick={() => onMediaTypeClick("movie")}
            >
              <span>Movies</span>
              <span className={styles.badge}>{movieData.totalResults}</span>
            </li>
            <li
              className={mediaType === "tv" ? styles.active : undefined}
              onClick={() => onMediaTypeClick("tv")}
            >
              <span>TV Shows</span>
              <span className={styles.badge}>{tvData.totalResults}</span>
            </li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          {dataToBeRendered.length > 0 ? (
            <ul>
              {dataToBeRendered.map((a) => (
                <ListItem key={a.id} data={a} />
              ))}
            </ul>
          ) : (
            <p>There are no movies that matched your query.</p>
          )}

          {dataToBeRendered.length > 0 && (
            <Pagination
              currentPage={pageNumber}
              totalItems={totalItems}
              onClick={onPaginationClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
