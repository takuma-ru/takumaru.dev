import type { FC } from "react";

import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles["footer-component"]}>
      &copy; {new Date().getFullYear()} takuma-ru
    </footer>
  );
};
