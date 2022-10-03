import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackNavigation from "../../src/components/backNavigation";
import { getCookie, setCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import styles from "./../../styles/pages/InputedTema.module.scss";

export default function Form() {
  const router = useRouter();
  const [data, setData]: any = useState();
  let idTemplate = Number(router?.query?.form);

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setData(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCookie("data", JSON.stringify(data), 14);
    router.push(`/result/${router?.query?.form}`);
  };

  const handleChange = (e: any) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const formDynamic = (id: string, placeholder: string, label: string) => {
    return (
      <>
        <div className="data-label">{label}</div>
        <input
          className="data-input"
          id={id}
          name={id}
          onChange={handleChange}
          placeholder={placeholder}
          required
        />
        {/* <div style={{ fontSize: "12px", marginBottom: "8px" }}>
          Harap isi form ini ya!
        </div> */}
      </>
    );
  };

  const formInput = (id: number) => {
    return id === 1 ? (
      <>
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("divisi", "ex: Social Media Spesialis", "Divisi Melamar")}
        {formDynamic("former_company", "ex: PT. ABC", "Perusahaan Sebelumnya")}
        {formDynamic("experience", "ex: 1 Tahun", "Pengalaman Bekerja")}
        {formDynamic("source", "ex: Instagram", "Sumber Lowongan")}
      </>
    ) : id === 2 ? (
      <>
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("divisi", "ex: Social Media Spesialis", "Divisi Melamar")}
        {formDynamic("source", "ex: Instagram", "Sumber Lowongan")}
      </>
    ) : id === 3 ? (
      <>
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("divisi", "ex: Kreatif", "Divisi Melamar")}
        {formDynamic("tanggal", "ex: 1 Januari 2012", "Tanggal Melamar")}
      </>
    ) : (
      <>
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("divisi", "ex: Kreatif", "Divisi Melamar")}
      </>
    );
  };

  return (
    <DashboardLayout pageTitle="Input">
      <BackNavigation />
      <div className={styles.formInput}>
        <form onSubmit={handleSubmit}>
          {formInput(idTemplate)}
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
