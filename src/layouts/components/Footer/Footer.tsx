import { Image, Images } from "@/assets/images/image";
import styles from "./Footer.module.scss";
import { bindClass } from "@/utils/classnames";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const c = bindClass(styles);

function Footer() {
  return (
    <div className={c("footer", "px-5")}>
      <div className="row">
        <div className="col-lg">
          <Image src={Images.fullLogo} style={{ maxWidth: "300px" }} />
          <div className={c("social")}>
            <p>Theo dõi chúng tôi</p>
            <div>
              <FaFacebook />
              <FaTiktok />
              <FaYoutube />
              <FaSquareXTwitter />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <h3>Cơ sở Hà Nội</h3>
            <p>Cơ sở đào tạo thực hành</p>
            <p>Đường Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
          </div>
          <div>
            <h3>Cơ sở Bắc Ninh</h3>
            <p>Làng Đại học, Phường Võ Cường, Bắc Ninh</p>
          </div>
          <hr />
          <p>Điện thoại: 0243.555.2008/024.2236.5888</p>
          <p>email: tuyensinh@eaut.edu.vn</p>
        </div>
        <div className="col-lg">
          <h3>Bản đồ</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.598697057031!2d105.7393834!3d21.0400095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135096b31fa7abb%3A0xff645782804911af!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgxJDhu5NuZyDEkMO0!5e0!3m2!1svi!2s!4v1727255700000!5m2!1svi!2s"
            style={{ height: "80% ", width: "100%" }}
          ></iframe>
        </div>
      </div>
      <hr />
      <div>
        <p className="m-0">
          © 2025 Website được thiết kế bởi{" "}
          <span className="text-primary">Nhật Bủn</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
