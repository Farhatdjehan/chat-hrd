// import s from "./FooterMobile.module.scss";
import playstoreDownload from "./../../../../public/footer-hrd.png";
import styles from "./../../DashboardLayout/DashboardLayout.module.scss";
import GlobeBlueSvg from "./../../../../public/assets/svg/globe-blue.svg";
import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  return (
    <div className={styles.iconFooter}>
      <Link
        href="https://play.google.com/store/apps/details?id=com.koneksi.akhlaqchat"
        passHref
      >
        <a>
          <Image width={80} height={24} src={playstoreDownload} />
          <span>Download Sekarang Juga!</span>
        </a>
      </Link>
    </div>
  );
}
