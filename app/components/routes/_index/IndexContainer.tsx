import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/common/Button/Button";
import type { IndexLoaderData } from "~/loaders/_index";
import styles from "./IndexContainer.module.scss";

export const IndexContainer = () => {
  const loaderData = useLoaderData<IndexLoaderData>();

  return (
    <>
      <div className={styles["index-container"]}>
        {loaderData.message}
        <img src="/imgs/logo.svg" alt="logo" className={styles["logo"]} />
        <Button fontFamily="chillax" link={{ to: { pathname: "about" } }}>
          Who is ME ?
        </Button>
      </div>
    </>
  );
};
