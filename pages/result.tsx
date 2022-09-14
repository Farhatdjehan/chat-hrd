import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";

export default function Result() {
  const [data, setData]: any = useState();
  const [messages, setMessages]: any = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setData(JSON.parse(tmp));
      }
    }
    if (getCookie("messages") !== "") {
      let tmp = getCookie("messages");

      if (tmp !== undefined) {
        setMessages(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    // console.log(messages);
    if (messages?.length > 0) {
      setCookie("messages", JSON.stringify(messages), 14);
    }
  }, [messages]);

  const handleSave = () => {
    let tmp = document.getElementById("template")?.innerHTML;
    const newData = [...messages];
    newData.push(tmp);
    setMessages(newData);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <DashboardLayout pageTitle="Input">
      <div className="result-wrapper">
        <div id="template">
          Saya adalah {data?.nama}, saya melamar jadi divisi {data?.divisi} di
          perusahaan {data?.perusahaan}
        </div>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleBack}>
            Kembali
          </button>
          <button className="btn" onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
