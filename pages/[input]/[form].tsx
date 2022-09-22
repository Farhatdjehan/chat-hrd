import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  const handleBack = () => {
    router.back();
  };

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

  const formInput = (id: number) => {
    return id === 1 ? (
      <form onSubmit={handleSubmit}>
        <div className="data-label">Nama Perusahaan</div>
        <input
          className="data-input"
          id="perusahaan"
          name="perusahaan"
          onChange={handleChange}
          placeholder="ex: PT. ABC"
        />
        <div className="data-label">Divisi Melamar</div>
        <input
          className="data-input"
          id="divisi"
          name="divisi"
          onChange={handleChange}
          placeholder="ex: Social Media Specialis"
        />
        <div className="data-label">Perusahaan Sebelumnya</div>
        <input
          className="data-input"
          id="former_company"
          name="former_company"
          placeholder="ex: PT. ABC"
          onChange={handleChange}
        />
        <div className="data-label">Pengalaman Bekerja</div>
        <input
          className="data-input"
          id="experience"
          name="experience"
          onChange={handleChange}
          placeholder="ex: 1 Tahun"
        />
        <div className="data-label">Sumber Lowongan</div>
        <input
          className="data-input"
          id="source"
          name="source"
          onChange={handleChange}
          placeholder="ex: Instagram"
        />
        <button className="btn btn-100" type="submit">
          Simpan
        </button>
      </form>
    ) : id === 2 ? (
      <form onSubmit={handleSubmit}>
        <div className="data-label">Nama Perusahaan</div>
        <input
          className="data-input"
          id="perusahaan"
          name="perusahaan"
          onChange={handleChange}
          placeholder="ex: PT. ABC"
        />
        <div className="data-label">Divisi Melamar</div>
        <input
          className="data-input"
          id="divisi"
          name="divisi"
          onChange={handleChange}
          placeholder="ex: Kreatif"
        />
        <div className="data-label">Sumber Lowongan</div>
        <input
          className="data-input"
          id="source"
          name="source"
          onChange={handleChange}
          placeholder="ex: Instagram"
        />
        <button className="btn btn-100" type="submit">
          Simpan
        </button>
      </form>
    ) : id === 3 ? (
      <form onSubmit={handleSubmit}>
        <div className="data-label">Nama HRD</div>
        <input
          className="data-input"
          id="nama_hrd"
          name="nama_hrd"
          onChange={handleChange}
          placeholder="ex: Bapak/Ibu John Doe"
        />
        <div className="data-label">Nama Perusahaan</div>
        <input
          className="data-input"
          id="perusahaan"
          name="perusahaan"
          onChange={handleChange}
          placeholder="ex: PT. ABC"
        />
        <div className="data-label">Divisi Melamar</div>
        <input
          className="data-input"
          id="divisi"
          name="divisi"
          onChange={handleChange}
          placeholder="ex: Kreatif"
        />
        <div className="data-label">Tanggal Melamar</div>
        <input
          className="data-input"
          id="tanggal"
          name="tanggal"
          onChange={handleChange}
          placeholder="ex: 1 Januari 1990"
        />
        <button className="btn btn-100" type="submit">
          Simpan
        </button>
      </form>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="data-label">Nama HRD</div>
        <input
          className="data-input"
          id="nama_hrd"
          name="nama_hrd"
          onChange={handleChange}
          placeholder="ex: Bapak/Ibu John Doe"
        />
        <div className="data-label">Nama Perusahaan</div>
        <input
          className="data-input"
          id="perusahaan"
          name="perusahaan"
          onChange={handleChange}
          placeholder="ex: PT. ABC"
        />
        <div className="data-label">Divisi Melamar</div>
        <input
          className="data-input"
          id="divisi"
          name="divisi"
          onChange={handleChange}
          placeholder="ex: Kreatif"
        />
        <button className="btn btn-100" type="submit">
          Simpan
        </button>
      </form>
    );
  };

  return (
    <DashboardLayout pageTitle="Input">
      <div className="main-padding">
        <div
          className={styles.inputTema}
          onClick={handleBack}
        >{`< Kembali`}</div>
        <>{formInput(idTemplate)}</>
      </div>
    </DashboardLayout>
  );
}
