import CardSlider from "@/components/CardSlider";
import styles from "./Program.module.scss";
import { bindClass } from "@/utils/classnames";
import SectionTitle from "@/components/SectionTitle";

const c = bindClass(styles);

function Program() {
  return (
    <section className={c("program", "px-lg-5", "mt-5")}>
      <SectionTitle title="Các ngành đào tạo" />
      <CardSlider />
    </section>
  );
}

export default Program;
