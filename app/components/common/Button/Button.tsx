import {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type FC,
  type PropsWithChildren,
  useMemo,
} from "react";

import { Link, NavLink, type Path } from "@remix-run/react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type Props = PropsWithChildren<{
  /**
   * The font family of the button.
   *
   * @default "Satoshi"
   */
  fontFamily?: "chillax" | "satoshi";
  link?: ComponentProps<typeof Link> & ComponentProps<typeof NavLink>;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  fontFamily = "satoshi",
  children,
  link,
  ...attr
}) => {
  const className = clsx(styles["button-component"], styles[`-${fontFamily}`]);

  const buttonType = useMemo(() => {
    if (link?.to) {
      if (
        link.to.toString().startsWith("/") ||
        (link.to as Path).pathname?.startsWith("/")
      ) {
        return "nav-link";
      }

      return "link";
    }

    return attr.type;
  }, [attr.type, link]);

  switch (buttonType) {
    case "nav-link": {
      if (!link) return null;

      return (
        <NavLink className={className} {...link}>
          {children}
        </NavLink>
      );
    }

    case "link": {
      if (!link) return null;

      return (
        <Link className={className} {...link}>
          {children}
        </Link>
      );
    }

    default: {
      return (
        <button className={className} {...attr}>
          {children}
        </button>
      );
    }
  }
};
