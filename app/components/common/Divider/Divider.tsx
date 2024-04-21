import type { FC } from "react";

import clsx from "clsx";
import styles from "./Divider.module.scss";

type Props = {
  direction?: "horizontal" | "vertical";
};

export const Divider: FC<Props> = ({ direction = "horizontal" }) => {
  return (
    <hr
      className={clsx(styles["divider-component"], styles[`-${direction}`])}
    />
  );
};
