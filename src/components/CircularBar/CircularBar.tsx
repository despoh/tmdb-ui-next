import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CircularBar.module.scss";

type CircleSize = {
  width: string;
  height: string;
};

type CircularBarProps = {
  outer: CircleSize;
  inner: CircleSize;
  value: number;
};

const CircularBar = ({ outer, inner, value }: CircularBarProps) => {
  const getPathColor = () => {
    if (value <= 40) {
      return "#db2360";
    }

    if (value <= 70) {
      return "#d2d531";
    }

    return "#21d07a";
  };

  const getTrailColor = () => {
    if (value <= 40) {
      return "#571435";
    }

    if (value <= 70) {
      return "#423d0f";
    }

    return "#204529";
  };

  return (
    <div style={outer} className={styles.container}>
      <div style={inner}>
        <CircularProgressbar
          value={value}
          text={`${value}٪`}
          styles={buildStyles({
            textSize: "35px",
            pathColor: getPathColor(),
            textColor: "#ffffff",
            trailColor: getTrailColor(),
          })}
        />
      </div>
    </div>
  );
};

export default CircularBar;
