import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import FormInput from "../src/components/FormInput";
import styles from "./../styles/pages/Home.module.scss";
import sun from "./../public/assets/png/sun.png";
import moon from "./../public/assets/png/moon.png";

export default function Home() {
  const [input, setInput]: any = useState(false);
  const [data, setData]: any = useState();
  const [dataCookie, setDataCookie]: any = useState();
  const [time, setTime]: any = useState();

  useEffect(() => {
    const time = new Date();
    let hours = time.getHours();
    if (hours > 18) {
      setTime("Sore");
    } else if (hours > 12) {
      setTime("Siang");
    } else if (hours > 0) {
      setTime("Page");
    } else {
      setTime("Datang");
    }
  }, []);

  useEffect(() => {
    if (getCookie("data") === "") {
      setInput(true);
    }
  }, [data]);

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setDataCookie(JSON.parse(tmp));
      }
    }
  }, []);

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
    <>
      {!input && (
        <DashboardLayout pageTitle="Home">
          <div className={styles.greetingMsg}>
            <span
              style={{
                marginRight: "6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {time === "Sore" || time === "Siang" ? (
                <Image src={sun} width={16} height={16} />
              ) : (
                <Image src={moon} width={16} height={16} />
              )}
            </span>
            Selamat {time}!
          </div>
          <div className={styles.greetingMsgMain}>Hi, {dataCookie?.nama}</div>
          <div className="card-list__wrapper">
            <Link href="/tema/input">
              <a className="card-template">
                <div className="card-illustration"></div>
                <div className="card-wrapper__text">
                  <div className="card-text">Chat HRD</div>
                  <div className="card-subtext">Lebih sopan dengan HRD</div>
                </div>
              </a>
            </Link>
            <Link href="#">
              <a className="card-template">
                <div className="card-text">Segera...</div>
              </a>
            </Link>
          </div>
        </DashboardLayout>
      )}
      {input && (
        <FormInput handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
    </>
  );
}
