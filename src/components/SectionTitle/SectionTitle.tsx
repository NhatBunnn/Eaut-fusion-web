import styles from "./SectionTitle.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={c("sectionTitle")}>
      <div className={c("title")}>{title}</div>
    </div>
  );
}

export default SectionTitle;
