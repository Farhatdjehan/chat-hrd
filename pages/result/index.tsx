// @ts-nocheck
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./../../styles/pages/lastPages.module.scss";
import BackNavigation from "../../src/components/backNavigation";
import { textTemplate } from "../../src/components/constants/textTemplate";

export default function Result() {
  const router = useRouter();
  const [number, setNumber]: any = useState();
  const [copied, setCopied]: any = useState();
  const [messages, setMessages]: any = useState([]);
  const [selectedMessages, setSelectedMessages]: any = useState();
  const [popup, setPopup]: any = useState();
  const [textPopup, setTextPopup]: any = useState();
  const [combine, setCombine]: any = useState();
  let idTemplate = Number(router?.query?.id) - 1;
  let idMsg = Number(router?.query?.id_msg) - 1;

  useEffect(() => {
    let template = textTemplate(combine);
    setSelectedMessages(template[idTemplate]?.input[idMsg]);
  }, [router, combine]);

  useEffect(() => {
    if (router?.query?.id !== undefined) {
      let integerId = router?.query?.id;
      if (integerId !== undefined) {
        setNumber(Number(integerId));
      }
    }
  }, [router]);

  useEffect(() => {
    let getData = getCookie("data");
    if (getData !== undefined) {
      let tmpGetData = JSON.parse(getData);
      setCombine(tmpGetData);
    }
  }, []);

  useEffect(() => {
    if (popup) {
      setCookie("data", JSON.stringify(combine), 14);
      if (combine?.message) {
        window?.ReactNativeWebView?.postMessage(JSON.stringify(combine));
      }
    }
  }, [popup, combine]);

  useEffect(() => {
    if (messages?.length > 0) {
      let tmp = { ...combine };
      tmp.message = [...messages];
      setCombine(tmp);
    }
  }, [messages]);

  useEffect(() => {
    if (popup) {
      setTimeout(function () {
        setPopup(false);
      }, 2000);
    }
  }, [popup]);

  const handleCopy = () => {
    setCopied(true);
    setTextPopup("Berhasil Menyalin");
    setPopup(true);
  };

  console.log(
    <div
      dangerouslySetInnerHTML={{
        __html: selectedMessages?.text,
      }}
    />
  );

  const handleSave = () => {
    setTextPopup("Berhasil Menyimpan");
    setPopup(true);
    let tmp = document.getElementById("template")?.innerHTML;
    let objTmp = combine.message;
    if (objTmp?.length > 0) {
      objTmp = [...combine.message];
    } else {
      objTmp = [];
    }
    let obj = objTmp;
    const newData = [...obj];
    newData.push(tmp);
    setMessages(newData);
  };

  return (
    <DashboardLayout pageTitle="Input">
      <div className="result-wrapper">
        <div>
          <BackNavigation />
          <div style={{ marginTop: "16px", fontSize: "14px" }} id="template">
            {/* {templateChat.filter((e) => e.id === number)} */}
            {selectedMessages && (
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedMessages?.text,
                }}
              />
            )}
          </div>
        </div>
        <div style={{ marginBottom: "16px" }} className="btn-wrapper">
          {selectedMessages && (
            <CopyToClipboard text={selectedMessages?.text} onCopy={handleCopy}>
              <button className="btn main-screen__button">Salin</button>
            </CopyToClipboard>
          )}

          <button className="btn" onClick={handleSave}>
            Simpan
          </button>
        </div>
        {popup && <div className="popup-show">{textPopup}</div>}
      </div>
    </DashboardLayout>
  );
}
