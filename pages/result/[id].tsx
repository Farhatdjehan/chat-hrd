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
    {
      id: 5,
      title: "Mengundurkan Diri",
      text: `${combine?.ttl}
      Kepada Yth,
      HRD ${combine?.perusahaan}, ${combine?.nama_hrd}
      
      Dengan hormat,
      
      Yang bertanda tangan di bawah ini:
      
      NIK     : ${combine?.NIK}
      Nama    : ${combine?.nama}
      Alamat  : ${combine?.address}
      Jabatan : ${combine?.jabatan}
      
      Melalui surat ini, saya mengajukan permohonan untuk mengundurkan diri dari jabatan ${combine?.divisi_bekerja} di perusahaan ${combine?.perusahaan} terhitung pada tanggal ${combine?.end_date}.
      
      Saya memutuskan untuk tidak lagi menjadi bagian dari perusahaan ${combine?.perusahaan}. Tidak lupa saya ucapkan mohon maaf atas segala kesalahan yang mungkin sempat saya lakukan dan meninggalkan kesan buruk di hati Bapak/Ibu selama bekerja di ${combine?.perusahaan}.
      
      Dengan rasa syukur saya ucapkan berterima kasih kepada Bapak/Ibu karena sudah memberikan saya kesempatan untuk bekerja, belajar, dan berkembang di perusahaan ${combine?.perusahaan} selama ${combine?.experience_work}. Selain itu, saya juga ingin mengucapkan terima kasih kepada rekan kerja yang telah banyak kerjasama untuk mencapai target perusahaan.
      
      Demikian surat ini saya buat tanpa paksaan dari orang lain, semoga dapat diterima oleh Bapak/Ibu.
      
      Hormat saya,
      
       
      
      (${combine?.nama})`,
    },
    {
      id: 6,
      title: "Pengajuan Cuti",
      text: `${combine?.ttl}
      Perihal : Permohonan cuti ${combine?.jenis_cuti}
      
      Kepada Yth,
      Kepala HRD ${combine?.perusahaan}, ${combine?.nama_hrd}
      Di tempat
      
      Dengan hormat,
      Yang bertanda tangan di bawah ini:
      NIK     : ${combine?.NIK}
      Nama    : ${combine?.nama}
      Divisi  : ${combine?.divisi_bekerja}
      Jabatan : ${combine?.jabatan}

      
      Bermaksud mengajukan cuti tahunan selama ${combine?.lama_cuti} hari, terhitung mulai tanggal ${combine?.start_cuti}
      sampai dengan tanggal ${combine?.end_cuti}.
      
      Demikian surat permohonan cuti ini saya ajukan. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.
      
      Hormat saya,
      


      ${combine?.nama}`,
    },
    {
      id: 7,
      title: "Izin Berhalangan Masuk",
      text: `Kepada Ibu/Bapak ${combine?.nama_hrd},
      
      Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:

      Tanggal : ${combine?.tanggal}
      
      Nama    : ${combine?.nama}
      
      Jabatan : ${combine?.jabatan}
      
      Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu. 
      
      Demikian informasi ini, saya ucapkan terima kasih.`,
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
