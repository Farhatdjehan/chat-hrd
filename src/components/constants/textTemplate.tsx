export function textTemplate(combine: any) {
  let template = [
    {
      id: 1,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
          Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
            
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
          text: `
          Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
          
          Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
          
          Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
          Selamat siang ${combine?.nama_hrd}.
          
          Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
          
          Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
          
          Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
          
          Salam,
          ${combine?.nama}
          No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
          Selamat siang ${combine?.nama_hrd}
          
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
          text: `
          ${combine?.ttl}
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
          text: `
          ${combine?.ttl}
          Perihal : Permohonan cuti ${combine?.jenis_cuti}
          
          Yth,
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
          text: `
          Kepada Ibu/Bapak ${combine?.nama_hrd},
          
          Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
          
          Tanggal : ${combine?.tanggal}
          Nama    : ${combine?.nama}
          Jabatan : ${combine?.jabatan}
          
          Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
          
          
          Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 2,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 3,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 4,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 5,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 6,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
    {
      id: 7,
      input: [
        {
          id: 1,
          title: "Mengirim Email Lamaran ke HRD",
          text: `
            Dengan hormat Bapak/Ibu HRD Perusahaan ${combine?.perusahaan}.
              
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
          text: `
            Selamat pagi Bapak/Ibu HRD ${combine?.perusahaan}.
            
            Perkenalkan saya ${combine?.nama}, saya mendapat nomer Bapak/Ibu melalui lowongan pekerjaan di ${combine?.source}. Saya ingin melamar sebagai ${combine?.divisi} di ${combine?.perusahaan}. Apakah lowongan masih tersedia?
            
            Terima kasih`,
        },
        {
          id: 3,
          title: "Email untuk follow up hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}.
            
            Nama saya ${combine?.nama}, salah satu kandidat ${combine?.divisi} di ${combine?.perusahaan} yang telah melakukan interview di tanggal ${combine?.tanggal}.
            
            Sebelumnya saya mau berterima kasih atas kesempatan yang diberikan kepada saya. Saya mengirimkan email ini untuk menanyakan bagaimana kelanjutan dari proses rekrutmen saya posisi ${combine?.divisi} di ${combine?.perusahaan}.
            
            Saya berharap untuk dapat bergabung dan tumbuh bersama dengan ${combine?.perusahaan}. Terima kasih atas pertimbangannya
            
            Salam,
            ${combine?.nama}
            No. Wa: ${combine?.telepon}`,
        },
        {
          id: 4,
          title: "Evaluasi ke HRD dari hasil interview",
          text: `
            Selamat siang ${combine?.nama_hrd}
            
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
          text: `
            ${combine?.ttl}
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
          text: `
            ${combine?.ttl}
            Perihal : Permohonan cuti ${combine?.jenis_cuti}
            
            Yth,
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
          text: `
            Kepada Ibu/Bapak ${combine?.nama_hrd},
            
            Selamat pagi. Semoga Bapak/Ibu dalam keadaan sehat selalu. Saya ingin menyampaikan informasi bahwa hari ini:
            
            Tanggal : ${combine?.tanggal}
            Nama    : ${combine?.nama}
            Jabatan : ${combine?.jabatan}
            
            Sedang tidak bisa masuk ke kantor di karenakan ${combine?.reason}. Saya berharap Bapak/Ibu bisa memakluminya. Selama izin kerja ini, saya sudah menghubungi rekan kerja saya atas nama ${combine?.refrence_friend} untuk menyelesaikan tugas kantor saya sementara waktu.
            
            
            Demikian informasi ini, saya ucapkan terima kasih.`,
        },
      ],
    },
  ];
  return template;
}
