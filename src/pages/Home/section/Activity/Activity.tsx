import { SectionTitle } from "@/components";
import styles from "./Activity.module.scss";
import { bindClass } from "@/utils/classnames";
import { Image } from "@/assets/images/image";

const c = bindClass(styles);

function Activity() {
  const activityImgs = [
    {
      image:
        "https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg",
    },
    {
      image:
        "https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg",
    },
    {
      image:
        "https://kenh14cdn.com/203336854389633024/2023/4/30/photo1682772628140-16827726282301463572662-16828396997672050284284.jpeg",
    },
    {
      image:
        "https://sgp1.digitaloceanspaces.com/media-pro-saokpop/2024/04/aespa-winter-2024.jpeg",
    },
    {
      image:
        "https://kenh14cdn.com/203336854389633024/2023/4/30/photo1682772628140-16827726282301463572662-16828396997672050284284.jpeg",
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
