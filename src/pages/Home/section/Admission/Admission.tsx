import { SectionTitle } from "@/components";
import styles from "./Admission.module.scss";
import { bindClass } from "@/utils/classnames";

const c = bindClass(styles);

function Admission() {
  return (
    <div className={c("adminssion")}>
      <SectionTitle title="Tuyển sinh" />
    </div>
  );
}

export default Admission;
