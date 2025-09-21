import styles from "./Home.module.scss";
import { bindClass } from "@utils/classnames.tsx";
import Button from "@/components/Button/Button";
import { Image } from "@/assets/images/image";

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
          <div className={c("history", "container-fluid")}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col">
                    <div className={c("timeline")}>
                      <div className={c("event", "ms-5")}>
                        <div className={c("content")}>
                          <div className={c("year")}>2008</div>
                          <div className={c("desc")}>Thành lập trường</div>
                        </div>
                      </div>
                      <div className={c("event", "ms-5")}>
                        <div className={c("content")}>
                          <div className={c("year")}>2008</div>
                          <div className={c("desc")}>Thành lập trường</div>
                        </div>
                      </div>
                      <div className={c("event", "ms-5")} style={{ bottom: 0 }}>
                        <div className={c("content")}>
                          <div className={c("year")}>2008</div>
                          <div className={c("desc")}>Thành lập trường</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className={c(
                        "detail",
                        "d-flex",
                        "flex-column",
                        "align-item-center",
                        "justify-content-center",
                        "h-100"
                      )}
                    >
                      <div className={c("title")}>Thành lập trường</div>
                      <div className={c("desc")}>
                        Trường chính thức được thành lập và khai giảng khóa học
                        đầu tiên, đánh dấu bước khởi đầu quan trọng trong hành
                        trình giáo dục của mình
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={c("image")}>
                  <Image
                    src="https://kenh14cdn.com/203336854389633024/2023/4/30/photo1682772628140-16827726282301463572662-16828396997672050284284.jpeg"
                    ratio="652/435"
                    width="80%"
                    className={c("item")}
                  />
                  <Image
                    src="https://kenh14cdn.com/203336854389633024/2023/4/30/photo1682772628140-16827726282301463572662-16828396997672050284284.jpeg"
                    ratio="652/435"
                    width="80%"
                    className={c("item")}
                    style={{
                      transform: "rotate(5deg)",
                    }}
                  />
                  <Image
                    src="https://kenh14cdn.com/203336854389633024/2023/4/30/photo1682772628140-16827726282301463572662-16828396997672050284284.jpeg"
                    ratio="652/435"
                    width="80%"
                    className={c("item")}
                    style={{
                      transform: "rotate(10deg)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* Section: program */}
        <section className={c("program", "px-lg-5", "mt-5")}>
          <div className={c("title")}>Các ngành đào tạo</div>
        </section>
      </main>
    </div>
  );
}

export default Home;
