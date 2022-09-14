import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";

export default function Form() {
  const router = useRouter();
  const [data, setData]: any = useState();

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
    router.push("/result");
  };

  const handleChange = (e: any) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (
    <DashboardLayout pageTitle="Input">
      <div className="main-padding">
        <div className="title-type" onClick={handleBack}>{`< Chat HRD`}</div>
        <form onSubmit={handleSubmit}>
          <div className="data-label">Nama Perusahaan</div>
          <input
            className="data-input"
            id="perusahaan"
            name="perusahaan"
            onChange={handleChange}
          />
          <div className="data-label">Divisi Melamar</div>
          <input
            className="data-input"
            id="divisi"
            name="divisi"
            onChange={handleChange}
          />
          <button className="btn btn-100" type="submit">
            Simpan
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
