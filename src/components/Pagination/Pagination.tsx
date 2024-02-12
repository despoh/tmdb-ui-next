import { useState } from "react";
import styles from "./Pagination.module.scss";

type PaginationProp = {
  totalItems: number;
  onClick: (pageNumber: number) => void;
  currentPage: number;
};

const Pagination = ({ totalItems, onClick, currentPage }: PaginationProp) => {
  const numbers: number[] = [];
  const min = Math.max(1, currentPage - 4);
  const max = Math.min(totalItems, currentPage + 4);
  const showFirst = currentPage - 4 > 1;
  const showLast = currentPage + 4 < totalItems;

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  const handleClick = (i: number) => {
    onClick(i);
  };

  const handlePrevClick = () => {
    onClick(currentPage - 1);
  };

  const handleNextClick = () => {
    onClick(currentPage + 1);
  };

  return (
    <nav className={styles.container}>
      {currentPage !== 1 && (
        <span onClick={handlePrevClick} className={styles.prev}>
          Prev
        </span>
      )}
      {showFirst && (
        <span className={styles.numberContainer} onClick={() => handleClick(1)}>
          1
        </span>
      )}
      {showFirst && <span>...</span>}
      {numbers.map((num) => (
        <span
          key={num}
          className={`${styles.numberContainer} ${currentPage === num ? styles.active : undefined}`}
          onClick={() => handleClick(num)}
        >
          {num}
        </span>
      ))}
      {showLast && <span>...</span>}
      {showLast && (
        <span
          className={styles.numberContainer}
          onClick={() => handleClick(totalItems)}
        >
          {totalItems}
        </span>
      )}
      {currentPage !== totalItems && (
        <span onClick={handleNextClick} className={styles.next}>
          Next
        </span>
      )}
    </nav>
  );
};

export default Pagination;
