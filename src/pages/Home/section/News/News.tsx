import { CardSlider, SectionTitle } from "@/components";
import styles from "./News.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function News() {
  return (
    <div className={c("news", "", "mt-5")}>
      <SectionTitle title="Tin tức & Sự kiện" />
      <CardSlider />
    </div>
  );
}

export default News;
