import { Image, Images } from "@/assets/images/image";
import styles from "./Header.module.scss";
import { bindClass } from "@utils/classnames.tsx";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";

const c = bindClass(styles);

function Header() {
  return (
    <header
      className={c(
        "header",
        "d-flex",
        "align-items-center",
        "liquid-glass",
        "mt-3",
        "ps-2",
        "pe-3",
        "w-75"
      )}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
        <Image src={Images.logo} size="58px" className="cursor-pointer" />
      </motion.div>
      <div className={c("action", "ms-auto", "d-flex", "gap-3")}>
        <Button label="Trang chủ" className="liquid-glass btn-hover" />
        <Button label="Giới thiệu" className="liquid-glass btn-hover" />
        <Button label="Ngành đào tạo" className="liquid-glass btn-hover" />
        <Button label="Tuyển sinh" className="liquid-glass btn-hover" />
        <Button
          label="Liên hệ"
          className="liquid-glass btn-hover primary"
          style={{ color: "var(--color-white-const)" }}
        />
      </div>
    </header>
  );
}

export default Header;
