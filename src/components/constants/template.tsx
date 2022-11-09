// import { useEffect, useState } from "react";
import { getCookie } from "../common/utils";

// const [final, setfinal]: any = useState();
// let resultFinal;
// useEffect(() => {
//   let tmp = getCookie("data");
//   if (tmp !== undefined) {
//     resultFinal = JSON.parse(tmp);
//     setfinal(resultFinal);
//   }
// }, []);

let tmp = getCookie("data");
let final;
if (tmp) {
  final = JSON.parse(tmp);
}

export const templateChat = [
  {
    id: 1,
    type: "chat-hrd",
    template: [
      {
        id: 1,
        title: "Mengirim Email Lamaran",
      },
      {
        id: 2,
        title: "Ketersediaan Lowongan Kerja",
      },
      {
        id: 3,
        title: "Follow Up Hasil Interview",
      },
      {
        id: 4,
        title: "Evaluasi Hasil Interview",
      },
      {
        id: 5,
        title: "Mengundurkan Diri",
      },
      {
        id: 6,
        title: "Pengajuan Cuti",
      },
      {
        id: 7,
        title: "Izin Berhalangan Masuk",
      },
    ],
  },
  {
    id: 2,
    type: "chat-pacar",
    template: [
      {
        id: 1,
        title: "Ajakan Main",
      },
      {
        id: 2,
        title: "Nanya Keseharian",
      },
      {
        id: 3,
        title: "Truth or Dare",
      },
      {
        id: 5,
        title: "Ucapan Romantis",
      },
    ],
  },
  {
    id: 3,
    type: "chat-cewek-stranger",
    template: [
      {
        id: 1,
        title: "Ajakan Kenalan",
      },
      {
        id: 2,
        title: "Diskusi Ringan",
      },
      {
        id: 3,
        title: "Ajakan Hangout",
      },
    ],
  },
  {
    id: 4,
    type: "chat-cowok-stranger",
    template: [
      {
        id: 1,
        title: "Ajakan Kenalan",
      },
      {
        id: 2,
        title: "Diskusi Ringan",
      },
      {
        id: 3,
        title: "Ajakan Hangout",
      },
    ],
  },
  {
    id: 5,
    type: "chat-calon-mertua",
    template: [
      {
        id: 1,
        title: "Izin Ajak Keluar Anaknya",
      },
      {
        id: 2,
        title: "Nanya Kabar",
      },
      {
        id: 3,
        title: "Ucapan Spesial",
      },
    ],
  },
  {
    id: 6,
    type: "chat-atasan",
    template: [
      {
        id: 1,
        title: "Izin Berhalangan Masuk",
      },
      {
        id: 2,
        title: "Ucapan Terima Kasih",
      },
    ],
  },
  {
    id: 7,
    type: "chat-guru",
    template: [
      {
        id: 1,
        title: "Izin Berhalangan Masuk",
      },
      {
        id: 2,
        title: "Ucapan Terima Kasih",
      },
      {
        id: 3,
        title: "Bertanya Sesuatu",
      },
    ],
  },
];
