import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import FormInput from "../src/components/FormInput";
import styles from "./../styles/pages/Home.module.scss";

export default function Home() {
  const [input, setInput]: any = useState(false);
  const [data, setData]: any = useState();

  useEffect(() => {
    if (getCookie("data") === "") {
      setInput(true);
    }
  }, [data]);

  useEffect(() => {}, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCookie("data", JSON.stringify(data), 14);
    if (getCookie("data") !== "") {
      setInput(false);
    }
  };

  const handleChange = (e: any) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  return (
    <DashboardLayout pageTitle="Home">
      {!input && (
        <div className="card-list__wrapper">
          <Link href="/chat-hrd/input">
            <a className="card-template">
              <div className="card-illustration"></div>
              <div className="card-text">Chat HRD</div>
            </a>
          </Link>
          <Link href="#">
            <a className="card-template">
              <div className="card-text">Segera...</div>
            </a>
          </Link>
        </div>
      )}

      {input && (
        <FormInput handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
    </DashboardLayout>
  );
}
