import React from "react";
import styles from "./styles.module.css";

const Source = () => {
  return (
    <div className={styles.container}>
      <h3>Исходный код</h3>
      <span>
        {"Исходный код данного приложения лежит на "}
        <a href="https://github.com/vatergo/practicum" target="_blank">
          Github
        </a>
      </span>
      <div className={styles.image} />
    </div>
  );
};

export default Source;
