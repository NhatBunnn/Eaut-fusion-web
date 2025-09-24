import styles from "./Footer.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function Footer() {
  return <div className={c("footer")}>footer</div>;
}

export default Footer;
