import { SectionTitle } from "@/components";
import styles from "./Activity.module.scss";
import { bindClass } from "@/utils/classnames";
import { Image } from "@/assets/images/image";

const c = bindClass(styles);

function Activity() {
  return (
    <section className={c("activity", "", "mt-5")}>
      <SectionTitle title="Các hoạt động của sinh viên" />
      <div className="" style={{ position: "relative" }}>
        <div className={c("content")}>
          <Image
            src="https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg"
            className={c("image")}
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAOv2PCsc7XbBbIy6mzKfGpcdHQtBRn5lGA&s"
            className={c("image")}
          />
          <Image
            src="https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg"
            className={c("image")}
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAOv2PCsc7XbBbIy6mzKfGpcdHQtBRn5lGA&s"
            className={c("image")}
          />
          <Image
            src="https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg"
            className={c("image")}
          />
        </div>
      </div>
    </section>
  );
}
export default Activity;
