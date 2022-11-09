import Link from "next/link";
import { useRouter } from "next/router";
import { templateChat } from "../../src/components/constants/template";
import styles from "./../../styles/pages/TemaInput.module.scss";
import DashboardLayout from "../../src/components/DashboardLayout";
import back from "./../../public/assets/png/back.png";
import Image from "next/image";
import BackNavigation from "../../src/components/backNavigation";
import { useEffect, useState } from "react";
import { slugify } from "../../src/components/common/utils";

export default function TemaChat() {
  const router = useRouter();
  const [id, setId]: any = useState();
  let routerId: any = router?.query?.id;

  useEffect(() => {
    if (routerId !== undefined) {
      let parseIntData = parseInt(routerId) - 1;
      setId(parseIntData);
    }
  }, [router]);

  return (
    <DashboardLayout pageTitle="Pilih Tema">
      <BackNavigation />
      {id !== undefined &&
        templateChat[id]?.template?.map((item: any, index: any) => {
          return (
            <Link
              key={index}
              href={`/${templateChat[id]?.type}/${slugify(
                templateChat[id]?.template[index]?.title
              )}?id=${templateChat[id]?.id}&id_msg=${
                templateChat[id]?.template[index]?.id
              }`}
            >
              <a>
                <div className={styles.templateMessages}>
                  <div className={styles.templateIllustrator}>{index + 1}</div>
                  <div>
                    <div className={styles.templateTop}>
                      Template {index + 1}
                    </div>
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
