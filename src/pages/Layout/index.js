import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
  const buttonClassName = useCallback(
    ({ isActive }) => (isActive ? styles.activeButton : styles.button),
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
        <div className={styles.navigation}>
          <NavLink className={buttonClassName} to="/about">
            Обо мне
          </NavLink>
          <NavLink className={buttonClassName} to="/why">
            Почему программирование
          </NavLink>
          <NavLink className={buttonClassName} to="/source">
            Исходный код
          </NavLink>
          <NavLink className={buttonClassName} to="/css">
            Фишки CSS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Layout;
