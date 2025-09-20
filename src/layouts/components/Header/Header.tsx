import { Image, Images } from "@/assets/images/image";
import styles from "./Header.module.scss";
import { bindClass } from "@utils/classnames.tsx";

const c = bindClass(styles);

function Header() {
  return (
    <div className={c("header")}>
      <Image src={Images.logo} size="100px" />
      Đây là header nha
    </div>
  );
}

export default Header;
