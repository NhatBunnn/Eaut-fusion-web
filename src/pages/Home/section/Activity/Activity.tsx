import { SectionTitle } from "@/components";
import styles from "./Activity.module.scss";
import { bindClass } from "@/utils/classnames";
import { Image } from "@/assets/images/image";

const c = bindClass(styles);

function Activity() {
  const activityImgs = [
    {
      image: "https://eaut.edu.vn/wp-content/uploads/2025/06/F8C0064.jpg",
    },
    {
      image:
        "https://eaut.edu.vn/wp-content/uploads/2025/09/z7016499477582_f32a83536154c8fef2dfa13fc1d0b1d2.jpg",
    },
    {
      image: "https://eaut.edu.vn/wp-content/uploads/2025/08/KIM_9165.jpg",
    },
    {
      image: "https://eaut.edu.vn/wp-content/uploads/2025/06/F8C9909.jpg",
    },
    {
      image:
        "https://eaut.edu.vn/wp-content/uploads/2025/05/z6617351104054_98514d66785dbe1b1400fc18408dedaa.jpg",
    },
  ];

  return (
    <section className={c("activity", "", "mt-5")}>
      <SectionTitle title="Các hoạt động của sinh viên" />
      <div className="" style={{ position: "relative" }}>
        <div className={c("content")}>
          {activityImgs?.map((d, i) => (
            <Image src={d.image} className={c("image")} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Activity;
