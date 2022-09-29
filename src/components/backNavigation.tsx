import Image from "next/image";
import styles from "./../../styles/component/Back.module.scss";
import back from "./../../public/assets/png/back.png";
import { useRouter } from "next/router";

export default function BackNavigation() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles.inputTema} onClick={handleBack}>
      <span
        style={{ marginRight: "8px", display: "flex", alignItems: "center" }}
      >
        <Image src={back} width={7} height={11} />
      </span>{" "}
      Kembali
    </div>
  );
}
