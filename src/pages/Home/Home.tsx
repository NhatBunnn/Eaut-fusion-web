import styles from "./Home.module.scss";
import { bindClass } from "@utils/classnames.tsx";
import Button from "@/components/Button/Button";
import { History, Program } from "./section";

const c = bindClass(styles);

function Home() {
  return (
    <div className={c("home", "p-lg-5")}>
      <section className={c("slider")}>
        {/* Image */}
        <div className={c("slide")}>
          <img
            src="https://eaut.edu.vn/wp-content/uploads/2020/04/truong.jpg"
            alt=""
          />
        </div>
        {/* Caption */}
        <div className={c("caption")}>
          <div className={c("text", "liquid-glass", "p-3", "mb-2")}>
            <div className={c("title")}>Đại học Công Nghệ Đông Á</div>
            <div className={c("sub-title")}>Nơi chắp cánh ước mơ</div>
          </div>
          <Button label="Đăng ký ngay" className="liquid-glass" />
        </div>
        {/* Statistic */}
        <div
          className={c("stats", "d-flex", "justify-content-center", "gap-5")}
        >
          <div className={c("stats-card")}>
            <div className={c("value")}>{`> 10.000`}</div>
            <div className={c("label")}>Sinh viên đang theo học</div>
          </div>
          <div className={c("stats-card")}>
            <div className={c("value")}>{`> 10.000`}</div>
            <div className={c("label")}>Sinh viên đang theo học</div>
          </div>
          <div className={c("stats-card")}>
            <div className={c("value")}>{`> 10.000`}</div>
            <div className={c("label")}>Sinh viên đang theo học</div>
          </div>
        </div>
      </section>
      {/* Body */}
      <main className="container px-5">
        {/* Section: about */}
        <section className={c("about", "container", "px-5")}>
          {/* <div className={c("inner", "px-lg-5")}> */}
          {/* Title */}
          <div className={c("text", "mb-5")}>
            <div className={c("title")}>Giới thiệu về trường</div>
            <div className={c("desc")}>
              Đại học Công nghệ Đông Á là môi trường giáo dục hiện đại, cam kết
              đào tạo kỹ sư và chuyên gia chất lượng cao với cơ sở vật chất tiên
              tiến, đội ngũ giảng viên giàu kinh nghiệm và mạng lưới hợp tác
              quốc tế rộng lớn
            </div>
          </div>
          {/* History */}
          <History />
          {/* </div> */}
        </section>
        {/* Section: program */}
        <Program />
      </main>
    </div>
  );
}

export default Home;
