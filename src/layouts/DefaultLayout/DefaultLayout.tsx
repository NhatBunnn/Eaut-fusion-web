import type { ReactNode } from "react";
import styles from "./DefaultLayout.module.scss";
import { bindClass } from "@/utils/classnames";
import Header from "@layouts/components/Header";

const c = bindClass(styles);

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={c("defaultLayout")}>
      <Header />
      <div className="">{children}</div>
    </div>
  );
}

export default DefaultLayout;
