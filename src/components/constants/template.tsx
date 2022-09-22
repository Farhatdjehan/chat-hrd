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
    title: "Ngirim Email Lamaran ke HRD",
  },
  {
    id: 2,
    title: "Menanyakan Ketersediaan Lowongan Pekerjaan",
  },
  {
    id: 3,
    title: "Email untuk follow up hasil interview",
  },
  {
    id: 4,
    title: "Meminta evaluasi ke HRD dari hasil interview",
  },
];
