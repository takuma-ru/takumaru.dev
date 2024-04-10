import type { FC } from "react";

import styles from "./Header.module.scss";

type Props = {};

export const Header: FC<Props> = ({}) => {
  return (
    <header className={styles["header-component"]}>
      <h1 className={styles["header-title"]}>Header</h1>
    </header>
  );
};
