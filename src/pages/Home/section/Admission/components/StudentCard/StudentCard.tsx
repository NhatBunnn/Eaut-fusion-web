import { useRef } from "react";
import styles from "./StudentCard.module.scss";
import { bindClass } from "@/utils/classnames";
import { Image, Images } from "@/assets/images/image";
import { IoClose } from "react-icons/io5";

const c = bindClass(styles);

type Student = {
  name: string;
  birth: string;
  faculty: string;
};

type StudentCardPops = {
  student?: Student;
  onClick?: () => void;
  onClose?: () => void;
};

function StudentCard({
  student = {
    name: "Nguyễn Văn A",
    birth: "01/01/2000",
    faculty: "Công nghệ thông tin",
  },
  onClick,
  onClose,
}: StudentCardPops) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const cardPos = card.getBoundingClientRect();
    const gapX = e.clientX - cardPos.left;
    const gapY = e.clientY - cardPos.top;

    const centerY = cardPos.width / 2;
    const centerX = cardPos.height / 2;

    const rotateY = ((gapX - centerX) / centerX) * 15;
    const rotateX = ((gapY - centerY) / centerY) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      onClick={onClick}
      className={c("studentCard")}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={c("header", "d-flex", "py-2", "px-3")}>
        <Image src={Images.logo} size="40px" />
        <div className={""}>
          <div>TRƯƠNG ĐẠI HỌC CÔNG NGHỆ ĐÔNG Á</div>
          <div>EAST ASIA UNIVERSITY OF TECHNOLOGY</div>
        </div>
        {onClose && (
          <div className={c("btn-close")} onClick={onClose}>
            <IoClose />
          </div>
        )}
      </div>
      <div className={c("body", "d-flex", "p-3")}>
        <div className={c("avatar")}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzW1dWg3OaQ7HM4R9BOcOx30OKsbwbApODw&s" />
        </div>
        <div className={c("content", "px-3")}>
          <div className={c("title", "mb-2")}>THẺ SINH VIÊN</div>
          <div className={c("info", "mb-2")}>
            <div>
              Họ & tên: <span>{student!.name}</span>
            </div>
            <div>
              Ngày sinh: <span>{student!.birth}</span>
            </div>
            <div>
              Mã sinh viên: <span>20232288</span>
            </div>
            <div>
              Niên khóa: <span>2023-2028</span>
            </div>
          </div>
          <div className={c("faculty")}>
            Khoa: <span>{student!.faculty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
