import type { ReactNode } from "react";
import styles from "./DefaultLayout.module.scss";
import { bindClass } from "@/utils/classnames";
import { Footer, Header } from "../components";

const c = bindClass(styles);

type DefaultLayoutProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={c("defaultLayout")}>
      <Header />
      <div className={c("container-flud", "body")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
