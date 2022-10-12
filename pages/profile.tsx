// @ts-nocheck

import DashboardLayout from "../src/components/DashboardLayout";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const [data, setData]: any = useState();
  const [edit, setEdit]: any = useState();

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setData(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    setEdit(setDefaultData());
  }, [data]);

  const setDefaultData = () => {
    const newData = { ...edit };
    const existingData = data;
    if (existingData?.nama) {
      newData.nama = existingData?.nama;
    }
    if (existingData?.umur) {
      newData.umur = existingData?.umur;
    }
    if (existingData?.telepon) {
      newData.telepon = existingData?.telepon;
    }
    return newData;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let tmp = { ...data };
    tmp.nama = edit?.nama;
    tmp.umur = edit?.umur;
    tmp.telepon = edit?.telepon;
    setCookie("data", JSON.stringify(tmp), 14);
    router.reload();
  };
  const handleChange = (e: any) => {
    const newData = { ...edit };
    newData[e.target.id] = e.target.value;
    setEdit(newData);
  };

  return (
    <>
      <DashboardLayout pageTitle="Edit Profile">
        <div className="data-title">Edit Profile</div>{" "}
        <div className="data-subtitle">
          Edit data yang telah di input sebelumnya
        </div>
        <form onSubmit={handleSubmit}>
          <div className="data-label">Nama Anda</div>
          <input
            className="data-input first"
            id="nama"
            name="nama"
            onChange={handleChange}
            value={edit?.nama}
          />
          <div className="data-label">Umur Anda</div>
          <input
            className="data-input first"
            type="number"
            id="umur"
            name="umur"
            onChange={handleChange}
            value={edit?.umur}
          />
          <div className="data-label">Nomor Telepon</div>
          <input
            className="data-input first"
            type="number"
            id="telepon"
            name="telepon"
            onChange={handleChange}
            value={edit?.telepon}
          />
          <div className="data-wrapper__submit">
            <button className="data-submit" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </DashboardLayout>
    </>
  );
}
