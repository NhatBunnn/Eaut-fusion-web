import { Image } from "@/assets/images/image";
import styles from "./Campus.module.scss";
import { bindClass } from "@/utils/classnames";
import { Button, SectionTitle } from "@/components";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const c = bindClass(styles);

function Campus() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const campusImgs = [
    {
      title: "Thư viện EAUT",
      desc: "Diện tích 2.500 m², hiện đại, cung cấp sách, tài liệu điện tử và không gian học tập cho sinh viên.",
      image:
        "https://eaut.edu.vn/wp-content/uploads/2024/09/anh-thu-vien-truong-dai-hoc-cong-nghe-dong-a.jpg",
    },
    {
      title: "Thư viện EAUT---2",
      desc: "Diện tích 2.500 m², hiện đại, cung cấp sách, tài liệu điện tử và không gian học tập cho sinh viên.",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/916/2024/11/04/Winter-aespa-584459499.png",
    },
    {
      title: "Thư viện EAUT---3",
      desc: "Diện tích 2.500 m², hiện đại, cung cấp sách, tài liệu điện tử và không gian học tập cho sinh viên.",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/916/2024/11/04/Winter-aespa-584459499.png",
    },
  ];

  const handleSlide = (nav: string) => {
    if (nav === "right") {
      setCurrentSlide((prev) => (prev >= campusImgs.length - 1 ? 0 : prev + 1));
    } else if (nav === "left") {
      console.log("left");
      setCurrentSlide((prev) =>
        prev === 0 ? campusImgs.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className={c("campus", "mt-5")}>
      <SectionTitle title="Cở sở vật chất" />
      <div className={c("content")}>
        <div className={c("navigation")}>
          <div className={c("btn-prev")}>
            <Button
              icon={<FaAngleLeft />}
              style={{ padding: "10px 12px" }}
              className="liquid-glass btn-hover"
              onClick={() => handleSlide("left")}
            />
          </div>
          <div className={c("btn-next")}>
            <Button
              icon={<FaChevronRight />}
              style={{ padding: "10px 12px" }}
              className="liquid-glass btn-hover"
              onClick={() => handleSlide("right")}
            />
          </div>
        </div>
        <div className={c("slider")}>
          <div
            className={c("slider-track", "d-flex")}
            style={{ transform: `translateX(calc(-${currentSlide} * 100%))` }}
          >
            {campusImgs?.map((d, i) => (
              <Image
                src={d.image}
                className={c("slide")}
                style={{ maxHeight: "600px" }}
              />
            ))}
          </div>
        </div>
        <div className={c("caption")}>
          <div className={c("title")}>{campusImgs[currentSlide]?.title}</div>
          <div className={c("desc")}>{campusImgs[currentSlide]?.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default Campus;
