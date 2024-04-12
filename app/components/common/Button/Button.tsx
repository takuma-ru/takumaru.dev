import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import clsx from "clsx";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  /**
   * The font family of the button.
   *
   * @default "Satoshi"
   */
  fontFamily?: "chillax" | "satoshi";
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  fontFamily = "satoshi",
  children,
  ...attr
}) => {
  return (
    <button
      className={clsx(styles["button-component"], styles[`-${fontFamily}`])}
      {...attr}
    >
      {children}
    </button>
  );
};
