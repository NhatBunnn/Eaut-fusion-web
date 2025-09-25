import styles from "@assets/images/image.module.scss";
import { bindClass } from "@/utils/classnames";
import type { CSSProperties, HTMLAttributes, MouseEventHandler } from "react";

import eaut_logo from "@assets/images/logos/eaut_logo.png";
import full_logo_eaut from "@assets/images/logos/full_logo_eaut.png";

const c = bindClass(styles);

type ImageProps = HTMLAttributes<HTMLDivElement> & {
  onClick?: MouseEventHandler<HTMLDivElement>;
  isCircled?: boolean;
  size?: string | number;
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  className?: string;
  ratio?: string;
};

export const Image = ({
  onClick,
  isCircled,
  size,
  src,
  alt = "",
  width,
  height,
  style,
  className,
  ratio = "",
  ...props
}: ImageProps) => {
  const [w, h] = ratio.split("/").map((d) => Number(d));

  return (
    <div
      onClick={onClick}
      className={c("img-wrapper", className)}
      style={{
        width: width || size,
        height: height || size,
        aspectRatio: ratio || undefined,
        ...style,
        borderRadius: isCircled ? "100px" : "",
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: !isNaN(w) && !isNaN(h) ? (w > h ? "100%" : "auto") : "100%",
          height: !isNaN(w) && !isNaN(h) ? (w > h ? "auto" : "100%") : "100%",
        }}
      />
    </div>
  );
};

export const Images = {
  logo: eaut_logo,
  fullLogo: full_logo_eaut,
};
