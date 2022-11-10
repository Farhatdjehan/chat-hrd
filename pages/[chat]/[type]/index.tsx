import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackNavigation from "../../../src/components/backNavigation";
import {
  formDynamic,
  getCookie,
  setCookie,
} from "../../../src/components/common/utils";
import { formInput } from "../../../src/components/constants/formInput";
import DashboardLayout from "../../../src/components/DashboardLayout";
import styles from "./../../../styles/pages/InputedTema.module.scss";

export default function Form() {
  const router = useRouter();
  const [data, setData]: any = useState();
  let idTemplate = Number(router?.query?.id) - 1;
  let idMsg = Number(router?.query?.id_msg) - 1;

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setData(JSON.parse(tmp));
      }
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCookie("data", JSON.stringify(data), 14);
    router.push(
      `/result?id=${router?.query?.id}&id_msg=${router?.query?.id_msg}`
    );
  };

  const handleChange = (e: any) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };


  console.log(data);
  return (
    <DashboardLayout pageTitle="Input">
      <BackNavigation />
      <div className={styles.formInput}>
        <form onSubmit={handleSubmit}>
          {formInput[idTemplate]?.form[idMsg].input?.map((item, index) => {
            return formDynamic(
              item.name,
              item.placeholder,
              item.label,
              handleChange
            );
          })}
          ;
          <div style={{ textAlign: "right" }}>
            <button className="btn" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
