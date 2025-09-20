import styles from "@assets/images/image.module.scss";
import { bindClass } from "@/utils/classnames";
import type { CSSProperties, HTMLAttributes, MouseEventHandler } from "react";

import eaut_logo from "@assets/images/logos/eaut_logo.png";

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
  ...props
}: ImageProps) => {
  return (
    <div
      onClick={onClick}
      className={c("img-wrapper", className)}
      style={{
        width: width || size,
        height: height || size,
        ...style,
        borderRadius: isCircled ? "100px" : "",
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export const Images = {
  logo: eaut_logo,
};
