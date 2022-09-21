import { getCookie } from "../common/utils";

let dataUser = getCookie("data");
let parsingData;
if (dataUser) {
  parsingData = JSON.parse(dataUser);
}

export const templateChat = [
  {
    id: 1,
    title: "Ngirim Email Lamaran ke HRD",
    text: `Dengan hormat Bapak/Ibu HRD Perusahaan ${parsingData?.perusahaan}. <br/><br/>Perkenalkan saya ${parsingData?.nama}. Sehubungan dengan informasi lowongan kerja yang saya dapatkan melalui ${parsingData?.source}, dengan ini saya ingin melamar pekerjaan sebagai ${parsingData?.divisi} di ${parsingData?.perusahaan}.<br/><br/> Saya memiliki pengalaman pekerjaan sebagai ${parsingData?.divisi} selama ${parsingData?.experience} di perusahaan ${parsingData?.former_company}. Dengan pengalaman ini saya yakin skill dan pengalaman yang saya dapatkan dapat berkontribusi di ${parsingData?.perusahaan}.<br/><br/> Berikut saya lampirkan CV dan Portofolio saya sebagai bahan pertimbangan. Looking forward to hearing from you.<br/><br/>Best Regards<br/>${parsingData?.nama}<br/><br/>Kontak : ${parsingData?.telepon}`,
  },
  {
    id: 2,
    title: "Menanyakan Ketersediaan Lowongan Pekerjaan",
    text: `Selamat pagi Bapak/Ibu HRD ${parsingData?.perusahaan}.<br/><br/> Perkenalkan saya ${parsingData?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${parsingData?.source}. Saya ingin melamar sebagai ${parsingData?.divisi} di ${parsingData?.perusahaan}. Apakah lowongan masih tersedia?<br/><br/>Terima kasih`,
  },
  {
    id: 3,
    title: "Email untuk follow up hasil interview",
    text: `Selamat siang ${parsingData?.nama_hrd}.<br/><br/>Nama saya ${parsingData?.nama}, salah satu kandidat ${parsingData?.divisi} di ${parsingData?.perusahaan} yang telah melakukan interview di tanggal ${parsingData?.tanggal}.<br/><br/> Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${parsingData?.divisi} di ${parsingData?.perusahaan} .<br/><br/> Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${parsingData?.perusahaan}. Terima kasih atas pertimbangannya<br/><br/>Salam,<br/>${parsingData?.nama}<br/>No. Wa: ${parsingData?.telepon}`,
  },
  {
    id: 4,
    title: "Meminta evaluasi ke HRD dari hasil interview",
    text: `Selamat siang ${parsingData?.nama_hrd}<br/><br/> Terima kasih atas informasi tentang proses perekrutan saya di posisi ${parsingData?.divisi} .<br/><br/>Saya ingin ucapkan terima kasih banyak atas kesempatan yang diberikan oleh ${parsingData?.perusahaan} walaupun saya tidak terpilih menjadi ${parsingData?.divisi}. Proses interview yang saya lewati juga berkesan karena saya mendapatkan ilmu baru seputar ${parsingData?.divisi}.<br/><br/> Jika berkenan, saya ingin meminta feedback terkait dengan apa yang bisa saya perbaiki baik dari lamaran maupun interview agar jadi lebih baik kedepannya. Feedback yang Bapak/Ibu berikan akan berguna dan membantu saya dalam proses mencari pekerjaan<br/><br/>Sekali lagi saya ucapkan terima kasih. Saya harap dapat bekerja sama di waktu yang akan datang.<br/><br/>Salam,<br/>${parsingData?.nama}<br/>No. Wa: ${parsingData?.telepon}`,
  },
];
