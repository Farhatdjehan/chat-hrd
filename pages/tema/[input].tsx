import Link from "next/link";
import { useRouter } from "next/router";
import { templateChat } from "../../src/components/constants/template";
import styles from "./../../styles/pages/TemaInput.module.scss";
import DashboardLayout from "../../src/components/DashboardLayout";
import back from "./../../public/assets/png/back.png";
import Image from "next/image";
import BackNavigation from "../../src/components/backNavigation";

export default function TemaChat() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <DashboardLayout pageTitle="Pilih Tema">
      <BackNavigation />
      {templateChat.map((item: any, index: any) => {
        return (
          <Link key={index} href={`/chat-hrd/${index + 1}`}>
            <a>
              <div className={styles.templateMessages}>
                <div className={styles.templateIllustrator}>{index + 1}</div>
                <div>
                  <div className={styles.templateTop}>Template {index + 1}</div>
                  <div>{item.title}</div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </DashboardLayout>
  );
}
