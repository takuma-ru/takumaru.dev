import type { FC, PropsWithChildren } from "react";

import { Header } from "~/components/layouts/Header/Header";
import styles from "./CommonLayout.module.scss";

type Props = PropsWithChildren<{
  isHeader?: boolean;
  isFooter?: boolean;
}>;

export const CommonLayout: FC<Props> = ({
  isHeader = true,
  isFooter = true,
  children,
}) => {
  return (
    <div className={styles["common-layout-component"]}>
      {isHeader && <Header />}
      <main>{children}</main>
      {isFooter && <footer>Footer</footer>}
    </div>
  );
};
