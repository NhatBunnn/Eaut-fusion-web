import styles from "./ValidateInput.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

type ValidateInputProps = {
  fieldErrors?: Record<string, string>;
  errors?: string;
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  name: string;
  className?: string;
};

function ValidateInput({
  fieldErrors,
  errors,
  onChange,
  value,
  label,
  name,
  className,
}: ValidateInputProps) {
  return (
    <div className={c("mb-3 w-100", className)}>
      {label && (
        <label htmlFor={`input-${name}`} className="form-label">
          {label}
        </label>
      )}
      <input
        className={c("form-control", {
          "is-invalid":
            (errors && errors.length) || (fieldErrors && fieldErrors[name]),
        })}
        id={`input-${name}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <div className="invalid-feedback">
        {fieldErrors && fieldErrors[name]}
        {errors}
      </div>
    </div>
  );
}

export default ValidateInput;
