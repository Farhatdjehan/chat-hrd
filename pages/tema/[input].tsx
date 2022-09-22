import Link from "next/link";
import { useRouter } from "next/router";
import { templateChat } from "../../src/components/constants/template";
import styles from "./../../styles/pages/TemaInput.module.scss";
import DashboardLayout from "../../src/components/DashboardLayout";

export default function TemaChat() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <DashboardLayout pageTitle="Pilih Tema">
      <div className={styles.inputTema} onClick={handleBack}>
        {"<"} Kembali
      </div>
      {templateChat.map((item: any, index: any) => {
        return (
          <Link key={index} href={`/chat-hrd/${index + 1}`}>
            <a>
              <div className={styles.templateMessages}>{item.title}</div>
            </a>
          </Link>
        );
      })}
    </DashboardLayout>
  );
}
