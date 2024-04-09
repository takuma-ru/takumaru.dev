import type { FC } from "react";

import styles from "./Header.module.scss";

type Props = {
  /** Prop type **/
};

export const Header: FC<Props> = ({}) => {
  return (
    <div className={styles["header-component"]}>
      {/** Your component code here */}
    </div>
  );
};
