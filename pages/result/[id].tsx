import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../src/components/common/utils";
import { templateChat } from "../../src/components/constants/template";
import DashboardLayout from "../../src/components/DashboardLayout";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Result() {
  const [data, setData]: any = useState();
  const [number, setNumber]: any = useState();
  const [copied, setCopied]: any = useState();
  const [messages, setMessages]: any = useState([]);
  const [selectedMessages, setSelectedMessages]: any = useState();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id !== undefined) {
      let integerId = router?.query?.id;
      if (integerId !== undefined) {
        setNumber(Number(integerId));
      }
    }
  }, [router]);

  useEffect(() => {
    setSelectedMessages(templateChat.filter((e) => e.id === number));
  }, [number]);

  useEffect(() => {}, [selectedMessages]);

  useEffect(() => {
    // if (getCookie("data") !== "") {
    //   let tmp = getCookie("data");
    //   if (tmp !== undefined) {
    //     setData(JSON.parse(tmp));
    //   }
    // }
    // if (getCookie("messages") !== "") {
    //   let tmp = getCookie("messages");
    //   if (tmp !== undefined) {
    //     setMessages(JSON.parse(tmp));
    //   }
    // }
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
        <div>
          <button className="btn" onClick={handleBack}>
            {"<"} Kembali
          </button>
          <div style={{ marginTop: "16px" }} id="template">
            {/* {templateChat.filter((e) => e.id === number)} */}
            {selectedMessages && (
              <div
                dangerouslySetInnerHTML={{ __html: selectedMessages[0]?.text }}
              />
            )}
          </div>
        </div>
        <div style={{ marginBottom: "16px" }} className="btn-wrapper">
          {selectedMessages && (
            <CopyToClipboard
              text={selectedMessages[0]?.text.replace(/<[^>]+>/g, "")}
              onCopy={() => setCopied(true)}
            >
              <button className="btn main-screen__button">Salin</button>
            </CopyToClipboard>
          )}

          <button className="btn" onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
