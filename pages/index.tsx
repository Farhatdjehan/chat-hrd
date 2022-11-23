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
  const [result, setResult]: any = useState(false);
  const [data, setData]: any = useState();
  const [filteredData, setFilteredData]: any = useState();
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
  }, []);

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setDataCookie(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  const handleSearch = (e: any) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let filters = listMenu.filter((valueFilter) =>
      valueFilter.title
        .toLowerCase()
        .includes(data?.template_search?.toLowerCase())
    );
    setFilteredData(filters);
    setResult(true);
  };

  const handleReset = (e: any) => {
    e.preventDefault();
    let id = document.getElementById("template_search");
    setResult(false);
    id.value = "";
    setFilteredData();
  };

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
          {time} {dataCookie?.nama}!
        </div>
        {/* <div className={styles.greetingMsgMain}>Hi, </div> */}
        <div className={styles.greetingMsgMain}>Cari Template Apa?</div>
        <div className={styles.input}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Template Chat Apa?"
              name="template_search"
              id="template_search"
              onChange={handleSearch}
            />
            {result && <span onClick={handleReset}>×</span>}
            <button type="submit">Cari</button>
          </form>
        </div>
        <div className="card-list__wrapper">
          {result &&
            filteredData.map((item, index) => {
              return (
                <MenuHome
                  key={index}
                  color={item.color}
                  id={item.id}
                  type={item.type}
                  illustration={item.illustration}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              );
            })}

          {!result &&
            listMenu.map((item, index) => {
              return (
                <MenuHome
                  key={index}
                  color={item.color}
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
    </>
  );
}
