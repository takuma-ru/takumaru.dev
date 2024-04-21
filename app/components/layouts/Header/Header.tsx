import { type FC, Fragment } from "react";

import { NavLink } from "@remix-run/react";
import { Divider } from "~/components/common/Divider/Divider";
import { useBreakpoint } from "~/hooks/utils/useBreakpoint";
import styles from "./Header.module.scss";

const NAVIGATION = [
  {
    label: "TOP",
    path: "/",
  },
  {
    label: "How?",
    path: "/about",
  },
  {
    label: "Works",
    path: "/works",
  },
  {
    label: "Contact",
    path: "/contact",
  },
] as const satisfies Array<{ label: string; path: `/${string}` }>;

export const Header: FC = () => {
  const { isSp } = useBreakpoint();

  return (
    <header className={styles["header-component"]}>
      {!isSp && (
        <div className={styles.navigation}>
          {NAVIGATION.map((nav, index) => (
            <Fragment key={nav.path}>
              <NavLink to={nav.path} className={styles.link}>
                {nav.label}
              </NavLink>
              {NAVIGATION.length > index + 1 && (
                <Divider direction="vertical" />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </header>
  );
};
