import { Image } from "@/assets/images/image";
import styles from "./Card.module.scss";
import { bindClass } from "@/utils/classnames";
import Button from "@/components/Button";

const c = bindClass(styles);

type CardPops = {
  className?: string;
};

function Card({ className }: CardPops) {
  return (
    <div className={c("card", "p-3", className)}>
      <Image
        className={c("image")}
        ratio="368/276"
        width="100%"
        src="https://daotaodaihoc.net/uploads/news/2023_10/cong-nghe-thong-tin-la-gi.png"
      />
      <div className={c("title")}>Ngành công nghệ thông tin</div>
      <div className={c("desc")}>
        Học về lập trình, phát triển phần mềm và hệ thống, mở ra cơ hội nghề
        nghiệp trong công nghệ hiện đại
      </div>
      <div className={c("subjectCombo")}>Khối xết tuyển: A01, D01 </div>
      <Button label="Xem chi tiết" color="primary" />
    </div>
  );
}

export default Card;
