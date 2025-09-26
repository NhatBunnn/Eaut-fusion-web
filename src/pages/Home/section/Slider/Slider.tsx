import { Button } from "@/components";
import styles from "./Slider.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function Slider() {
  return (
    <section className={c("slider")}>
      {/* Image */}
      <div className={c("slide", "mt-5", "p-lg-0")}>
        <img
          src="https://eaut.edu.vn/wp-content/uploads/2020/04/truong.jpg"
          alt=""
        />
        {/* Caption */}
        <div className={c("caption")}>
          <div className={c("text", "p-3", "mb-2")}>
            <div className={c("title", "font-helventin")}>
              Nơi chắp cánh ước mơ
            </div>
            <div className={c("sub-title")}>Đại học Công Nghệ Đông Á</div>
          </div>
          <Button label="Đăng ký ngay" className="liquid-glass" />
        </div>
      </div>
      {/* Statistic */}
      <div className={c("stats", "d-flex", "justify-content-center")}>
        <div className={c("inner", "d-flex", "gap-3")}>
          <div className="row">
            <div className="col">
              <div className={c("stats-item")}>
                <div className={c("value")}>{`> 10.000`}</div>
                <div className={c("label")}>Sinh viên</div>
              </div>
            </div>
            <div className="col">
              <div className={c("stats-item")}>
                <div className={c("value")}>{`> 10.000`}</div>
                <div className={c("label")}>Sinh viên</div>
              </div>
            </div>
            <div className="col">
              <div className={c("stats-item")}>
                <div className={c("value")}>{`> 10.000`}</div>
                <div className={c("label")}>Sinh viên</div>
              </div>
            </div>
            <div className="col">
              <div className={c("stats-item")}>
                <div className={c("value")}>{`> 10.000`}</div>
                <div className={c("label")}>Sinh viên</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
