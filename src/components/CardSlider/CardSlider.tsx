import styles from "./CardSlider.module.scss";
import { bindClass } from "@/utils/classnames";
import { Card } from "./components";
import Button from "../Button";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
const c = bindClass(styles);

function CardSlider() {
  return (
    <div className={c("cardSlider")}>
      <div className={c("navigation")}>
        <div className={c("btn-prev")}>
          <Button
            icon={<FaAngleLeft />}
            style={{ padding: "10px 12px" }}
            className="liquid-glass btn-hover"
          />
        </div>
        <div className={c("btn-next")}>
          <Button
            icon={<FaChevronRight />}
            style={{ padding: "10px 12px" }}
            className="liquid-glass btn-hover"
          />
        </div>
      </div>
      <div className={c("content")}>
        <div className={c("slider-track", "d-flex")}>
          <div className={c("card")}>
            <Card />
          </div>
          <div className={c("card")}>
            <Card />
          </div>
          <div className={c("card")}>
            <Card />
          </div>
          <div className={c("card")}>
            <Card />
          </div>
          <div className={c("card")}>
            <Card />
          </div>
          <div className={c("card")}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
