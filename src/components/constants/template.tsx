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
];
