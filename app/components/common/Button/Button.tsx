import type {
  ButtonHTMLAttributes,
  ComponentProps,
  FC,
  PropsWithChildren,
} from "react";

import { Link } from "@remix-run/react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  /**
   * The font family of the button.
   *
   * @default "Satoshi"
   */
  fontFamily?: "chillax" | "satoshi";
  link?: ComponentProps<typeof Link>;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  fontFamily = "satoshi",
  children,
  link,
  ...attr
}) => {
  if (link?.to) {
    if (link.to) {
    }

    return (
      <Link
        className={clsx(styles["button-component"], styles[`-${fontFamily}`])}
        {...link}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles["button-component"], styles[`-${fontFamily}`])}
      {...attr}
    >
      {children}
    </button>
  );
};
