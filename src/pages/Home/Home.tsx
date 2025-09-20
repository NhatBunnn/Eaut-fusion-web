import styles from "./Home.module.scss";
import { bindClass } from "@utils/classnames.tsx";

const c = bindClass(styles);

function Home() {
  return <div className={c("home")}>TRANG CHỦ</div>;
}

export default Home;
