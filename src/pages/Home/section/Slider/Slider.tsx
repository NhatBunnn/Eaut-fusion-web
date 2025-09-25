import { Button } from "@/components";
import styles from "./Slider.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function Slider() {
  return (
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
        <div className={c("text", "p-3", "mb-2")}>
          <div className={c("title", "font-helventin")}>
            " Nơi chắp cánh ước mơ "
          </div>
          <div className={c("sub-title")}>Đại học Công Nghệ Đông Á</div>
        </div>
        <Button label="Đăng ký ngay" className="liquid-glass" />
      </div>
      {/* Statistic */}
      <div className={c("stats", "d-flex", "justify-content-center", "gap-5")}>
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
  );
}

export default Slider;
