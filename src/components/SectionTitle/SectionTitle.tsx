import styles from "./SectionTitle.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <div className={c("sectionTitle", "mb-4")}>
      <div className={c("inner")}>
        <div className={c("title")}>{title}</div>
        {!!subTitle && <div className="mt-2">{subTitle}</div>}
      </div>
    </div>
  );
}

export default SectionTitle;
