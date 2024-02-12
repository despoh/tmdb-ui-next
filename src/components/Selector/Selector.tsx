// SlidingTab.js

import React, { useEffect, useRef, useState } from "react";
import styles from "./Selector.module.css";

const Selector = ({ options, onSelectorChange }) => {
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [translateXVal, setTranslateXVal] = useState(0);

  useEffect(() => {
    if (firstButtonRef.current) {
      setSliderWidth(firstButtonRef.current.offsetWidth);
    }
  }, []);

  const onTabChange = (e, tabIndex) => {
    const parentElement = e.target.parentElement;
    setTranslateXVal(
      e.target.getBoundingClientRect().left -
        parentElement.getBoundingClientRect().left,
    );
    setActiveTab(tabIndex);
    setSliderWidth(e.target.offsetWidth + 1);
    onSelectorChange(options[tabIndex].value);
  };

  return (
    <div className={styles.tabsContainer}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(${translateXVal}px)`,
          width: `${sliderWidth}px`,
        }}
      ></div>

      {options.map((option, i) => {
        return (
          <button
            key={option.label}
            ref={i === 0 ? firstButtonRef : null}
            className={`${styles.tab} ${activeTab === i ? styles.active : ""}`}
            onClick={(e) => onTabChange(e, i)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default Selector;
