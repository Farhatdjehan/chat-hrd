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
  const [popup, setPopup]: any = useState();
  const [textPopup, setTextPopup]: any = useState();
  const [combine, setCombine]: any = useState();
  const router = useRouter();

  const templateChat = [
    {
      id: 1,
      title: "Mengirim Email Lamaran ke HRD",
      text: `Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.

      Perkenalkan saya ${combine?.nama}. Sehubungan dengan informasi lowongan kerja yang saya dapatkan melalui ${combine?.source}, dengan ini saya ingin melamar pekerjaan sebagai ${combine?.divisi} di ${combine?.perusahaan}.
      
      Saya memiliki pengalaman pekerjaan sebagai ${combine?.divisi} selama ${combine?.experience} di perusahaan ${combine?.former_company}. Dengan pengalaman ini saya yakin skill dan pengalaman yang saya dapatkan dapat berkontribusi di ${combine?.perusahaan}.
      
      Berikut saya lampirkan CV dan Portofolio saya sebagai bahan pertimbangan. Looking forward to hearing from you.
      Best Regards
      ${combine?.nama}
      
      Kontak : ${combine?.telepon}`,
    },
    {
      id: 2,
      title: "Ketersediaan Lowongan Pekerjaan",
      text: `Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
      
      Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
      
      Terima kasih`,
    },
    {
      id: 3,
      title: "Email untuk follow up hasil interview",
      text: `Selamat siang ${combine?.nama_hrd}.
      
      Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
      
      Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan} .
      
      Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
      
      Salam,
      ${combine?.nama}
      No. Wa: ${combine?.telepon}`,
    },
    {
      id: 4,
      title: "Evaluasi ke HRD dari hasil interview",
      text: `Selamat siang ${combine?.nama_hrd}
      
      Terima kasih atas informasi tentang proses perekrutan saya di posisi ${combine?.divisi}.
      
      Saya ingin ucapkan terima kasih banyak atas kesempatan yang diberikan oleh ${combine?.perusahaan} walaupun saya tidak terpilih menjadi ${combine?.divisi}. Proses interview yang saya lewati juga berkesan karena saya mendapatkan ilmu baru seputar ${combine?.divisi}.
      
      Jika berkenan, saya ingin meminta feedback terkait dengan apa yang bisa saya perbaiki baik dari lamaran maupun interview agar jadi lebih baik kedepannya. Feedback yang Bapak/Ibu berikan akan berguna dan membantu saya dalam proses mencari pekerjaan.
      
      Sekali lagi saya ucapkan terima kasih. Saya harap dapat bekerja sama di waktu yang akan datang.
      
      Salam,
      ${combine?.nama}
      No. Wa: ${combine?.telepon}`,
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
    let getData = getCookie("data");
    if (getData !== undefined) {
      let tmpGetData = JSON.parse(getData);
      setCombine(tmpGetData);
    }
  }, []);

  useEffect(() => {
    console.log(combine);
  }, [combine]);

  useEffect(() => {
    if (popup) {
      setCookie("data", JSON.stringify(combine), 14);
      if (combine?.message) {
        window?.ReactNativeWebView?.postMessage(JSON.stringify(combine));
      }
    }
  }, [popup, combine]);

  useEffect(() => {
    setSelectedMessages(templateChat.filter((e) => e.id === number));
  }, [number]);

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
