import {
  type FC,
  Fragment,
  type TouchEvent,
  useCallback,
  useState,
} from "react";

import { NavLink } from "@remix-run/react";
import { Divider } from "~/components/common/Divider/Divider";
import { useBreakpoint } from "~/hooks/utils/useBreakpoint";
import MenuRounded from "~icons/material-symbols-light/menu-rounded";
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

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  const handleClickItem = useCallback((e: TouchEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsNavOpen(false);
  }, []);

  return (
    <>
      <header className={styles["header-component"]}>
        {isSp && <MenuRounded fontSize="24px" onClick={toggleNav} />}
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
      <nav
        className={styles["overlay-navigation"]}
        style={{ display: isNavOpen ? "flex" : "none" }}
        onTouchEnd={toggleNav}
      >
        {NAVIGATION.map((nav) => (
          <NavLink
            key={nav.path}
            to={nav.path}
            className={styles.item}
            onTouchEnd={toggleNav}
          >
            {nav.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
