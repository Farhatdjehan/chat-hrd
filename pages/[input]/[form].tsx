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
    ) : id === 4 ? (
      <>
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("divisi", "ex: Kreatif", "Divisi Melamar")}
      </>
    ) : id === 5 ? (
      <>
        {formDynamic("ttl", "ex: Jakarta, 12 Juni 2022", "Tempat dan Tanggal")}
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("nik", "ex: xxxxxxxxxx", "Nomor Induk Karyawan")}
        {formDynamic(
          "address",
          "ex: Jl. Raya Musi No. 90",
          "Alamat Tempat Tinggal"
        )}
        {formDynamic("jabatan", "ex: Manager", "Jabatan")}
        {formDynamic("divisi_bekerja", "ex: Kreatif", "Divisi Bekerja")}
        {formDynamic("end_date", "ex: 23 Januari 2023", "Terakhir Bekerja")}
        {formDynamic("experience_work", "ex: 3 tahun", "Lama Bekerja")}
      </>
    ) : id === 6 ? (
      <>
        {formDynamic("ttl", "ex: Jakarta, 12 Juni 2022", "Tempat dan Tanggal")}
        {formDynamic("jenis_cuti", "ex: Acara Keluarga Besar", "Jenis Cuti")}
        {formDynamic("perusahaan", "ex: PT. ABC", "Nama Perusahaan")}
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("nik", "ex: xxxxxxxxxx", "Nomor Induk Karyawan")}
        {formDynamic("jabatan", "ex: Manager", "Jabatan")}
        {formDynamic("divisi_bekerja", "ex: Kreatif", "Divisi Bekerja")}
        {formDynamic("lama_cuti", "ex: 1 Minggu", "Lama Cuti")}
        {formDynamic("start_cuti", "ex: 23 Januari 2023", "Mulai Cuti")}
        {formDynamic("end_cuti", "ex: 3 tahun", "Akhir Cuti")}
      </>
    ) : (
      <>
        {formDynamic("nama_hrd", "ex: Bapak/Ibu John Doe", "Nama HRD")}
        {formDynamic("tanggal", "ex: 12 Juni 2022", "Tanggal Izin")}
        {formDynamic("jabatan", "ex: Manager", "Jabatan")}
        {formDynamic("reason", "ex: Sakit", "Alasan Tidak Masuk")}
        {formDynamic("refrence_friend", "ex: Alfred", "Delegasi Tugas")}
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
