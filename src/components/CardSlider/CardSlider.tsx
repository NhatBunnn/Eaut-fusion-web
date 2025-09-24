import styles from "./CardSlider.module.scss";
import { bindClass } from "@/utils/classnames";
import { Card } from "./components";
import Button from "../Button";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
const c = bindClass(styles);

function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Ngành công nghệ thông tin",
      desc: "Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề nghiệp trong công nghệ hiện đại",
      subjectCombo: "Khối xết tuyển: A01, D01",
    },
    {
      title: "Ngành công nghệ thông tin",
      desc: "Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề nghiệp trong công nghệ hiện đại",
      subjectCombo: "Khối xết tuyển: A01, D01",
    },
    {
      title: "Ngành công nghệ thông tin",
      desc: "Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề nghiệp trong công nghệ hiện đại",
      subjectCombo: "Khối xết tuyển: A01, D01",
    },
    {
      title: "Ngành công nghệ thông tin",
      desc: "Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề nghiệp trong công nghệ hiện đại",
      subjectCombo: "Khối xết tuyển: A01, D01",
    },
    {
      title: "Ngành công nghệ thông tin",
      desc: "Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề nghiệp trong công nghệ hiện đại",
      subjectCombo: "Khối xết tuyển: A01, D01",
    },
  ];

  const handleSlide = (nav: string) => {
    const maxSlide = Math.ceil(cards.length / 3) - 1;
    if (nav === "right") {
      setCurrentSlide((prev) => (maxSlide === prev ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
    }
  };

  return (
    <div className={c("cardSlider")}>
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
      <div className={c("content")}>
        <div
          className={c("slider-track", "d-flex")}
          style={{ transform: `translateX(calc(-${currentSlide} * 100%))` }}
        >
          {cards?.map((d, i) => (
            <Card className={c("card")} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
