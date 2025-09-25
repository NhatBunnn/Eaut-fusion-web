import { useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";
import { bindClass } from "@/utils/classnames";
import { FaBeer, FaSpinner } from "react-icons/fa";
import type { ReactElement } from "react";
import { motion } from "framer-motion";

const c = bindClass(styles);

interface ButtonProps {
  label?: string;
  icon?: ReactElement;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  to?: string;
  color?: "primary";
  style?: React.CSSProperties;
  className?: string;
}

function Button({
  label = "",
  icon,
  type,
  onClick,
  isLoading = false,
  to = "",
  color,
  style,
  className,
}: ButtonProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <button
        style={{
          backgroundColor: color === "primary" ? "var(--color-primary)" : "",
          color: color === "primary" ? "#fff" : "",
          ...style,
        }}
        className={c(
          "button",
          "d-inline-flex",
          "cursor-pointer",
          "link-no-style",
          className
        )}
        type={type}
        onClick={() => (to ? navigate(to) : onClick?.())}
      >
        {icon && <div className={c("icon")}>{icon}</div>}
        <div className={c("label")}>
          {!isLoading && label}
          {isLoading && <FaSpinner className="ms-2 fa-spin" />}
        </div>
      </button>
    </motion.div>
  );
}

export default Button;
