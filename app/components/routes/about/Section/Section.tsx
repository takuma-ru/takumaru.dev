import type { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./Section.module.scss";

type Props = PropsWithChildren<{
  titleNode: ReactNode;
}>;

export const Section: FC<Props> = ({ titleNode, children }) => {
  return (
    <div className={styles["section-component"]}>
      <h2 className={styles.title}>{titleNode}</h2>
      <p className={styles.content}>{children}</p>
    </div>
  );
};
