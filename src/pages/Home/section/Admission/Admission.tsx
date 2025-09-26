import { Button, SectionTitle, ValidateInput } from "@/components";
import styles from "./Admission.module.scss";
import { bindClass } from "@/utils/classnames";
import { StudentCard } from "./components";
import { useState } from "react";

const c = bindClass(styles);

function Admission() {
  const [student, setStudent] = useState({ name: "", birth: "", faculty: "" });
  const [expandCard, setExpandCard] = useState(false);

  const handelExspandCard = () => {
    setExpandCard((prev) => !prev);
  };

  return (
    <div className={c("adminssion", "mt-5")}>
      {expandCard && (
        <div className={c("card-wrapper")}>
          <div className={c("card")}>
            <StudentCard
              student={student}
              onClose={() => handelExspandCard()}
            />
          </div>
        </div>
      )}
      <SectionTitle
        title="Tuyển sinh"
        subTitle="Hãy trở thành sinh viên Đại học Công nghệ Đông Á ngay hôm nay và bắt đầu hành trình kiến thức của bạn"
      />
      <div className={c("content")}>
        <div className="row">
          <div className="col-12  col-lg-6  flex-center">
            <div className={c("form", "p-3", "w-100", "mb-4", "mb-lg-none")}>
              <h3>Đăng ký ngay</h3>
              <form>
                <ValidateInput
                  name="name"
                  label="Họ và tên"
                  value={student.name}
                  onChange={(value) => setStudent({ ...student, name: value })}
                />
                <ValidateInput
                  name="birth"
                  label="Ngày sinh"
                  value={student.birth}
                  onChange={(value) => setStudent({ ...student, birth: value })}
                />
                <ValidateInput
                  name="faculty"
                  label="Ngành"
                  value={student.faculty}
                  onChange={(value) =>
                    setStudent({ ...student, faculty: value })
                  }
                />
                <Button label="Đăng ký" color="primary" />
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 flex-center ">
            <div className="d-flex align-items-center h-100">
              <StudentCard
                student={student}
                onClick={() => handelExspandCard()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
