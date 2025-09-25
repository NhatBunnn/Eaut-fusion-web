import { SectionTitle } from "@/components";
import History from "../History/History";
import styles from "./About.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function About() {
  return (
    <section className={c("about", "container", "")}>
      {/* <div className={c("inner", "px-lg-5")}> */}
      {/* Title */}
      <div className={c("text", "")}>
        <SectionTitle
          title="Giới thiệu về trường"
          subTitle=" Đại học Công nghệ Đông Á là môi trường giáo dục hiện đại, cam kết đào
          tạo kỹ sư và chuyên gia chất lượng cao với cơ sở vật chất tiên tiến,
          đội ngũ giảng viên giàu kinh nghiệm và mạng lưới hợp tác quốc tế rộng
          lớn"
        />
      </div>
      {/* History */}
      <History />
      {/* </div> */}
    </section>
  );
}

export default About;
