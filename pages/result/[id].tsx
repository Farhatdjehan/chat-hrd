// @ts-nocheck
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../src/components/common/utils";
import DashboardLayout from "../../src/components/DashboardLayout";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./../../styles/pages/lastPages.module.scss";
import BackNavigation from "../../src/components/backNavigation";

export default function Result() {
  const [data, setData]: any = useState();
  const [number, setNumber]: any = useState();
  const [copied, setCopied]: any = useState();
  const [messages, setMessages]: any = useState([]);
  const [selectedMessages, setSelectedMessages]: any = useState();
  const [dataUser, setDataUser]: any = useState();
  const [popup, setPopup]: any = useState();
  const [textPopup, setTextPopup]: any = useState();
  const router = useRouter();

  useEffect(() => {
    let resultFinal;
    let tmp = getCookie("data");
    if (tmp) {
      resultFinal = JSON.parse(tmp);
      setDataUser(resultFinal);
    }
  }, []);

  const templateChat = [
    {
      id: 1,
      title: "Mengirim Email Lamaran ke HRD",
      text: `Dengan hormat Bapak/Ibu HRD Perusahaan ${dataUser?.perusahaan}. <br/><br/>Perkenalkan saya ${dataUser?.nama}. Sehubungan dengan informasi lowongan kerja yang saya dapatkan melalui ${dataUser?.source}, dengan ini saya ingin melamar pekerjaan sebagai ${dataUser?.divisi} di ${dataUser?.perusahaan}.<br/><br/> Saya memiliki pengalaman pekerjaan sebagai ${dataUser?.divisi} selama ${dataUser?.experience} di perusahaan ${dataUser?.former_company}. Dengan pengalaman ini saya yakin skill dan pengalaman yang saya dapatkan dapat berkontribusi di ${dataUser?.perusahaan}.<br/><br/> Berikut saya lampirkan CV dan Portofolio saya sebagai bahan pertimbangan. Looking forward to hearing from you.<br/><br/>Best Regards<br/>${dataUser?.nama}<br/><br/>Kontak : ${dataUser?.telepon}`,
    },
    {
      id: 2,
      title: "Ketersediaan Lowongan Pekerjaan",
      text: `Selamat pagi Bapak/Ibu HRD ${dataUser?.perusahaan}.<br/><br/> Perkenalkan saya ${dataUser?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${dataUser?.source}. Saya ingin melamar sebagai ${dataUser?.divisi} di ${dataUser?.perusahaan}. Apakah lowongan masih tersedia?<br/><br/>Terima kasih`,
    },
    {
      id: 3,
      title: "Email untuk follow up hasil interview",
      text: `Selamat siang ${dataUser?.nama_hrd}.<br/><br/>Nama saya ${dataUser?.nama}, salah satu kandidat ${dataUser?.divisi} di ${dataUser?.perusahaan} yang telah melakukan interview di tanggal ${dataUser?.tanggal}.<br/><br/> Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${dataUser?.divisi} di ${dataUser?.perusahaan} .<br/><br/> Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${dataUser?.perusahaan}. Terima kasih atas pertimbangannya<br/><br/>Salam,<br/>${dataUser?.nama}<br/>No. Wa: ${dataUser?.telepon}`,
    },
    {
      id: 4,
      title: "Evaluasi ke HRD dari hasil interview",
      text: `Selamat siang ${dataUser?.nama_hrd}<br/><br/> Terima kasih atas informasi tentang proses perekrutan saya di posisi ${dataUser?.divisi} .<br/><br/>Saya ingin ucapkan terima kasih banyak atas kesempatan yang diberikan oleh ${dataUser?.perusahaan} walaupun saya tidak terpilih menjadi ${dataUser?.divisi}. Proses interview yang saya lewati juga berkesan karena saya mendapatkan ilmu baru seputar ${dataUser?.divisi}.<br/><br/> Jika berkenan, saya ingin meminta feedback terkait dengan apa yang bisa saya perbaiki baik dari lamaran maupun interview agar jadi lebih baik kedepannya. Feedback yang Bapak/Ibu berikan akan berguna dan membantu saya dalam proses mencari pekerjaan<br/><br/>Sekali lagi saya ucapkan terima kasih. Saya harap dapat bekerja sama di waktu yang akan datang.<br/><br/>Salam,<br/>${dataUser?.nama}<br/>No. Wa: ${dataUser?.telepon}`,
    },
  ];

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

  useEffect(() => {
    // console.log(messages);
    if (messages?.length > 0) {
      setCookie("messages", JSON.stringify(messages), 14);
    }
  }, [messages]);

  useEffect(() => {
    let getData = getCookie("messages");
    if (getData) {
      let tmpGetData = JSON.parse(getData);
      setMessages(tmpGetData);
    }
  }, []);

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

  const handleSave = () => {
    setTextPopup("Berhasil Menyimpan");
    setPopup(true);
    let tmp = document.getElementById("template")?.innerHTML;
    const newData = [...messages];
    // console.log(tmp);
    newData.push(tmp);
    setMessages(newData);
    window?.ReactNativeWebView?.postMessage("Hei");

    // window.postMessage(
    //   JSON.stringify({ message: "your message", data: "your data" })
    // )
  };

  const sendDataToReactNativeApp = async () => {
    window.ReactNativeWebView.postMessage("DATA SEND TO RN APP");
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
                  __html: selectedMessages[0]?.text,
                }}
              />
            )}
          </div>
        </div>
        <div style={{ marginBottom: "16px" }} className="btn-wrapper">
          {selectedMessages && (
            <CopyToClipboard
              text={selectedMessages[0]?.text.replace(/<[^>]+>/g, "")}
              onCopy={handleCopy}
            >
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
