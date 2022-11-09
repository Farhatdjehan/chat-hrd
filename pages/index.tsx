// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import FormInput from "../src/components/FormInput";
import styles from "./../styles/pages/Home.module.scss";
import sun from "./../public/assets/png/sun.png";
import moon from "./../public/assets/png/moon.png";
import chat from "./../public/assets/png/chat.png";
import Router, { useRouter } from "next/router";
import MenuHome from "../src/components/MenuHome";
import { listMenu } from "../src/components/constants/listMenu";

export default function Home() {
  const router = useRouter();
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
      setTime("Pagi");
    } else {
      setTime("Datang");
    }
  }, []);

  useEffect(() => {
    document.addEventListener(
      "message",
      function (event) {
        console.log("Received post message", event);
      },
      false
    );
  }, []);

  useEffect(() => {
    if (getCookie("data") === "") {
      router.push("/first");
    } else {
      router.push("/");
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

  return (
    <>
      {/* {!input && ( */}
      <DashboardLayout pageTitle="Home">
        <div className={styles.greetingMsg}>
          <span
            style={{
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {time === "Sore" || time === "Siang" || time === "Pagi" ? (
              <Image src={sun} width={16} height={16} />
            ) : (
              <Image src={moon} width={16} height={16} />
            )}
          </span>
          Selamat {time}!
        </div>
        <div className={styles.greetingMsgMain}>Hi, {dataCookie?.nama}</div>
        <div className="card-list__wrapper">
          {listMenu.map((item, index) => {
            return (
              <MenuHome
                key={index}
                id={item.id}
                type={item.type}
                illustration={item.illustration}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </DashboardLayout>
      {/* )} */}
      {/* {input && (
        <FormInput handleSubmit={handleSubmit} handleChange={handleChange} />
      )} */}
    </>
  );
}
