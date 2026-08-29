// Database lengkap 10 Materi TBM yang unik, spesifik, dan berbeda untuk masing-masing departemen (Durasi ideal ~3 menit)
// Fungsi helper untuk menghasilkan 10 materi custom per departemen dengan APD yang spesifik
function generate10MateriCustom(deptCode, deptName, topics) {
    return topics.map((topic, index) => {
        let apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]; // Default aman
        
        // Penyesuaian APD spesifik berdasarkan Departemen / Kode
        if (deptCode === "YF") {
            // Yard Facility & Material
            apdList = index === 3 ? ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"] : 
                                    ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Anti Potong"];
        } else if (deptCode === "HPE") {
            // Elektrik & LOTO
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Insulasi (VDE)", "Face Shield Anti Arash Flash"];
        } else if (deptCode === "OHE") {
            // Operator Alat Berat
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Ear Plug", "Sarung Tangan"];
        } else if (deptCode === "CIVIL") {
            // Konstruksi Sipil
            apdList = index === 2 || index === 3 ? ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Karet / Waterproof", "Masker Debu"] :
                                                  ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan", "Masker Debu"];
        } else if (deptCode === "HPM") {
            // Mekanik & Mesin
            apdList = index === 5 ? ["Safety Helmet", "Safety Vest", "Safety Shoes", "Face Shield", "Kacamata Safety", "Sarung Tangan Kulit", "Ear Plug"] :
                                    ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Mekanik", "Coverall / Wearpack"];
        } else if (deptCode === "HPP") {
            // Piping / Pipa
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Anti Potong", "Face Shield"];
        } else if (deptCode === "TANK") {
            // Ruang Terbatas (Tank Cleaning)
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Gas Detector", "Full Body Harness", "SCBA / Respirator Tabung"];
        } else if (deptCode === "HPFW") {
            // Fitter & Welder
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kedok Las (Welding Mask)", "Apron Kulit", "Sarung Tangan Las (Welding Gloves)", "Masker Asap Las"];
        } else if (deptCode === "HPB") {
            // Painting & Blasting
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Face Respirator / Air Filter", "Chemical Suit / Coverall", "Sarung Tangan Kimia"];
        } else if (deptCode === "BME") {
            // Scaffolding & Ketinggian
            apdList = ["Safety Helmet", "Safety Vest", "Safety Shoes (Anti Slip)", "Full Body Harness (Double Lanyard)", "Sarung Tangan Grip", "Kacamata Safety"];
        }

        return {
            id: index + 1,
            title: topic,
            opening: `Selamat pagi/siang rekan-rekan ${deptName}. Terima kasih atas kehadirannya di TBM hari ini. Mari kita langsung fokus pada pembahasan ${topic} demi keselamatan dan kelancaran kerja kita bersama.`,
            points: [
                `<strong>Pemeriksaan Awal & Risiko:</strong> Pastikan seluruh perizinan, JSA, dan kondisi area kerja untuk ${topic.toLowerCase()} telah dicek dan dinyatakan aman sebelum mulai.`,
                `<strong>Kepatuhan Standar Kerja:</strong> Ikuti SOP teknis yang berlaku, gunakan metode kerja yang benar, dan jangan mengambil jalan pintas (short cut) yang membahayakan.`,
                `<strong>Penggunaan APD Spesifik:</strong> Wajib mengenakan kelengkapan APD yang sesuai dengan potensi bahaya spesifik pada aktivitas ${topic.toLowerCase()} ini tanpa terkecuali.`,
                `<strong>Koordinasi Tim & Pengawasan:</strong> Selalu bangun komunikasi dua arah yang baik antar rekan kerja serta patuhi instruksi pengawas atau petugas safety di lapangan.`
            ],
            closing: `Ingat prinsip kita di ${deptName}: Utamakan keselamatan dan kesehatan kerja di atas segalanya. Gunakan hak STOP WORK jika menemukan kondisi tidak aman.\n\nSebelum kita bubar dan mulai beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.`,
            apd: apdList
        };
    });
}

const databaseTBM = {
    "HES": [
        {
            id: 1,
            title: "Keselamatan Alat Berat (HES)",
            opening: "Selamat pagi/siang rekan-rekan. Terima kasih atas kehadirannya di TBM hari ini. Mari kita langsung fokus pada keselamatan operasional alat berat di seluruh area kerja kita demi keselamatan bersama.",
            points: [
                "<strong>Wajib P2H:</strong> Operator wajib memeriksa kondisi unit (rem, klakson, alarm mundur, hidrolik, dan lampu) sebelum mesin dinyalakan. Jika ada kerusakan, jangan dipaksakan operasi.",
                "<strong>Waspada Blind Spot (Titik Buta):</strong> Pekerja dilarang berdiri di dalam radius swing atau di jalur mundur unit di mana pun areanya. Wajib kontak mata dengan operator atau ikuti arahan signman/rigger sebelum mendekati alat berat.",
                "<strong>Jarak Aman & Utilitas:</strong> Selalu jaga jarak aman dari tebing, tanah labur/tidak rata, serta kabel listrik udara (overhead power lines) di setiap titik lokasi proyek.",
                "<strong>Prosedur Parkir:</strong> Saat istirahat atau selesai bekerja di area mana pun, turunkan bucket/blade ke tanah, aktifkan rem tangan, dan ganjal ban jika berada di kontur miring."
            ],
            closing: "Ingat prinsip kita: \"Make Eye Contact & Keep Your Distance\". Jangan pernah berasumsi operator melihat posisi Anda. Jika melihat kondisi tidak aman di area mana pun, gunakan hak STOP WORK Anda.\n\nSebelum kita bubar dan menuju unit atau area masing-masing, mari kita berdoa menurut agama dan kepercayaan kita masing-masing, agar seluruh aktivitas hari ini diberi kelancaran dan kita semua pulang dengan selamat. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        },
        {
            id: 2,
            title: "Operasi Pengangkatan Beban (Lifting Operation)",
            opening: "Selamat pagi/siang rekan-rekan. Terima kasih atas kehadirannya. Hari ini kita fokus membahas keselamatan khusus untuk aktivitas pengangkatan beban (lifting) di seluruh area kerja.",
            points: [
                "<strong>Inspeksi Alat & Alat Bantu Angkat:</strong> Pastikan Crane, sling, shackle, dan kawat seling layak pakai serta memiliki sertifikasi/KIR yang masih berlaku.",
                "<strong>Kestabilan Outrigger:</strong> Pastikan kaki outrigger terentang penuh di atas ground pad (ganjalan yang kokoh dan rata), dilarang keras di atas tanah yang labur atau amblas.",
                "<strong>Dilarang Berada di Bawah Beban Gantung:</strong> Seluruh pekerja harap berdiri atau melintas di bawah beban yang sedang diangkat (under-hook).",
                "<strong>Komunikasi Satu Pintu:</strong> Ikuti instruksi hanya dari satu Rigger/Signalman yang berwenang menggunakan sandi tangan standar agar tidak ada salah paham."
            ],
            closing: "Ingat prinsip kita: Jangan pernah berdiri di bawah beban gantung! Pastikan komunikasi jelas dan outrigger aman. Gunakan hak STOP WORK jika ada ketidaksesuaian.\nSebelum kita bubar, mari kita berdoa menurut agama dan kepercayaan kita masing-masing, agar proses pengangkatan hari ini aman, terkendali, dan selamat sampai rumah. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 3,
            title: "Kondisi Lingkungan Ekstrem & Utilitas Lapangan",
            opening: "Selamat pagi/siang rekan-rekan. Terima kasih kehadirannya. Fokus TBM kita kali ini adalah menghadapi kondisi lingkungan kerja ekstrem dan pencegahan kontak dengan utilitas di seluruh area kerja.",
            points: [
                "<strong>Waspada Utilitas Atas & Bawah:</strong> Jaga jarak aman minimal dari kabel listrik udara (overhead power lines) dan pastikan tidak ada jalur utilitas bawah tanah yang tertekan beban berat.",
                "<strong>Kondisi Jalan & Cuaca Ekstrem:</strong> Kurangi kecepatan unit saat jalan licin, berlumpur, atau ketika hujan/debu tebal yang menurunkan jarak pandang (visibility).",
                "<strong>Kestabilan Tepi Galian / Tebing:</strong> Dilarang memarkir atau mengoperasikan alat berat terlalu dekat dengan bibir galian atau tebing yang rawan longsor.",
                "<strong>Penerangan & Lampu Isyarat:</strong> Pastikan lampu kerja, rotator, dan alarm mundur berfungsi optimal terutama saat cuaca mendung, gelap, atau shift malam."
            ],
            closing: "Ingat prinsip kita: Jangan paksakan beroperasi jika jarak pandang buruk atau area tidak stabil. Utamakan keselamatan dan gunakan hak STOP WORK Anda.\nSebelum kita bubar, mari kita berdoa menurut agama dan kepercayaan kita masing-masing, agar kita semua dilindungi dan selamat dalam bekerja hari ini. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Jas Hujan / Wearpack", "Kacamata Safety"]
        },
        {
            id: 4,
            title: "Housekeeping & Manajemen Material Lapangan",
            opening: "Selamat pagi/siang rekan-rekan HES. Pertemuan kita hari ini menekankan pentingnya kerapian area kerja serta penyimpanan material yang aman dari bahaya longsor tumpukan.",
            points: [
                "<strong>Bebas Hambatan Akses (Escape Route):</strong> Pastikan jalur evakuasi dan jalur jalan kaki (walkway) selalu bersih dari sisa material, kayu, atau kabel berantakan.",
                "<strong>Penyimpanan Material Bertumpuk:</strong> Tumpukan pipa, besi, atau plat baja wajib diganjal dan dikunci dengan aman agar tidak menggelinding atau roboh secara tiba-tiba.",
                "<strong>Pengelolaan Limbah B3:</strong> Segera buang majun terkontaminasi oli/minyak ke drum limbah B3 khusus, dilarang membuang sembarangan di area terbuka.",
                "<strong>Pencahayaan Area Material:</strong> Pastikan area penimbunan material memiliki penerangan yang cukup jika aktivitas dilakukan menjelang malam hari."
            ],
            closing: "Area kerja yang rapi adalah cerminan dari profesionalisme dan kepedulian kita terhadap keselamatan.\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Anti Potong"]
        },
        {
            id: 5,
            title: "Inspeksi Kelayakan APD & Alat Kerja Harian",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah memastikan seluruh alat pelindung diri (APD) dan perkakas tangan yang kita gunakan berada dalam kondisi prima dan layak pakai.",
            points: [
                "<strong>Pemeriksaan Fisik APD:</strong> Cek helm safety dari retak, pastikan tali dagu terpasang kencang, dan periksa sol sepatu safety apakah ada yang jebol atau terkelupas.",
                "<strong>Larangan APD Modifikasi:</strong> Dilarang memodifikasi APD standar perusahaan secara sembarangan yang dapat mengurangi fungsi perlindungannya.",
                "<strong>Kondisi Perkakas Manual:</strong> Jangan gunakan kunci pas yang aus, palu dengan gagang longgar, atau tang yang rusak karena memicu kecelakaan tangan terpeleset.",
                "<strong>Pelaporan Alat Rusak:</strong> Segera laporkan kepada pengawas jika menemukan alat kerja atau APD yang rusak untuk segera diganti baru."
            ],
            closing: "Ingat, APD adalah benteng pertahanan terakhir tubuh kita dari cedera fatal. Sayangi diri dan keluarga.\nMari berdoa bersama menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        },
        {
            id: 6,
            title: "Prosedur Keadaan Darurat & Evakuasi Lapangan",
            opening: "Selamat pagi/siang rekan-rekan HES. Di sesi TBM ini, kita akan mereview kembali langkah cepat dan tanggap saat menghadapi situasi darurat di area kerja kita.",
            points: [
                "<strong>Kenali Titik Kumpul (Assembly Point):</strong> Pastikan setiap pekerja mengetahui lokasi titik kumpul terdekat di area tempat mereka bertugas saat ini.",
                "<strong>Respon Bunyi Alarm Darurat:</strong> Jika mendengar sirene atau alarm darurat berbunyi, segera hentikan pekerjaan, matikan mesin, dan evakuasi dengan tenang tanpa panik.",
                "<strong>Nomor Darurat Penting:</strong> Hafalkan atau simpan nomor darurat klinik/tim tanggap darurat perusahaan di ponsel Anda untuk pelaporan cepat.",
                "<strong>Dilarang Kembali ke Lokasi:</strong> Jangan pernah kembali ke area insiden sebelum ada pengumuman resmi 'All Clear' dari tim Emergency Response Team (ERT)."
            ],
            closing: "Kesiapsiagaan menyelamatkan nyawa. Tetap tenang, tertib, dan ikuti instruksi petugas evakuasi.\nMari kita berdoa memohon perlindungan Yang Maha Kuasa agar dijauhkan dari segala musibah. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Ear Plug"]
        },
        {
            id: 7,
            title: "Ergonomi & Pencegahan Kelelahan Kerja (Fatigue)",
            opening: "Selamat pagi/siang rekan-rekan. Tubuh yang bugar adalah kunci keselamatan kerja. Hari ini kita membahas pencegahan kelelahan (fatigue) dan teknik ergonomi yang benar.",
            points: [
                "<strong>Manajemen Jam Istirahat:</strong> Manfaatkan waktu istirahat secukupnya, cukupi hidrasi tubuh dengan minum air putih agar tidak dehidrasi di lapangan terbuka.",
                "<strong>Teknik Mengangkat Beban Manual:</strong> Saat mengangkat barang berat, tekuk lutut dan jaga punggung tetap lurus, jangan membungkuk guna menghindari cedera pinggang (lower back pain).",
                "<strong>Waspada Gejala Mengantuk:</strong> Jika merasa sangat mengantuk saat bertugas atau mengemudi unit, segera laporkan ke pengawas untuk beristirahat sejenak.",
                "<strong>Peregangan Otot Berkala:</strong> Lakukan peregangan otot ringan sebelum memulai pekerjaan fisik berat untuk menghindari kram atau kaku otot."
            ],
            closing: "Kesehatan fisik adalah aset utama Anda dalam mencari nafkah untuk keluarga tercinta di rumah.\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 8,
            title: "Keselamatan Lalu Lintas & Kecepatan Kendaraan",
            opening: "Selamat pagi/siang rekan-rekan. Mobilitas kendaraan di area proyek sangat tinggi. Mari kita tingkatkan kedisiplinan berlalu lintas demi keselamatan bersama.",
            points: [
                "<strong>Patuhi Batas Kecepatan Maksimum:</strong> Selalu kendarai kendaraan sesuai batas kecepatan yang ditentukan di dalam area perusahaan (misal maks. 20-40 km/jam).",
                "<strong>Wajib Sabuk Pengaman (Seatbelt):</strong> Pengemudi dan seluruh penumpang wajib mengenakan sabuk pengaman selama kendaraan berjalan di area operasional.",
                "<strong>Larangan Penggunaan Ponsel:</strong> Dilarang keras mengoperasikan handphone atau menelepon tanpa handsfree saat mengemudikan kendaraan di area kerja.",
                "<strong>Prioritas Pejalan Kaki:</strong> Selalu berikan hak utama kepada pejalan kaki yang menyeberang jalan di area plant atau workshop."
            ],
            closing: "Ingat, keluarga menunggu kepulangan Anda di rumah. Utamakan keselamatan berlalu lintas di mana pun Anda berada.\nSebelum berangkat, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes"]
        },
        {
            id: 9,
            title: "Pengelolaan Bahan Kimia & Pencegahan Tumpahan",
            opening: "Selamat pagi/siang rekan-rekan HES. Topik TBM kali ini adalah penanganan aman bahan kimia serta tindakan cepat pencegahan pencemaran lingkungan kerja.",
            points: [
                "<strong>Pahami Lembar Data Keselamatan (MSDS/SDS):</strong> Kenali sifat bahan kimia yang Anda tangani, apakah mudah terbakar, beracun, atau korosif.",
                "<strong>Penggunaan APD Khusus Kimia:</strong> Wajib mengenakan sarung tangan karet/nitril, apron tahan kimia, dan pelindung muka (face shield) saat menuang bahan kimia.",
                "<strong>Penyediaan Spill Kit:</strong> Pastikan spill kit (pasir penyerap, kain majun khusus tumpahan) selalu tersedia di dekat lokasi penyimpanan bahan kimia cair.",
                "<strong>Larangan Merokok di Dekat Bahan Mudah Terbakar:</strong> Dilarang keras menyalakan api atau merokok di sekitar area penyimpanan bahan kimia dan BBM."
            ],
            closing: "Lindungi diri dari paparan bahan kimia berbahaya dan jaga kelestarian lingkungan kerja kita.\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Shoes", "Sarung Tangan Kimia", "Face Shield", "Chemical Apron"]
        },
        {
            id: 10,
            title: "Penerapan Hak Tolak Kerja (Stop Work Authority)",
            opening: "Selamat pagi/siang rekan-rekan. Sesi TBM penutup ini mengingatkan kita semua tentang kekuatan dan kewajiban moral menggunakan hak tolak kerja (Stop Work Authority).",
            points: [
                "<strong>Definisi SWA (Stop Work Authority):</strong> Setiap pekerja memiliki hak mutlak dan kewajiban untuk menghentikan pekerjaan jika melihat kondisi tidak aman (Unsafe Condition) atau tindakan tidak aman (Unsafe Action).",
                "<strong>Tanpa Rasa Takut Sanksi:</strong> Perusahaan menjamin perlindungan penuh bagi pekerja yang menghentikan pekerjaan demi mencegah potensi kecelakaan kerja.",
                "<strong>Koordinasi Perbaikan:</strong> Segera laporkan temuan bahaya tersebut kepada pengawas atau Safety Officer agar dapat langsung dilakukan tindakan perbaikan (corrective action).",
                "<strong>Lanjutkan Setelah Aman:</strong> Pekerjaan hanya boleh dilanjutkan kembali apabila kondisi bahaya telah sepenuhnya diatasi dan dinyatakan aman oleh pengawas terkait."
            ],
            closing: "Keselamatan Anda adalah tanggung jawab kita bersama. Jangan ragu berkata 'TIDAK' untuk pekerjaan yang tidak aman.\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        }
    ],
    "YF": [
        {
            id: 1,
            title: "Penataan Tata Letak Material (Yard Layout)",
            opening: "Selamat pagi/siang rekan-rekan Yard Facility & Material. Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada pengaturan tata letak material (yard layout) yang tertib demi kelancaran dan keselamatan operasional.",
            points: [
                "<strong>Zona Jalur Evakuasi & Akses Unit:</strong> Pastikan jalur utama (main road) dan jalur pejalan kaki di dalam yard tidak terhalang oleh tumpukan material lepas.",
                "<strong>Pemisahan Kategori Barang:</strong> Tempatkan material berat, material mudah terbakar, dan barang general pada zona terpisah sesuai klasifikasinya.",
                "<strong>Kestabilan Tumpukan:</strong> Batasi ketinggian tumpukan material agar tidak melebihi batas aman yang berisiko roboh menimpa pekerja.",
                "<strong>Pemasangan Rambu Batas:</strong> Periksa kembali ketersediaan rambu petunjuk zona dan batas aman tumpukan di setiap sudut yard."
            ],
            closing: "Ingat prinsip kita: Yard yang tertata rapi mencerminkan kualitas kerja yang aman. Gunakan hak STOP WORK jika melihat tumpukan yang membahayakan.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Anti Potong"]
        },
        {
            id: 2,
            title: "Keselamatan Bongkar Muat Barang Gudang",
            opening: "Selamat pagi/siang rekan-rekan YF. Pertemuan TBM hari ini membahas prosedur keselamatan kerja saat melakukan aktivitas bongkar muat barang di area gudang dan yard.",
            points: [
                "<strong>Penguncian Truk/Kendaraan:</strong> Pastikan truk dalam posisi rem tangan aktif (handbrake) dan roda diganjal sebelum proses bongkar muat dimulai.",
                "<strong>Komunikasi dengan Operator Crane/Forklift:</strong> Jaga jarak aman dari jangkauan garpu forklift atau hook crane selama proses angkat-muat berlangsung.",
                "<strong>Pemeriksaan Kapasitas Beban:</strong> Jangan pernah memuat atau menurunkan barang melebihi kapasitas angkat (Safe Working Load) alat yang digunakan.",
                "<strong>Penataan Posisi Juru Muat:</strong> Pekerja dilarang berdiri di atas bak truk yang sedang miring atau di jalur jatuhnya material."
            ],
            closing: "Waspada saat proses bongkar muat karena perpindahan barang berukuran besar memiliki risiko jepit yang tinggi.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 3,
            title: "Inspeksi Rak Penyimpanan & Pallet",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah pentingnya melakukan pengecekan berkala terhadap kondisi rak penyimpanan (racking) dan pallet di area gudang.",
            points: [
                "<strong>Cek Kerusakan Struktur Rak:</strong> Periksa tiang rak dan seling penguat dari benturan forklift atau tanda-tanda bengkok.",
                "<strong>Kelaikan Kondisi Pallet:</strong> Dilarang menggunakan pallet kayu yang lapuk, pecah, atau paku menonjol karena dapat merusak kemasan dan memicu jatuhnya barang.",
                "<strong>Pemeriksaan Beban Maksimal Rak:</strong> Patuhi label kapasitas beban maksimum pada setiap tingkat rak penyimpanan gudang.",
                "<strong>Pelaporan Kerusakan:</strong> Segera laporkan ke supervisor jika menemukan struktur rak yang goyah untuk segera dikosongkan dan diperbaiki."
            ],
            closing: "Pencegahan dini pada infrastruktur gudang menyelamatkan aset perusahaan dan nyawa kita.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        },
        {
            id: 4,
            title: "Manajemen Lalu Lintas Forklift di Yard",
            opening: "Selamat pagi/siang rekan-rekan YF. Mobilitas unit forklift di area yard cukup tinggi, mari kita tingkatkan kewaspadaan terhadap interaksi antara pejalan kaki dan unit bergerak.",
            points: [
                "<strong>Batas Kecepatan di Yard:</strong> Selalu patuhi batas kecepatan maksimum kendaraan/forklift di dalam area operasional yard (maksimal 10-20 km/jam).",
                "<strong>Prioritas Pejalan Kaki (Walkway):</strong> Operator forklift wajib membunyikan klakson di tikungan, sementara pejalan kaki wajib berjalan di jalur khusus (walkway).",
                "<strong>Fungsi Lampu & Alarm Mundur:</strong> Pastikan rotator, lampu kerja, dan alarm mundur forklift menyala dengan jelas sebelum unit dioperasikan.",
                "<strong>Larangan Penumpang Gelap:</strong> Dilarang keras menaikkan orang di atas garpu atau bodi forklift selain di kursi pengemudi resmi."
            ],
            closing: "Make Eye Contact! Pastikan pengemudi melihat keberadaan Anda sebelum melintas di sekitar jalur forklift.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 5,
            title: "Pencegahan Bahaya Material Longsor/Rubuh",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM kita hari ini adalah mengantisipasi bahaya longsor atau robohnya tumpukan material berat di area penyimpanan terbuka (open yard).",
            points: [
                "<strong>Pemasangan Ganjal Pengaman:</strong> Material pipa, besi profil, atau plat wajib diberi ganjal kayu dan stoppers yang kuat agar tidak bergeser.",
                "<strong>Metode Penumpukan Bersilang:</strong> Susun material secara stabil dengan teknik interlocking yang benar sesuai prosedur penyimpanan.",
                "<strong>Larangan Mengambil Material dari Bawah:</strong> Saat mengambil barang dari tumpukan, dilarang menarik dari bagian bawah yang dapat memicu longsoran tumpukan atas.",
                "<strong>Kondisi Tanah Pondasi Tumpukan:</strong> Pastikan dasar tanah tempat menaruh beban berat padat, rata, dan tidak mudah amblas saat musim hujan."
            ],
            closing: "Jangan anggap remeh tumpukan material. Kelalaian kecil dapat berakibat fatal.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Anti Potong", "Kacamata Safety"]
        },
        {
            id: 6,
            title: "Pengelolaan Scrap & Limbah Logam Yard",
            opening: "Selamat pagi/siang rekan-rekan YF. Kebersihan dan pengelolaan sisa material (scrap) di yard sangat penting untuk mencegah cedera tusuk atau goresan benda tajam.",
            points: [
                "<strong>Pemisahan Scrap Berdasarkan Jenis:</strong> Kumpulkan sisa potongan besi, kawat lashing, atau sisa kayu pada kontainer limbah khusus yang telah disediakan.",
                "<strong>Pembersihan Paku & Logam Tajam:</strong> Pastikan area sekitar pemotongan besi bersih dari sisa-sisa gerinda atau paku yang berisiko merusak ban kendaraan.",
                "<strong>Larangan Penumpukan Sembarangan:</strong> Jangan biarkan tumpukan scrap menutupi hidran air, jalur evakuasi, atau akses jalan utama.",
                "<strong>Penggunaan Sarung Tangan Sesuai:</strong> Selalu gunakan sarung tangan tahan potong saat mengangkat atau memindahkan material sisa logam."
            ],
            closing: "Lingkungan yard yang bersih bebas dari scrap tajam menciptakan kenyamanan kerja.\n\nSebelum mulai bekerja, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Anti Potong"]
        },
        {
            id: 7,
            title: "Pemeriksaan Alat Bantu Angkat Manual",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah memastikan kelayakan alat bantu angkat manual seperti hand pallet, hand winch, dan troli barang.",
            points: [
                "<strong>Inspeksi Roda & Rem Troli:</strong> Periksa kondisi roda dari keausan dan pastikan fungsi rem pengunci troli berfungsi normal.",
                "<strong>Kelaikan Pompa Hand Pallet:</strong> Cek kebocoran oli pada sistem hidrolik hand pallet sebelum digunakan untuk mengangkat barang berat.",
                "<strong>Kapasitas Angkat Manual:</strong> Jangan memaksakan menarik atau mendorong beban yang melebihi kapasitas alat angkat manual.",
                "<strong>Teknik Dorong yang Benar:</strong> Utamakan posisi mendorong (bukan menarik) beban pada troli agar pandangan ke depan tetap jelas dan aman."
            ],
            closing: "Periksa peralatan sebelum digunakan untuk menghindari cedera otot maupun kegagalan alat.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        },
        {
            id: 8,
            title: "Pencahayaan & Keamanan Area Yard Malam Hari",
            opening: "Selamat pagi/siang rekan-rekan YF. Ketika memasuki operasional malam hari atau kondisi cuaca mendung gelap, aspek pencahayaan di area yard menjadi fokus utama keselamatan kita.",
            points: [
                "<strong>Pemeriksaan Lampu Penerangan Sorot:</strong> Pastikan seluruh lampu sorot (floodlight) di tiang yard menyala dengan terang dan tidak ada yang mati.",
                "<strong>Penggunaan Atribut Reflektif:</strong> Pekerja yang beraktivitas di yard wajib memastikan safety vest (rompi) memiliki pantulan cahaya (reflective) yang jelas.",
                "<strong>Waspada Area Minim Cahaya:</strong> Dilarang memasuki area sudut yard yang gelap tanpa membawa senter atau penerangan portabel yang memadai.",
                "<strong>Koordinasi Shift Malam:</strong> Lakukan komunikasi serah terima tugas dengan jelas antar pengawas shift siang dan malam."
            ],
            closing: "Terlihat dan melihat adalah kunci keselamatan saat bekerja di area minim cahaya.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest (High-Visibility)", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 9,
            title: "Standar Pengikatan Beban di Truk (Lashing)",
            opening: "Selamat pagi/siang rekan-rekan. Sesi TBM hari ini membahas standar keselamatan pengikatan (lashing) barang di atas truk pengangkut sebelum keluar meninggalkan yard.",
            points: [
                "<strong>Kualitas Tali/Sabuk Lashing:</strong> Pastikan ratchet strap atau wire rope lashing tidak ada yang robek, aus, atau berkarat parah.",
                "<strong>Titik Ikat yang Kokoh (Anchor Point):</strong> Pasang kaitan lashing pada titik chassis truk yang kuat, bukan pada bagian bodi yang mudah patah.",
                "<strong>Pemeriksaan Ketegangan Ikatan:</strong> Pastikan beban terkunci kencang dan tidak bergeser ke kiri atau kanan saat kendaraan melewati jalan bergelombang.",
                "<strong>Pengecekan Ulang Perjalanan:</strong> Pengemudi wajib mengecek ulang ketegangan lashing setelah berjalan beberapa kilometer dari area yard."
            ],
            closing: "Pengikatan yang kuat mencegah jatuhnya barang di jalan raya yang membahayakan pengguna jalan lain.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit", "Kacamata Safety"]
        },
        {
            id: 10,
            title: "Housekeeping & Pengendalian Hama Gudang",
            opening: "Selamat pagi/siang rekan-rekan YF. Sebagai materi penutup, mari kita tingkatkan kesadaran terhadap kebersihan menyeluruh (housekeeping) serta pencegahan potensi bahaya biologis di area yard dan gudang.",
            points: [
                "<strong>Pembersihan Lorong Gudang:</strong> Pastikan tidak ada genangan air, ceceran oli, atau sampah kardus berserakan yang memicu terpeleset.",
                "<strong>Penyimpanan Makanan Tertutup:</strong> Jangan meninggalkan sisa makanan di dalam area gudang terbuka untuk menghindari datangnya tikus atau serangga pengganggu.",
                "<strong>Pemeriksaan Kotak P3K & Eyewash:</strong> Cek ketersediaan obat ringan dan pastikan akses ke fasilitas darurat tidak terhalang barang.",
                "<strong>Komitmen 5S (Rapi, Resik, Rawat):</strong> Luangkan waktu 5-10 menit di akhir jam kerja untuk merapikan kembali peralatan ke tempat semula."
            ],
            closing: "Yard yang bersih dan sehat mencerminkan disiplin tim yang luar biasa.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        }
    ],
    "HPE": [
        {
            id: 1,
            title: "Penerapan Prosedur Baku LOTO (Lockout Tagout)",
            opening: "Selamat pagi/siang rekan-rekan Elektrik & LOTO. Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada kedisiplinan penerapan prosedur LOTO untuk memastikan tidak ada aliran listrik yang menyala tanpa sengaja saat perbaikan.",
            points: [
                "<strong>Wajib Matikan & Isolasi Sumber Energi:</strong> Pastikan pemutus arus utama (breaker/MCCB) benar-benar dalam posisi OFF sebelum melakukan pekerjaan perbaikan.",
                "<strong>Pemasangan Padlock & Tag Out Pribadi:</strong> Setiap teknisi wajib memasang gembok (padlock) dan label bahaya (tag) miliknya sendiri pada titik isolasi energi.",
                "<strong>Uji Coba Zero Energy State:</strong> Lakukan pengetesan menggunakan multimeter atau tombol test untuk memastikan kabel benar-benar dalam kondisi mati (zero energy).",
                "<strong>Larangan Membuka LOTO Orang Lain:</strong> Dilarang keras melepas gembok LOTO milik teknisi lain kecuali atas izin pemilik atau instruksi darurat dari otoritas berwenang."
            ],
            closing: "Ingat prinsip kita: 'Zero Energy, Zero Accident'. Jangan pernah mengambil risiko dengan mengabaikan prosedur LOTO.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Insulasi (VDE)"]
        },
        {
            id: 2,
            title: "Inspeksi Panel Listrik Tegangan Menengah",
            opening: "Selamat pagi/siang rekan-rekan HPE. Pertemuan TBM hari ini membahas pentingnya kehati-hatian dan prosedur standar saat melakukan pemeriksaan atau perawatan panel listrik tegangan menengah.",
            points: [
                "<strong>Izin Akses & Kompetensi Khusus:</strong> Hanya petugas elektrik berwenang dan bersertifikat yang diizinkan membuka atau masuk ke ruang panel tegangan menengah.",
                "<strong>Penggunaan Alat Pelindung Busur Api:</strong> Wajib mengenakan pakaian tahan api (arc flash suit) dan pelindung wajah (face shield) khusus saat bekerja dekat bus bar aktif.",
                "<strong>Pemeriksaan Tanda Peringatan Bahaya:</strong> Pastikan simbol tegangan tinggi dan rambu larangan terpasang jelas di pintu panel.",
                "<strong>Kerapian & Kebersihan Ruang Panel:</strong> Pastikan tidak ada barang asing, sisa kabel, atau debu menumpuk di dalam kompartemen panel yang memicu korsleting."
            ],
            closing: "Listrik tidak terlihat namun mematikan. Selalu waspada dan patuhi standar teknis kelistrikan.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Face Shield Anti Arc Flash", "Sarung Tangan Insulasi (VDE)"]
        },
        {
            id: 3,
            title: "Bahaya Kontak Busur Api (Arc Flash)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah mengenali bahaya ledakan busur api (arc flash) serta cara melindungi diri dari paparan panas ekstrem.",
            points: [
                "<strong>Identifikasi Risiko Hubung Singkat:</strong> Pahami potensi terjadinya loncatan bunga api listrik tegangan tinggi saat pelepasan atau penyambungan komponen.",
                "<strong>Larangan Perhiasan Logam:</strong> Dilarang mengenakan cincin, jam tangan, atau kalung logam saat bekerja di dekat instalasi listrik terbuka.",
                "<strong>Jarak Aman Pendukung (Stand-back Distance):</strong> Pastikan pekerja non-teknis menjaga jarak aman dari area pengujian panel yang berisiko arc flash.",
                "<strong>Inspeksi Alat Pemutus Beban:</strong> Pastikan circuit breaker berfungsi baik untuk memutus arus secara cepat jika terjadi lonjakan mendadak."
            ],
            closing: "Lindungi tubuh dan mata Anda dari kilatan cahaya dan panas ekstrem akibat arc flash.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Shoes", "Face Shield Anti Arc Flash", "Coverpack Tahan Api", "Sarung Tangan VDE"]
        },
        {
            id: 4,
            title: "Kelayakan Alat Ukur Listrik & Multimeter",
            opening: "Selamat pagi/siang rekan-rekan HPE. Keakuratan alat ukur sangat menentukan keselamatan kerja. Mari kita pastikan multimeter dan tang ampere yang kita pakai layak pakai.",
            points: [
                "<strong>Inspeksi Fisik Kabel Probe:</strong> Periksa kabel probe multimeter dari kelenturan, isolasi yang terkelupas, atau bagian tembaga yang terbuka.",
                "<strong>Pemeriksaan Kalibrasi Alat:</strong> Pastikan alat ukur memiliki sertifikat kalibrasi yang masih berlaku agar pembacaan tegangan akurat.",
                "<strong>Pemilihan Batas Ukur (Range) yang Tepat:</strong> Setel posisi selector alat ukur pada batas nilai yang lebih tinggi dari perkiraan tegangan yang diukur.",
                "<strong>Penyimpanan Setelah Digunakan:</strong> Simpan kembali alat ukur ke dalam tas pelindung agar terhindar dari benturan atau kelembapan air."
            ],
            closing: "Alat ukur yang rusak dapat memberikan informasi salah dan memicu sengatan listrik fatal.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kerja"]
        },
        {
            id: 5,
            title: "Pengamanan Kabel Jumper & Trafo Portabel",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah penataan aman penggunaan kabel jumper sementara dan trafo portabel di area proyek.",
            points: [
                "<strong>Larangan Sambungan Kabel Terbuka:</strong> Dilarang menggunakan isolasi lakban biasa untuk sambungan kabel tenaga; wajib menggunakan soket sambung standar kedap air.",
                "<strong>Penggantungan Kabel Sementara:</strong> Jaring atau gantung kabel jumper di atas ketinggian kepala atau gunakan pelindung kabel (cable protector) jika melintang di jalan.",
                "<strong>Inspeksi Trafo Portabel:</strong> Periksa kondisi fisik bodi trafo dari keretakan dan pastikan sistem grounding terpasang sempurna.",
                "<strong>Pencegahan Beban Berlebih (Overload):</strong> Jangan menyambungkan terlalu banyak perangkat beban pada satu jalur trafo portabel secara bersamaan."
            ],
            closing: "Kabel yang berserakan dan terkelupas adalah sumber utama korsleting dan bahaya tersandung.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Insulasi"]
        },
        {
            id: 6,
            title: "Pencegahan Sengatan Listrik di Area Basah",
            opening: "Selamat pagi/siang rekan-rekan HPE. Bekerja di kondisi lingkungan basah atau lembap melipatgandakan risiko sengatan listrik. Mari kita tingkatkan kewaspadaan.",
                points: [
                "<strong>Penggunaan Perangkat ELCB/RCCB:</strong> Pastikan setiap sumber listrik lapangan dilengkapi pelindung arus sisa (ELCB) yang berfungsi memutus arus otomatis saat terjadi kebocoran.",
                "<strong>Isolasi Ekstra Perlengkapan Kerja:</strong> Gunakan alas kaki karet anti slip dan karpet isolasi (matting) saat berdiri di atas permukaan basah.",
                "<strong>Larangan Menyentuh Saklar Tangan Basah:</strong> Dilarang memegang tombol saklar atau colokan listrik dalam kondisi tangan basah atau tanpa sarung tangan pelindung.",
                "Cek Proteksi IP Code: Pastikan kotak panel dan stop kontak lapangan memiliki rating ketahanan air (IP Code) yang memadai."
            ],
            closing: "Air adalah penghantar listrik yang sangat baik. Jangan ambil risiko di area basah.\n\nSebelum mulai bekerja, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Anti Slip)", "Sarung Tangan VDE", "Kacamata Safety"]
        },
        {
            id: 7,
            title: "Grounding & Pembumian Genset Sementara",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah pentingnya pemasangan sistem pembumian (grounding) yang baik pada genset dan panel sementara.",
            points: [
                "<strong>Pemasangan Batang Grounding (Copper Rod):</strong> Pastikan rod grounding tertancap dalam ke tanah dengan nilai resistansi sesuai standar keselamatan.",
                "<strong>Pemeriksaan Kabel Arde:</strong> Cek keregangan baut pengikat kabel tembaga grounding dari bodi genset ke pasak bumi.",
                "<strong>Pengujian Kontinuitas Grounding:</strong> Lakukan pengukuran tahanan isolasi secara berkala untuk memastikan arus bocor dapat disalurkan aman ke tanah.",
                "<strong>Larangan Melepas Sistem Arde:</strong> Dilarang mengoperasikan unit genset lapangan jika sistem pembumiannya belum terpasang lengkap."
            ],
            closing: "Grounding yang handal melindungi peralatan dan nyawa kita dari tegangan kejut liar.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kerja"]
        },
        {
            id: 8,
            title: "Inspeksi Perkakas Berinsulasi (VDE Tools)",
            opening: "Selamat pagi/siang rekan-rekan HPE. Tang, obeng, dan kunci khusus elektrik wajib memiliki standar insulasi yang aman dari sengatan.",
            points: [
                "<strong>Cek Lapisan Karet Insulasi:</strong> Periksa gagang perkakas VDE dari retak, pecah, atau lapisan pelindung karet yang mengelupas.",
                "<strong>Larangan Penggunaan Perkakas Biasa:</strong> Dilarang keras menggunakan obeng atau kunci bengkel umum untuk pekerjaan pada komponen bertegangan aktif.",
                "<strong>Batas Ketahanan Tegangan:</strong> Pastikan perkakas memiliki label sertifikasi ketahanan voltase (misalnya standar VDE hingga 1000 Volt).",
                "<strong>Penyimpanan Khusus Alat:</strong> Simpan perkakas berinsulasi terpisah dari besi tajam lain agar lapisannya tidak tergores."
            ],
            closing: "Perkakas berinsulasi yang utuh adalah pelindung utama tangan kita saat menyentuh komponen listrik.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan VDE", "Kacamata Safety"]
        },
        {
            id: 9,
            title: "Identifikasi Jalur Kabel Bawah Tanah",
            opening: "Selamat pagi/siang rekan-rekan. Sebelum melakukan aktivitas penggalian tanah di area proyek, identifikasi jalur kabel bawah tanah wajib dilakukan.",
            points: [
                "<strong>Koordinasi Gambar As-Built Drawing:</strong> Pelajari peta utilitas jalur kabel bawah tanah sebelum alat berat atau pekerja cangkul diturunkan ke lokasi.",
                "<strong>Penggunaan Cable Detector:</strong> Lakukan penyisiran permukaan tanah menggunakan alat detektor kabel untuk memastikan keakuratan posisi jalur.",
                "<strong>Penggalian Manual Berhati-hati:</strong> Jika mendekati estimasi jalur kabel, lakukan penggalian secara manual menggunakan sekop tumpul secara perlahan.",
                "<strong>Pemasangan Tanda Peringatan:</strong> Pasang pita pengaman (warning tape) di atas jalur kabel galian baru sebagai tanda peringatan."
            ],
            closing: "Mengenai kabel tanam bertegangan tinggi sangat berbahaya. Pastikan koordinasi lokasi jelas.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan", "Masker Debu"]
        },
        {
            id: 10,
            title: "Tanggap Darurat Kebakaran Akibat Korsleting",
            opening: "Selamat pagi/siang rekan-rekan HPE. Sebagai materi penutup, mari kita review tindakan cepat tanggap darurat saat terjadi kebakaran akibat hubungan arus pendek listrik.",
            points: [
                "<strong>Pemutusan Arus Cepat:</strong> Langkah pertama saat terjadi korsleting adalah segera matikan sumber utama (MCB/Main Breaker) terdekat.",
                "<strong>Larangan Penggunaan Air:</strong> Dilarang keras memadamkan kebakaran akibat instalasi listrik bertegangan menggunakan media air biasa.",
                "<strong>Penggunaan APAR Jenis CO2 / Powder:</strong> Gunakan Alat Pemadam Api Ringan (APAR) berjenis Karbon Dioksida (CO2) atau Dry Chemical Powder yang sesuai untuk kelas api listrik.",
                "<strong>Evakuasi & Panggilan Darurat:</strong> Segera evakuasi area jika api membesar dan hubungi tim tanggap darurat (ERT) perusahaan."
            ],
            closing: "Kecepatan dan ketepatan tindakan mencegah kerugian besar akibat musibah kebakaran.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan", "Kacamata Safety"]
        }
    ],
    "OHE": [
        {
            id: 1,
            title: "Disiplin P2H Harian Sebelum Operasi Unit",
            opening: "Selamat pagi/siang rekan-rekan Operator Alat Berat (OHE). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada kedisiplinan pelaksanaan Pemeriksaan Harian (P2H) demi memastikan unit aman sebelum mesin dihidupkan.",
            points: [
                "<strong>Pemeriksaan Keliling (Walkaround Check):</strong> Cek kondisi fisik luar unit dari kebocoran oli, keretakan boom/arm, hingga kelaikan ban atau track link.",
                "<strong>Pengecekan Level Fluida & Pelumas:</strong> Pastikan volume oli mesin, minyak rem, air radiator, dan oli hidrolik berada pada batas normal.",
                "<strong>Fungsi Panel & Perangkat Keselamatan:</strong> Uji klakson, alarm mundur, lampu kerja, wiper, serta kamera mundur berfungsi dengan baik.",
                "<strong>Larangan Paksa Operasi:</strong> Jika ditemukan kerusakan kritis saat P2H, operator wajib melaporkan ke mekanik dan menolak mengoperasikan unit sebelum diperbaiki."
            ],
            closing: "Ingat prinsip kita: P2H yang teliti mencegah kerusakan fatal di tengah operasional lapangan.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        },
        {
            id: 2,
            title: "Manajemen Titik Buta (Blind Spot) Excavator",
            opening: "Selamat pagi/siang rekan-rekan OHE. Pertemuan TBM hari ini membahas kewaspadaan terhadap area titik buta (blind spot) di sekeliling unit alat berat.",
            points: [
                "<strong>Kenali Area Blind Spot Unit:</strong> Pahami titik-titik di mana posisi operator tidak dapat melihat pekerja lain, terutama di sisi kanan dan belakang swing bodi.",
                "<strong>Wajib Kontak Mata (Make Eye Contact):</strong> Pastikan operator dan pekerja lapangan saling melihat dan memberi gestur konfirmasi sebelum mendekati unit.",
                "<strong>Fungsi Spion & Kamera Kabin:</strong> Selalu bersihkan dan manfaatkan kaca spion serta kamera pengawas sudut mati sebelum menggerakkan unit.",
                "<strong>Larangan Melintas di Radius Swing:</strong> Pekerja dilarang berdiri di dalam radius putar (swing radius) alat berat saat mesin sedang beroperasi."
            ],
            closing: "Jangan pernah berasumsi operator melihat posisi Anda. Jaga jarak aman di sekitar alat berat!\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Ear Plug"]
        },
        {
            id: 3,
            title: "Keselamatan Lintasan Tanjakan & Turunan",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah teknik dan prosedur aman mengoperasikan alat berat saat melintasi jalur tanjakan serta turunan curam.",
            points: [
                "<strong>Posisi Bucket Saat Melintas:</strong> Jaga posisi bucket atau blade tetap rendah (sekitar 30-50 cm dari permukaan tanah) guna menjaga pusat gravitasi unit.",
                "<strong>Larangan Netral di Turunan:</strong> Dilarang memindahkan transmisi ke posisi netral (free wheel) saat melewati jalan turunan karena berisiko kehilangan kendali.",
                "<strong>Perhatikan Daya Cengkeram Tanah:</strong> Pastikan lintasan tidak terlalu licin atau berlumpur tebal yang bisa membuat unit tergelincir ke samping.",
                "<strong>Gunakan Gigi Rendah (Low Gear):</strong> Selalu gunakan gigi transmisi rendah untuk menahan laju unit secara optimal saat menuruni lereng."
            ],
            closing: "Ketenangan dan perhitungan presisi di medan ekstrem menyelamatkan nyawa dan unit.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 4,
            title: "Koordinasi Ketat dengan Juru Sinyal (Rigger)",
            opening: "Selamat pagi/siang rekan-rekan OHE. Komunikasi yang efektif antara operator dan juru sinyal (rigger/signman) adalah kunci keselamatan utama dalam manuver alat berat.",
            points: [
                "<strong>Satu Komando Pemberi Isyarat:</strong> Operator hanya boleh mengikuti aba-aba dari satu orang rigger resmi yang ditugaskan di lokasi tersebut.",
                "<strong>Pahami Kode Isyarat Standar:</strong> Gunakan gestur tangan atau komunikasi radio (HT) yang jelas, seragam, dan mudah dipahami kedua belah pihak.",
                "<strong>Hentikan Operasi Jika Pandangan Terhalang:</strong> Jika posisi rigger tidak terlihat atau sinyal tidak jelas, operator wajib segera menghentikan pergerakan unit.",
                "<strong>Pengecekan Radio Komunikasi:</strong> Pastikan saluran frekuensi HT antara operator dan rigger aktif serta jernih sebelum pekerjaan dimulai."
            ],
            closing: "Komunikasi satu pintu mencegah kesalahpahaman fatal di lapangan.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Ear Plug", "Sarung Tangan"]
        },
        {
            id: 5,
            title: "Bahaya Operasi Dekat Jaringan Listrik Atas",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah kewaspadaan tinggi terhadap keberadaan kabel jaringan listrik udara (overhead power lines) di sekitar area kerja.",
            points: [
                "<strong>Jarak Aman Minimum (Clearance):</strong> Jaga jarak aman minimal sesuai standar perusahaan saat boom, mast, atau bucket beroperasi di dekat kabel listrik tegangan.",
                "<strong>Penunjukan Spotter Khusus:</strong> Wajib menempatkan pengawas khusus untuk memantau jarak antara ujung atas alat berat dengan bentangan kabel.",
                "<strong>Pemasangan Rambu Peringatan:</strong> Pasang pembatas fisik atau bendera peringatan jika jalur kerja melintasi bawah jaringan listrik.",
                "<strong>Tindakan Darurat Kontak Listrik:</strong> Jika unit menyentuh kabel listrik, operator dilarang turun melompat keluar sembarangan; tetap di kabin hingga arus diputus."
            ],
            closing: "Jangan pernah meremehkan bahaya induksi dan sengatan listrik dari jaringan atas.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 6,
            title: "Teknik Parkir Aman di Kontur Tanah Labil",
            opening: "Selamat pagi/siang rekan-rekan OHE. Pemilihan lokasi dan teknik parkir yang tepat mencegah unit amblas atau merosot sendiri saat ditinggal istirahat.",
            points: [
                "<strong>Hindari Bibir Galian & Lereng:</strong> Dilarang memarkir alat berat terlalu dekat dengan tepi tebing, bibir galian, atau tanah timbunan baru yang labur.",
                "<strong>Turunkan Seluruh Peranti Kerja:</strong> Pastikan bucket, blade, atau ripper diturunkan menyentuh permukaan tanah dengan mantap.",
                "<strong>Aktifkan Rem Parkir & Ganjal Roda:</strong> Pasang handbrake, matikan mesin, cabut kunci kontak, dan ganjal ban/track jika berada di kontur miring.",
                "<strong>Posisi Parkir Tidak Menghalangi Jalan:</strong> Pastikan unit tidak memblokir jalur evakuasi utama atau jalur sirkulasi unit lain di lapangan."
            ],
            closing: "Parkir dengan benar memastikan unit aman saat ditinggal oleh operator.\n\nSebelum mulai bekerja, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        },
        {
            id: 7,
            title: "Pencegahan Risiko Unit Terbalik (Rollover)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah mengenali faktor pemicu unit terbalik (rollover) serta cara mengantisipasinya di medan kerja yang berat.",
            points: [
                "<strong>Wajib Sabuk Pengaman (Seatbelt):</strong> Operator wajib mengenakan sabuk pengaman setiap saat guna melindungi diri jika terjadi guncangan atau risiko unit terguling.",
                "<strong>Batasan Sudut Kemiringan Unit:</strong> Ketahui batas maksimal sudut kemiringan (side slope) alat berat Anda, jangan paksakan melintasi lereng terjal.",
                "<strong>Hindari Belokan Mendadak di Kecepatan Tinggi:</strong> Kurangi kecepatan saat membelokkan unit, terutama pada kondisi jalan berlumpur atau berpasir lepas.",
                "<strong>Kondisi Beban Seimbang:</strong> Saat membawa muatan, pastikan distribusi beban tidak condong ke salah satu sisi saja."
            ],
            closing: "Sabuk pengaman adalah penyelamat utama Anda dari benturan fatal saat unit terguling.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 8,
            title: "Manajemen Kelelahan Operator Shift Panjang",
            opening: "Selamat pagi/siang rekan-rekan OHE. Konsentrasi tinggi sangat dibutuhkan saat mengoperasikan alat berat. Mari kita kelola kelelahan (fatigue) dengan bijak.",
            points: [
                "<strong>Manfaatkan Waktu Istirahat Secukupnya:</strong> Gunakan waktu jeda shift atau istirahat siang untuk meregangkan otot dan memejamkan mata sejenak.",
                "<strong>Cukupi Kebutuhan Cairan Tubuh:</strong> Minum air putih yang cukup di kabin agar terhindar dari dehidrasi akibat suhu panas kabin luar.",
                "<strong>Kenali Tanda-tanda Micro-Sleep:</strong> Jika mulai merasa sering menguap, pandangan kabur, atau hilang fokus, segera laporkan pengawas untuk digantikan sementara.",
                "<strong>Jaga Kualitas Tidur Malam:</strong> Pastikan waktu istirahat di rumah cukup sebelum mengambil jadwal shift kerja berikutnya."
            ],
            closing: "Operator yang bugar menjamin keselamatan diri sendiri dan rekan-rekan di sekitarnya.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes"]
        },
        {
            id: 9,
            title: "Kebersihan Kabin & Larangan Muatan Liar",
            opening: "Selamat pagi/siang rekan-rekan. Kebersihan ruang kabin operator sangat berpengaruh terhadap kenyamanan dan keselamatan manuver kendali unit.",
            points: [
                "<strong>Bebas Hambatan Pedal Kendali:</strong> Pastikan tidak ada botol minum, sampah, atau perkakas yang berserakan di lantai kabin yang dapat mengganjal pedal rem/gas.",
                "<strong>Larangan Penumpang Gelap:</strong> Dilarang keras membawa penumpang tambahan di dalam kabin alat berat yang tidak memiliki kursi resmi dan izin.",
                "<strong>Penyimpanan Barang yang Aman:</strong> Letakkan tas atau perlengkapan pribadi pada tempat khusus penyimpanan di dalam kabin agar tidak bergeser saat unit berguncang.",
                "<strong>Kebersihan Kaca Jendela Kabin:</strong> Bersihkan kaca depan dan spion dari debu tebal atau lumpur secara berkala agar visibilitas tetap jernih."
            ],
            closing: "Kabin yang rapi dan bersih mencerminkan profesionalisme seorang operator alat berat.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety"]
        },
        {
            id: 10,
            title: "Prosedur Darurat Rem Blong di Lapangan",
            opening: "Selamat pagi/siang rekan-rekan OHE. Sebagai materi penutup, mari kita review langkah taktis dan penyelamatan diri saat menghadapi situasi darurat rem blong pada unit.",
            points: [
                "<strong>Jangan Panik & Tetap Kuasai Kemudi:</strong> Ketika rem tidak berfungsi, tetap pegang kendali setir dengan kuat dan berikan peringatan klakson panjang.",
                "<strong>Gunakan Engine Braking & Gigi Rendah:</strong> Turunkan posisi persneling secara bertahap untuk memanfaatkan hambatan mesin menahan laju unit.",
                "<strong>Manfaatkan Hambatan Alami (Escape Lane):</strong> Arahkan unit menuju gundukan tanah, dinding tebing lunak, atau jalur penyelamat khusus jika tersedia di sekitar lintasan.",
                "<strong>Tarik Rem Parkir Darurat:</strong> Aktifkan emergency parking brake secara perlahan jika laju unit sudah mulai melambat."
            ],
            closing: "Ketenangan bertindak di detik krusial menyelamatkan Anda dari kecelakaan fatal.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan", "Kacamata Safety"]
        }
    ],
    "CIVIL": [
        {
            id: 1,
            title: "Inspeksi Kestabilan Dinding Galian Tanah",
            opening: "Selamat pagi/siang rekan-rekan Konstruksi Sipil. Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada keselamatan galian tanah untuk mencegah risiko longsor yang mengancam keselamatan pekerja di dalam lubang.",
            points: [
                "<strong>Pemeriksaan Struktur Sparing / Shoring:</strong> Pastikan dinding galian dengan kedalaman tertentu telah dipasang penahan (shoring/sheet pile) yang kokoh dan bersertifikat.",
                "<strong>Larangan Penempatan Beban di Bibir Galian:</strong> Dilarang keras meletakkan material berat, tanah galian, atau memarkir alat berat terlalu dekat dengan bibir galian.",
                "<strong>Inspeksi Rembesan Air & Retakan:</strong> Periksa apakah ada tanda-tanda retakan tanah di sekitar tepi atau rembesan air yang dapat melunakkan struktur dinding galian.",
                "<strong>Penyediaan Tangga Akses Darurat:</strong> Pastikan tangga atau jalur keluar-masuk darurat selalu tersedia di dalam lubang galian untuk evakuasi cepat."
            ],
            closing: "Longsor galian terjadi dalam hitungan detik. Selalu patuhi standar kemiringan dan perkuatan dinding galian.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Masker Debu"]
        },
        {
            id: 2,
            title: "Pemasangan Perancah Bekisting yang Kokoh",
            opening: "Selamat pagi/siang rekan-rekan Civil. Pertemuan TBM hari ini membahas pentingnya kekuatan struktur perancah dan bekisting sebelum proses pengecoran dimulai.",
            points: [
                "<strong>Pemeriksaan Tiang Penyangga (Scaffolding/Jack Stand):</strong> Pastikan seluruh pipa atau kayu penyangga bekisting berdiri di atas alas yang padat dan tidak mudah amblas.",
                "<strong>Penggunaan Pengunci & Clamp yang Sesuai:</strong> Kencangkan setiap sambungan pipa horizontal dan vertikal menggunakan klem standar tanpa ada yang longgar.",
                "<strong>Pengecekan Kelurusan & Kestabilan:</strong> Pastikan struktur bekisting tidak goyang saat menerima beban struktur di atasnya.",
                "<strong>Larangan Overload Beban Pengecoran:</strong> Jangan menuangkan adukan beton melebihi batas kapasitas beban rencana struktur bekisting."
            ],
            closing: "Kestabilan bekisting adalah penentu utama keberhasilan pengecoran dan keselamatan struktur.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan", "Full Body Harness"]
        },
        {
            id: 3,
            title: "Keselamatan Penuangan Beton (Concrete Pouring)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah tata cara aman saat melakukan penuangan beton baik menggunakan talang, bucket crane, maupun concrete pump.",
            points: [
                "<strong>Koordinasi Jalur Pipa Concrete Pump:</strong> Pastikan sambungan pipa pompa beton terkunci rapat dengan pin pengaman agar tidak lepas akibat tekanan tinggi.",
                "<strong>Area Steril di Bawah Bucket Angkat:</strong> Pekerja dilarang berdiri di bawah jalur ayunan bucket beton yang sedang diangkat oleh crane.",
                "<strong>Penggunaan Pelindung Mata dari Cipratan:</strong> Adukan beton basah bersifat basa kuat dan dapat merusak mata, wajib gunakan kacamata pelindung.",
                "<strong>Pengawasan Selang Penuangan:</strong> Pegang ujung selang pen tuang dengan kuat untuk menghindari hentakan tekanan adukan beton yang mendadak."
            ],
            closing: "Lindungi mata dan tubuh dari iritasi semen basah serta pastikan area kerja terkendali.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Waterproof)", "Kacamata Safety", "Sarung Tangan Karet"]
        },
        {
            id: 4,
            title: "Penggunaan Vibrator Beton & Risiko Kelistrikan",
            opening: "Selamat pagi/siang rekan-rekan Civil. Penggunaan alat pemadat beton (vibrator) di area basah memiliki risiko sengatan listrik yang tinggi, mari kita waspadai.",
            points: [
                "<strong>Inspeksi Kabel & Sambungan Colokan:</strong> Periksa kabel power mesin vibrator dari kelupas dan pastikan menggunakan soket tahan air (waterproof).",
                "<strong>Penggunaan Kotak Panel Portable ber-ELCB:</strong> Pastikan sumber listrik mesin vibrator dilindungi oleh perangkat ELCB/thermal trip yang sensitif.",
                "<strong>Posisi Operator di Area Basah:</strong> Gunakan sepatu bot karet tinggi dan sarung tangan insulasi saat mengoperasikan mesin di genangan adukan beton.",
                "<strong>Perawatan Selang & Kepala Vibrator:</strong> Cek kekencangan sambungan selang fleksibel agar tidak terjadi kebocoran pelumas atau putus di tengah jalan."
            ],
            closing: "Kombinasi air adukan beton dan listrik sangat mematikan. Periksa proteksi kabel dengan teliti.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Rubber)", "Kacamata Safety", "Sarung Tangan Karet"]
        },
        {
            id: 5,
            title: "Pencegahan Material Jatuh dari Ketinggian",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah pencegahan jatuhnya material bangunan atau perkakas dari atas perancah proyek sipil.",
            points: [
                "<strong>Pemasangan Papan Pengaman (Toe Board):</strong> Pastikan setiap tepi lantai kerja di ketinggian dipasang papan pengaman kaki agar benda tidak menggelinding jatuh.",
                "<strong>Penggunaan Kantong Perkakas (Tool Bag):</strong> Bawa baut, kunci, atau alat kecil menggunakan kantong khusus, jangan ditaruh sembarangan di tepi lantai atas.",
                "<strong>Pemasangan Jaring Pengaman (Safety Net):</strong> Pastikan jaring pengaman vertikal terpasang rapat di sisi luar bangunan konstruksi.",
                "<strong>Sterilisasi Area Bawah:</strong> Beri rambu peringatan dan larangan melintas bagi pekerja di zona bawah area pengangkatan material sipil."
            ],
            closing: "Satu baut yang jatuh dari ketinggian dapat berakibat fatal bagi pekerja di bawah. Jaga kerapian alat!\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness"]
        },
        {
            id: 6,
            title: "Penggunaan Jackhammer & Alat Pemecah Batu",
            opening: "Selamat pagi/siang rekan-rekan Civil. Penggunaan alat pemecah beton atau batu (jackhammer) menghasilkan getaran dan kebisingan tinggi yang berdampak pada kesehatan.",
            points: [
                "<strong>Wajib Pelindung Pendengaran (Ear Plug/Muff):</strong> Suara bising jackhammer dapat merusak pendengaran permanen, pastikan ear plug terpasang rapat.",
                "<strong>Teknik Pegangan & Kuda-kuda Tubuh:</strong> Ambil posisi kuda-kuda yang kuat dan seimbang untuk meredam getaran kejut mesin pada lengan dan pinggang.",
                "<strong>Inspeksi Mata Pahat (Chisel):</strong> Periksa kondisi ujung mata pahat dari keausan atau retak agar tidak patah saat menghantam beton.",
                "<strong>Batasan Waktu Kerja Beruntun:</strong> Lakukan rotasi pekerja secara berkala untuk menghindari sindrom getaran tangan (hand-arm vibration syndrome)."
            ],
            closing: "Lindungi telinga dan otot tubuh Anda dari efek samping penggunaan mesin pemecah berat.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Ear Plug / Ear Muff", "Kacamata Safety", "Masker Debu"]
        },
        {
            id: 7,
            title: "Inspeksi Tangga Akses Kerja Sementara",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah memastikan kelayakan tangga portabel atau akses naik sementara di area proyek konstruksi sipil.",
            points: [
                "<strong>Kemiringan Tangga Ideal (Perbandingan 4:1):</strong> Pastikan posisi penempatan tangga memiliki sudut kemiringan yang aman dan tidak mudah merosot.",
                "<strong>Ikatan Pengaman Bagian Atas:</strong> Ikat bagian ujung atas tangga pada struktur yang kokoh agar tidak bergeser ke kiri atau kanan saat dinaiki.",
                "<strong>Larangan Penggunaan Tangga Rusak:</strong> Dilarang menggunakan tangga aluminium atau kayu yang anak tangganya patah, retak, atau licin.",
                "<strong>Prinsip Tiga Titik Tumpu (3-Point Contact):</strong> Selalu gunakan kedua tangan dan satu kaki atau dua kaki dan satu tangan saat naik-turun tangga."
            ],
            closing: "Jatuh dari tangga adalah salah satu penyebab cedera tertinggi di proyek. Selalu gunakan 3 titik tumpu!\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Grip"]
        },
        {
            id: 8,
            title: "Pengamanan Area Kerja Konstruksi Terbuka",
            opening: "Selamat pagi/siang rekan-rekan Civil. Area proyek yang masih terbuka memiliki potensi bahaya jatuh ke lubang atau tertimpa material dari berbagai sisi.",
            points: [
                "<strong>Pemasangan Pagar Pengaman (Safety Railing):</strong> Pastikan setiap tepi lantai bangunan terbuka atau bukaan void dipasang pagar pengaman keliling.",
                "<strong>Pemasangan Lampu Penerangan Malam:</strong> Pasang lampu sorot sementara di titik-titik lintasan jalan utama proyek yang gelap pada malam hari.",
                "<strong>Pemberian Tanda Lubang (Floor Opening Cover):</strong> Tutup rapat lubang instalasi lantai dengan papan kuat dan beri tanda peringatan jelas.",
                "<strong>Penggunaan Atribut Reflektif:</strong> Pekerja wajib mengenakan rompi dengan skotlet reflektif yang jelas terlihat di area proyek terbuka."
            ],
            closing: "Kewaspadaan di area terbuka melindungi diri kita dan rekan kerja dari kecelakaan jatuh.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes"]
        },
        {
            id: 9,
            title: "Ergonomi Angkut Semen & Besi Tulangan",
            opening: "Selamat pagi/siang rekan-rekan. Pekerjaan sipil banyak melibatkan manual handling seperti mengangkat sak semen dan merangkai besi tulangan.",
            points: [
                "<strong>Teknik Angkat Beban Punggung Lurus:</strong> Saat mengangkat sak semen, tekuk lutut dan jaga punggung tetap tegak lurus, jangan membungkuk.",
                "<strong>Minta Bantuan Rekan / Alat Angkut:</strong> Gunakan gerobak dorong (sorong) atau lakukan pengangkatan secara berpasangan untuk beban besi yang terlalu panjang/berat.",
                "<strong>Waspada Ujung Besi Tajam:</strong> Gunakan sarung tangan khusus saat mengangkat dan memindahkan potongan besi tulangan agar tidak tertusuk atau tergores.",
                "<strong>Peregangan Otot Sebelum Kerja:</strong> Lakukan pemanasan ringan pada otot tangan dan pinggang sebelum memulai aktivitas angkat berat."
            ],
            closing: "Jaga kesehatan tulang belakang Anda agar bisa terus bekerja menafkahi keluarga.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Anti Potong", "Masker Debu"]
        },
        {
            id: 10,
            title: "Housekeeping Sisa Potongan Kayu & Paku",
            opening: "Selamat pagi/siang rekan-rekan Civil. Sebagai materi penutup, mari kita jaga kebersihan area kerja dari bahaya sisa potongan kayu berpaku menonjol.",
            points: [
                "<strong>Pembersihan Paku Menonjol:</strong> Segera cabut atau bengkokkan paku pada sisa potongan kayu bekas bekisting agar tidak menginjak kaki.",
                "<strong>Penyortiran Kayu Sisa:</strong> Kumpulkan sisa kayu pada satu titik penampungan khusus, jangan dibiarkan berserakan di jalur jalan kaki.",
                "<strong>Penyapuan Debu & Kerikil Tajam:</strong> Bersihkan area jalur kerja dari ceceran pasir tajam atau kerikil yang membuat terpeleset.",
                "<strong>Budaya 5S di Sektor Sipil:</strong> Biasakan merapikan alat kerja dan membersihkan sisa material di akhir jam shift."
            ],
            closing: "Area kerja yang bersih dari paku dan kayu berserakan mencerminkan profesionalisme tim sipil.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        }
    ],
    "HPM": [
        {
            id: 1,
            title: "Penerapan Isolasi Energi Mekanik (LOTO)",
            opening: "Selamat pagi/siang rekan-rekan Mekanik & Mesin (HPM). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada kedisiplinan penerapan prosedur LOTO untuk mencegah mesin menyala secara tiba-tiba saat sedang diperbaiki.",
            points: [
                "<strong>Matikan Sumber Daya Utama:</strong> Pastikan aliran listrik, pneumatik, atau penggerak utama mesin dalam posisi mati total sebelum tangan masuk ke area kerja.",
                "<strong>Pasang Gembok & Tag Pribadi:</strong> Setiap mekanik wajib memasang pad lock dan tag out di titik isolasi energi yang menjadi tanggung jawabnya.",
                "<strong>Buang Tekanan Sisa (Residual Energy):</strong> Pastikan sisa tekanan angin atau cairan hidrolik di dalam pipa telah dibuang habis.",
                "<strong>Uji Coba Tombol Start:</strong> Coba tekan tombol start panel setelah isolasi terpasang untuk memastikan mesin benar-benar dalam kondisi 'zero energy'."
            ],
            closing: "Keselamatan Anda ada di tangan Anda sendiri. Jangan pernah melepas LOTO milik orang lain.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Mekanik"]
        },
        {
            id: 2,
            title: "Inspeksi Kunci Momen & Alat Pneumatik",
            opening: "Selamat pagi/siang rekan-rekan HPM. Pertemuan TBM hari ini membahas pentingnya mengecek kelayakan kunci momen (torque wrench) dan alat pneumatik sebelum digunakan.",
            points: [
                "<strong>Kalibrasi Kunci Momen:</strong> Pastikan kunci momen yang digunakan memiliki tingkat keakuratan yang baik dan sesuai dengan standar spesifikasi pabrik.",
                "<strong>Inspeksi Selang Angin Pneumatik:</strong> Cek kondisi selang tekanan udara dari kebocoran, keretakan, atau klem sambungan yang longgar.",
                "<strong>Penggunaan Whip Check:</strong> Pasang kawat pengaman (whip check) pada sambungan selang angin bertekanan tinggi untuk mencegah selang mencambuk jika lepas.",
                "<strong>Pelumasan Alat Berkala:</strong> Berikan beberapa tetes oli khusus pada inlet air impact wrench agar komponen di dalam tidak cepat aus."
            ],
            closing: "Alat kerja yang prima menghasilkan ikatan baut yang presisi dan aman.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Ear Plug"]
        },
        {
            id: 3,
            title: "Bahaya Tekanan Tinggi Sistem Hidrolik",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah mengenali bahaya tersembunyi dari cairan bertekanan tinggi pada sistem hidrolik alat berat atau mesin.",
            points: [
                "<strong>Jangan Cek Kebocoran dengan Tangan Kosong:</strong> Dilarang meraba selang hidrolik bertekanan menggunakan tangan telanjang karena cairan dapat menembus kulit (pinhole injection).",
                "<strong>Gunakan Karton / Kayu Penguji:</strong> Gunakan selembar karton atau kayu untuk mendeteksi titik kebocoran halus pada selang hidrolik.",
                "<strong>Turunkan Beban Silinder:</strong> Pastikan silinder hidrolik berada pada posisi tumpuan paling bawah sebelum melepas selang atau komponen katup.",
                "<strong>Gunakan Kacamata Pelindung:</strong> Cipratan minyak hidrolik bertekanan sangat berbahaya jika mengenai mata."
            ],
            closing: "Bahaya hidrolik tidak terlihat kasat mata namun berdaya rusak tinggi. Selalu berhati-hati!\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 4,
            title: "Penanganan Oli Bekas & Pelumas Mesin",
            opening: "Selamat pagi/siang rekan-rekan HPM. Penanganan limbah cair pelumas dan oli bekas harus dilakukan dengan benar demi menjaga kebersihan serta kelestarian lingkungan kerja.",
            points: [
                "<strong>Gunakan Wadah Penampung Khusus:</strong> Jangan membiarkan oli bekas tumpah ke tanah; selalu gunakan baskom atau drum penampung tertutup saat melakukan draining.",
                "<strong>Segera Bersihkan Tumpahan:</strong> Taburkan absorbent (serbuk penyerap) atau gunakan majun pada ceceran oli di lantai agar tidak membuat orang terpeleset.",
                "<strong>Simpan di Area Limbah B3:</strong> Segera pindahkan drum oli bekas ke tempat penumpukan limbah B3 resmi yang beratap dan ber-bunding.",
                "<strong>Hindari Kontak Kulit Terlalu Lama:</strong> Gunakan sarung tangan tahan kimia/oli saat bersentuhan langsung dengan pelumas kotor."
            ],
            closing: "Lingkungan workshop yang bersih dari tumpahan oli mencerminkan kedisiplinan kita.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Nitril / Karet", "Kacamata Safety"]
        },
        {
            id: 5,
            title: "Pemeriksaan Pelindung Putaran Mesin (Guarding)",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah memastikan seluruh pelindung komponen berputar (machine guarding) terpasang sempurna sebelum mesin dinyalakan.",
            points: [
                "<strong>Inspeksi Baut Cover Guard:</strong> Pastikan seluruh baut pengikat cover v-belt, coupling, atau fan blade terpasang kencang dan tidak ada yang longgar.",
                "<strong>Larangan Menyalakan Tanpa Guard:</strong> Dilarang keras mengoperasikan mesin jika penutup komponen berputar sengaja dilepas untuk alasan apapun.",
                "<strong>Periksa Kerusakan Fisik Cover:</strong> Laporkan segera jika penutup besi pelindung mengalami peyok atau bergesekan langsung dengan komponen di dalamnya.",
                "<strong>Pasang Kembali Setelah Servis:</strong> Segera pasang dan kencangkan kembali guard pelindung sesaat setelah pekerjaan perbaikan komponen internal selesai."
            ],
            closing: "Machine guarding adalah pelindung utama rambut, pakaian, dan jemari kita dari bahaya terlilit.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Mekanik"]
        },
        {
            id: 6,
            title: "Keselamatan Penggunaan Gerinda Tangan",
            opening: "Selamat pagi/siang rekan-rekan HPM. Penggunaan mesin gerinda tangan sangat tinggi frekuensinya di workshop mekanik. Mari kita patuhi aturan standarnya.",
            points: [
                "<strong>Wajib Pasang Cover Pelindung Gerinda:</strong> Jangan pernah melepas mangkuk pengaman (wheel guard) pada bodi mesin gerinda tangan.",
                "<strong>Kesesuaian RPM Mata Gerinda:</strong> Pastikan kecepatan putar (RPM) mata gerinda sama atau lebih tinggi dari spesifikasi mesin gerinda yang dipakai.",
                "<strong>Pemeriksaan Retak Batu Gerinda:</strong> Cek fisik batu gerinda dari gompel atau retak sebelum dipasang; lakukan 'ring test' ringan.",
                "<strong>Posisi Arah Percikan Api:</strong> Arahkan percikan api menjauhi tubuh, rekan kerja, atau bahan-bahan yang mudah terbakar di sekitar."
            ],
            closing: "Pecahnya mata gerinda berkecepatan tinggi sangat mematikan. Selalu gunakan kacamata dan face shield!\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Face Shield / Kacamata Safety", "Sarung Tangan Kulit", "Masker Debu"]
        },
        {
            id: 7,
            title: "Pengangkatan Komponen Mesin Berat",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah prosedur pengangkatan komponen mesin berukuran berat seperti transmisi, blok mesin, atau pompa.",
            points: [
                "<strong>Periksa Titik Angkat (Lifting Eye/Hook):</strong> Pastikan baut pengait atau eyebolt terpasang kuat pada ulir komponen mesin yang akan diangkat.",
                "<strong>Gunakan Webbing Sling / Chain Block Layak:</strong> Cek kapasitas angkat alat bantu dan pastikan tidak ada serat sling yang robek atau berkarat.",
                "<strong>Posisikan Jauh dari Jalur Beban Gantung:</strong> Dilarang berdiri atau melintas di dekat komponen mesin yang sedang menggantung di atas katrol/crane.",
                "<strong>Gunakan Kayu Ganjar / Support:</strong> Letakkan komponen mesin di atas jack stand atau balok kayu yang stabil setelah proses penurunan selesai."
            ],
            closing: "Perhitungan beban dan penggunaan alat angkat yang tepat mencegah jatuhnya komponen berat.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit", "Kacamata Safety"]
        },
        {
            id: 8,
            title: "Pencegahan Risiko Terjepit di Sela Mesin",
            opening: "Selamat pagi/siang rekan-rekan HPM. Bekerja di sela-sela komponen mesin yang rapat memiliki risiko tinggi jemari atau tangan terjepit.",
            points: [
                "<strong>Koordinasi Gerakan Bersama Tim:</strong> Saat merapatkan atau memasang komponen berat secara manual, pastikan ada satu orang pemberi aba-aba hitungan.",
                "<strong>Larangan Menaruh Jari di Titik Jepit:</strong> Pahami titik jepit (pinch point) pada mekanismenya; jangan pernah menyelipkan jari di antara sela sambungan besi.",
                "<strong>Gunakan Perkakas Bantu Sesuai:</strong> Manfaatkan obeng pembantu, pry bar, atau penusuk khusus untuk meluruskan lubang baut, jangan pakai jari tangan.",
                "<strong>Pastikan Mesin Terkunci Stabil:</strong> Pastikan komponen tidak bisa bergeser atau berputar sendiri akibat gaya gravitasi."
            ],
            closing: "Lindungi jari jemari Anda. Kehilangan fungsi jari berarti kehilangan masa depan kerja.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Mekanik Grip"]
        },
        {
            id: 9,
            title: "Kebersihan Area Kerja dari Tumpahan Grease",
            opening: "Selamat pagi/siang rekan-rekan. Ceceran gemuk (grease) dan pelumas di lantai workshop mekanik sering menjadi penyebab utama kecelakaan terpeleset.",
            points: [
                "<strong>Segera Bersihkan Sisa Grease:</strong> Jangan biarkan sisa gemuk pelumas tercecer di lantai jalur jalan kaki atau di sekitar area pit mekanik.",
                "<strong>Simpan Wadah Gemuk Tertutup:</strong> Tutup rapat kaleng atau tempat wadah grease setelah selesai melakukan pelumasan (greasing) unit.",
                "<strong>Gunakan Alas Kaki Sol Karet Kesat:</strong> Pastikan sepatu safety Anda memiliki pola sol (anti-slip) yang tidak licin saat menginjak area bengkel.",
                "<strong>Buang Majun Berminyak pada Tempatnya:</strong> Jangan meletakkan kain majun bekas gemuk sembarangan yang dapat memicu sumber api."
            ],
            closing: "Workshop yang bersih membuat langkah kerja kita aman dan nyaman.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Anti Slip)", "Sarung Tangan"]
        },
        {
            id: 10,
            title: "Uji Coba Fungsional Setelah Perbaikan",
            opening: "Selamat pagi/siang rekan-rekan HPM. Sebagai materi penutup, mari kita pastikan pengujian fungsional (functional test) dilakukan dengan aman sebelum mesin diserahkan kembali.",
            points: [
                "<strong>Clear Area Sebelum Start:</strong> Pastikan seluruh rekan kerja, perkakas, dan sisa material telah disingkirkan dari area komponen mesin yang akan diuji.",
                "<strong>Pemeriksaan Awal (Pre-Start Check):</strong> Cek kembali kelengkapan baut, level oli, dan kencangnya sambungan sebelum mesin dihidupkan.",
                "<strong>Uji Coba Putaran Rendah / Tanpa Beban:</strong> Lakukan pengetesan awal pada kecepatan rendah untuk memantau apakah ada getaran aneh atau suara gesekan.",
                "<strong>Pengecekan Akhir Kebocoran:</strong> Amati kembali apakah ada indikasi kebocoran oli atau angin setelah mesin berjalan beberapa menit."
            ],
            closing: "Uji coba yang teliti memastikan hasil perbaikan sukses dan aman dioperasikan.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        }
    ],
    "HPP": [
        {
            id: 1,
            title: "Keselamatan Fabrikasi Pipa di Workshop",
            opening: "Selamat pagi/siang rekan-rekan Piping / Pipa (HPP). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada keselamatan kerja selama proses fabrikasi pipa di workshop agar terhindar dari bahaya tertimpa dan terpotong.",
            points: [
                "<strong>Area Kerja Bebas Hambatan:</strong> Pastikan lantai workshop pipa bersih dari potongan sisa besi (scrap), ceceran oli, dan kabel berantakan.",
                "<strong>Pengamanan Posisi Pipa Saat Dikerjakan:</strong> Selalu gunakan pipe stand atau ganjal kayu triangular agar pipa tidak menggelinding saat dipotong atau digerinda.",
                "<strong>Penggunaan APD Lengkap:</strong> Wajib mengenakan kacamata safety, sarung tangan pelindung, dan sepatu safety dengan pelindung pelat baja.",
                "<strong>Pemeriksaan Kelayakan Alat Potong & Gerinda:</strong> Pastikan pelindung (guard) mesin gerinda terpasang rapat sebelum memulai pekerjaan fit-up pipa."
            ],
            closing: "Fabrikasi yang aman menghasilkan kualitas pipa yang presisi. Utamakan keselamatan diri dan rekan kerja di sekeliling Anda.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Anti Potong"]
        },
        {
            id: 2,
            title: "Inspeksi Alat Pemotong Pipa (Pipe Cutter)",
            opening: "Selamat pagi/siang rekan-rekan HPP. Pertemuan TBM hari ini membahas pentingnya melakukan pemeriksaan harian pada alat pemotong pipa manual maupun otomatis.",
            points: [
                "<strong>Pemeriksaan Tajam Mata Potong (Cutting Wheel):</strong> Cek kondisi roda pemotong dari keausan, retak, atau gompel yang dapat membuat potongan miring atau alat tersangkut.",
                "<strong>Penguncian Ragum / Clamp Pipa:</strong> Pastikan ragum pencekam pipa terkunci kuat sehingga pipa tidak bergeser saat gaya tekan pemotongan diaplikasikan.",
                "<strong>Kebersihan Ulir & Sistem Pelumasan:</strong> Pastikan ulir pengatur tekanan cutter bebas dari tatal besi dan telah diberi pelumas agar pengoperasian enteng.",
                "<strong>Penanganan Sisa Geram / Burry Tajam:</strong> Gunakan reamer atau kikir untuk merapikan bagian tajam hasil potong pipa dengan hati-hati menggunakan sarung tangan."
            ],
            closing: "Alat potong yang terawat dengan baik mencegah bahaya alat patah dan cedera tangan.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 3,
            title: "Pengujian Tekanan Pipa (Hydrotest Safety)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah keselamatan kerja dalam aktivitas pengujian tekanan air (hydrotest) pada instalasi jalur pipa.",
            points: [
                "<strong>Pemasangan Barikade & Rambu Bahaya:</strong> Sterilkan area hydrotest dan pasang barikade pengaman; hanya personil berwenang yang boleh berada di dekat jalur pengujian.",
                "<strong>Pemeriksaan Sertifikasi Pressure Gauge & Blind Flange:</strong> Pastikan manometer terkalibrasi dan blind flange serta baut pengikat mampu menahan tekanan tes rencana.",
                "<strong>Kenaikan Tekanan Secara Bertahap:</strong> Naikkan tekanan air secara perlahan (step-by-step) sesuai prosedur dan amati jika ada indikasi kebocoran.",
                "<strong>Dilarang Melakukan Pekerjaan Fisik Saat Bertekanan:</strong> Haram mengetok, mengencangkan baut, atau mengelas pipa yang sedang berada dalam kondisi bertekanan."
            ],
            closing: "Tekanan tinggi menyimpan energi bahaya ledakan yang sangat besar. Jangan pernah mendekati area tes tanpa izin!\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety / Face Shield", "Sarung Tangan"]
        },
        {
            id: 4,
            title: "Penyimpanan Pipa Baja di Rack Bertingkat",
            opening: "Selamat pagi/siang rekan-rekan HPP. Penataan dan penyimpanan pipa baja pada rak penyangga (pipe rack) membutuhkan perhatian ekstra agar tidak roboh.",
            points: [
                "<strong>Kapasitas Maksimum Pipe Rack:</strong> Jangan menumpuk pipa melebihi batas beban maksimum yang diizinkan pada struktur rak penyimpanan.",
                "<strong>Pemasangan Stopper / Pin Pengunci:</strong> Pastikan ujung rak dilengkapi tiang pembatas (stopper) yang kokoh agar pipa tidak menggelinding jatuh.",
                "<strong>Susunan Pipa Berdasarkan Ukuran:</strong> Tempatkan pipa bermaterial berat dan berdiameter besar di tingkat bawah, sedangkan pipa kecil di tingkat atas.",
                "<strong>Inspeksi Kestabilan Struktur Rak:</strong> Periksa secara berkala tiang penyangga rak dari korosi berat, retak las, atau posisi miring akibat beban berlebih."
            ],
            closing: "Penyimpanan pipa yang tertata rapi menciptakan lingkungan kerja yang aman dan efisien.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit"]
        },
        {
            id: 5,
            title: "Penggunaan Roller Stand saat Penarikan Pipa",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah penggunaan tumpuan roda perata (roller stand) saat proses penyambungan dan penarikan pipa panjang.",
            points: [
                "<strong>Pemeriksaan Putaran Roda Roller:</strong> Pastikan roda roller berputar lancar dan tidak terganjal kotoran atau terikat karat.",
                "<strong>Penyelarasan Ketinggian (Alignment):</strong> Setel ketinggian roller stand secara presisi agar sesuai dengan sumbu pipa guna menghindari gaya puntir mendadak.",
                "<strong>Kapasitas Beban Roller Stand:</strong> Pastikan spesifikasi beban roller mampu menopang berat total segmen pipa yang sedang ditarik.",
                "<strong>Jarak Aman Jemari Tangan:</strong> Dilarang meletakkan tangan di antara pipa dan roda roller saat pipa sedang dalam posisi bergeser/diputar."
            ],
            closing: "Gunakan alat bantu posisi pipa dengan benar untuk mencegah kecelakaan akibat pipa tergelincir.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Mekanik"]
        },
        {
            id: 6,
            title: "Pencegahan Cedera Tangan Saat Flange Alignment",
            opening: "Selamat pagi/siang rekan-rekan HPP. Pekerjaan menyelaraskan lubang flange (flange alignment) sangat berisiko menimbulkan cedera jepit pada jemari tangan.",
            points: [
                "<strong>Dilarang Memasukkan Jari ke Lubang Baut:</strong> Jangan pernah menggunakan jari tangan telanjang untuk mengecek kelurusan lubang flange.",
                "<strong>Gunakan Pin Pembantu (Drift Pin / Pinch Bar):</strong> Gunakan alat pembantu khusus seperti drift pin atau obeng pasak untuk meluruskan posisi lubang baut.",
                "<strong>Komunikasi Ketat Saat Pemasangan:</strong> Bangun komunikasi yang jelas antar rekan tim saat menggunakan kunci pas atau ratchet pengencang.",
                "<strong>Penggunaan Sarung Tangan Grip / Anti Jepit:</strong> Gunakan sarung tangan kerja dengan pelindung dampak (impact glove) pada punggung tangan."
            ],
            closing: "Jari tangan Anda sangat berharga. Utamakan penggunaan perkakas bantu dalam setiap penyambungan flange.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Impact / Mekanik", "Kacamata Safety"]
        },
        {
            id: 7,
            title: "Prosedur Purging Gas pada Jalur Pipa",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah prosedur pengosongan udara atau gas berbahaya (purging) sebelum aktivitas pengelasan pipa dilakukan.",
            points: [
                "<strong>Penggunaan Gas Inert (Argon / Nitrogen):</strong> Pastikan proses purging menggunakan gas pembilas yang tepat sesuai prosedur standar pengelasan pipa.",
                "<strong>Ventilasi & Buangan Gas Purging:</strong> Arahkan pipa buangan gas purging ke area terbuka yang memiliki sirkulasi udara baik.",
                "<strong>Pengujian Kadar Oksigen / Gas Berbahaya:</strong> Lakukan pengukuran kadar gas di ujung buangan menggunakan gas detector sebelum menyalakan api pengelasan.",
                "<strong>Pemeriksaan Regulator & Hose Gas:</strong> Cek kondisi selang penyalur gas purging dari kebocoran serta pastikan regulator berfungsi normal."
            ],
            closing: "Purging yang benar mencegah risiko ledakan dan menjamin kualitas hasil pengelasan internal pipa.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        },
        {
            id: 8,
            title: "Ergonomi Pengangkatan Pipa Diameter Besar",
            opening: "Selamat pagi/siang rekan-rekan. Memindahkan pipa berukuran sedang hingga besar secara manual memiliki risiko tinggi terhadap cedera pinggang dan otot rangka.",
            points: [
                "<strong>Gunakan Alat Bantu Pengangkatan:</strong> Utamakan penggunaan crane, forklift, atau spreader bar untuk memindahkan pipa berbobot berat.",
                "<strong>Pengangkatan Berpasangan (Team Lifting):</strong> Jika pengangkatan manual terpaksa dilakukan pada pipa ringan, koordinasikan gerakan angkat secara bersamaan.",
                "<strong>Posisi Punggung Tegak Lurus:</strong> Tekuk lutut Anda saat mengambil pipa dari lantai dan gunakan kekuatan otot kaki untuk menaikkan beban.",
                "<strong>Hindari Gerakan Memuntir Badan:</strong> Jangan memutar bodi pinggang saat memegang pipa berat; putar seluruh posisi kaki Anda."
            ],
            closing: "Sayangi tulang belakang Anda. Selalu gunakan teknik manual handling yang benar atau minta bantuan alat angkat.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Grip"]
        },
        {
            id: 9,
            title: "Pemasangan Support Pipa Sementara",
            opening: "Selamat pagi/siang rekan-rekan HPP. Pemasangan tumpuan sementara (temporary pipe support) sangat penting untuk menjaga posisi pipa saat proses fit-up dan pengelasan.",
            points: [
                "<strong>Kekuatan Struktur Penyangga Sementara:</strong> Pastikan penyangga sementara mampu menahan berat total segmen pipa dan beban pekerja di atasnya.",
                "<strong>Penguncian Baut U-Bolt & Clamp:</strong> Pastikan clamp penyangga sementara dikunci kencang sehingga pipa tidak bergeser atau turun tiba-tiba.",
                "<strong>Hindari Las Titik Penyangga Sembarangan:</strong> Dilarang mengelas bracket penahan sementara langsung pada badan pipa utama tanpa izin kualifikasi teknis.",
                "<strong>Pemeriksaan Sebelum Dilepas:</strong> Pastikan penyangga permanen pipa telah terpasang sempurna sebelum penyangga sementara dilepas."
            ],
            closing: "Penyangga yang stabil menjaga alur kerja penyambungan pipa tetap presisi dan aman.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 10,
            title: "Inspeksi Slump & Gasket Sambungan Pipa",
            opening: "Selamat pagi/siang rekan-rekan HPP. Sebagai materi penutup, mari kita bahas kebersihan dan ketepatan pemasangan gasket pada sambungan flange pipa.",
            points: [
                "<strong>Inspeksi Fisik Kondisi Gasket:</strong> Periksa gasket dari keretakan, tekukan, atau cacat permukaan sebelum dipasang pada lekukan flange.",
                "<strong>Kebersihan Permukaan Flange (Flange Face):</strong> Bersihkan permukaan flange dari sisa cat, karat, atau kotoran menggunakan sikat kawat agar rapat sempurna.",
                "<strong>Pola Pengencangan Baut Silang (Cross-Tightening):</strong> Kencangkan baut flange secara bersilang berurutan agar tekanan pada gasket merata dan tidak miring.",
                "<strong>Larangan Penggunaan Gasket Bekas:</strong> Dilarang keras memakai ulang gasket bekas yang sudah tertekan karena berisiko tinggi memicu kebocoran."
            ],
            closing: "Pemasangan gasket yang benar memastikan tidak ada kebocoran yang membahayakan operasional plant.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan"]
        }
    ],
    "TANK": [
        {
            id: 1,
            title: "Prosedur Masuk Ruang Terbatas (Confined Space)",
            opening: "Selamat pagi/siang rekan-rekan Tank Cleaning (TANK). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada kedisiplinan izin kerja dan prosedur masuk ruang terbatas demi keselamatan bersama di dalam tangki.",
            points: [
                "<strong>Wajib Memiliki SIK (Surat Izin Kerja Aman):</strong> Jangan pernah masuk ke dalam tangki sebelum izin kerja ruang terbatas dan checklist keselamatan ditandatangani oleh petugas berwenang.",
                "<strong>Pemeriksaan Akses Masuk (Manhole):</strong> Pastikan jalur tangga atau bukaan manhole aman, bersih dari hambatan, dan mudah digunakan untuk proses evakuasi cepat.",
                "<strong>Validasi Petugas Terlatih:</strong> Hanya pekerja yang memiliki sertifikasi atau izin khusus Confined Space Worker yang diperbolehkan masuk ke dalam tangki.",
                "<strong>Pencatatan Keluar-Masuk Pekerja:</strong> Pastikan nama setiap pekerja yang masuk dan keluar tercatat jelas di pos pengawas manhole."
            ],
            closing: "Ruang terbatas memiliki risiko tinggi. Patuhi setiap prosedur izin masuk tanpa terkecuali.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness", "Gas Detector Pribadi"]
        },
        {
            id: 2,
            title: "Pengujian Gas Berbahaya (Gas Testing)",
            opening: "Selamat pagi/siang rekan-rekan TANK. Pertemuan TBM hari ini membahas kewajiban uji gas sebelum aktivitas pembersihan tangki dimulai untuk memastikan atmosfer aman.",
            points: [
                "<strong>Pelaksanaan Oleh Gas Tester Bersertifikat:</strong> Pengujian kadar oksigen dan gas beracun wajib dilakukan oleh petugas berkompeten menggunakan alat yang telah dikalibrasi.",
                "<strong>Standar Kadar Oksigen Ideal:</strong> Pastikan kadar oksigen di dalam tangki berada pada kisaran aman 19.5% sampai 23.5%.",
                "<strong>Deteksi Gas Mudah Terbakar & Beracun:</strong> Periksa konsentrasi LEL (Lower Explosive Limit) dan kandungan gas beracun (H2S, CO) sebelum pintu manhole dibuka penuh.",
                "<strong>Pengujian Berkala / Kontinu:</strong> Lakukan monitoring gas secara berkala selama pekerjaan pembersihan berlangsung karena gas endapan bisa naik kembali."
            ],
            closing: "Jangan percayakan keselamatan pada asumsi. Gas berbahaya tidak terlihat dan tidak berbau.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Multi-Gas Detector"]
        },
        {
            id: 3,
            title: "Penggunaan Sump Pump & Ventilasi Udara",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah pentingnya sirkulasi udara paksa (blower) dan penyedotan cairan sisa menggunakan sump pump di dalam tangki.",
            points: [
                "<strong>Pemasangan Blower / Exhaust Fan:</strong> Pastikan blower udara segar menyala dan terpasang minimal beberapa jam sebelum pekerja masuk ke dalam tangki.",
                "<strong>Keluaran Selang Angin Jauh dari Sumber Api:</strong> Arahkan pembuangan udara kotor dari dalam tangki ke area terbuka yang aman dari percikan api atau jalur lalu lintas umum.",
                "<strong>Penggunaan Pompa Celup (Sump Pump) Standar Ex:</strong> Pastikan pompa penyedot sisa air/minyak menggunakan spesifikasi tahan ledakan (explosion proof) dan terhubung ke panel grounding.",
                "<strong>Pemeriksaan Kabel Listrik Celup:</strong> Cek kondisi kabel power pompa dari potensi terkelupas akibat gesekan dinding tangki."
            ],
            closing: "Ventilasi yang baik menjaga pasokan oksigen dan membuang gas beracun keluar tangki.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Waterproof)", "Masker / Respirator", "Sarung Tangan Karet"]
        },
        {
            id: 4,
            title: "Standar Pemakaian Self-Contained Breathing Apparatus",
            opening: "Selamat pagi/siang rekan-rekan TANK. Pemahaman penggunaan alat bantu pernapasan SCBA sangat krusial bagi tim penyelamat atau pekerja di area toksik tinggi.",
            points: [
                "<strong>Pemeriksaan Tekanan Tabung (Pressure Gauge):</strong> Pastikan jarum indikator tekanan udara pada tabung SCBA berada pada posisi penuh (full capacity) sebelum dipakai.",
                "<strong>Uji Kebocoran Masker Wajah (Fit Test):</strong> Pastikan karet masker melekat rapat pada wajah tanpa ada celah udara luar yang masuk.",
                "<strong>Paham Batas Waktu Penggunaan:</strong> Ketahui kapasitas cadangan udara tabung (biasanya 30-45 menit) dan segera keluar saat alarm peringatan berbunyi.",
                "<strong>Pelatihan Khusus Pengguna:</strong> Hanya pekerja yang terlatih dan lolos tes kesehatan yang diizinkan mengenakan perangkat SCBA di dalam ruang terbatas."
            ],
            closing: "SCBA adalah penyelamat nyawa di atmosfer berbahaya. Pahami cara pakainya dengan benar.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "SCBA (Self-Contained Breathing Apparatus)"]
        },
        {
            id: 5,
            title: "Peran Safety Watcher di Luar Manhole",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah tanggung jawab besar seorang pengawas lubang manhole (safety watcher / standby person).",
            points: [
                "<strong>Wajib Siaga di Posisi Manhole:</strong> Safety watcher dilarang meninggalkan posisinya di luar lubang tangki selama ada pekerja di dalam ruang terbatas.",
                "<strong>Komunikasi Aktif Tanpa Henti:</strong> Jaga komunikasi dua arah secara konstan melalui handy-talkie atau panggilan langsung dengan pekerja di dalam.",
                "<strong>Pencatatan Waktu Masuk Pekerja:</strong> Pantau durasi kerja rekan di dalam tangki untuk mencegah kelelahan akibat suhu panas dan minimnya oksigen.",
                "<strong>Larangan Ikut Masuk Tanpa Backup:</strong> Jika terjadi kondisi darurat, safety watcher dilarang langsung masuk sendiri melainkan harus meminta tim evakuasi darurat."
            ],
            closing: "Safety watcher adalah mata dan telinga utama bagi keselamatan pekerja di dalam tangki gelap.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Masker / Respirator", "Handy-Talkie"]
        },
        {
            id: 6,
            title: "Penerangan Aman di Dalam Tangki (Ex-Proof)",
            opening: "Selamat pagi/siang rekan-rekan TANK. Kondisi tangki yang gelap gulita membutuhkan sistem penerangan khusus yang tidak memicu percikan api (explosion proof).",
            points: [
                "<strong>Wajib Lampu Standar Explosion Proof (Ex):</strong> Dilarang memasukkan lampu penerangan rumah biasa atau kabel sambungan biasa ke dalam tangki bahan bakar.",
                "<strong>Tegangan Rendah (Extra Low Voltage):</strong> Gunakan sistem lampu sorot dengan tegangan aman rendah (misalnya 24 Volt) untuk mencegah risiko sengatan fatal.",
                "<strong>Pemeriksaan Kabel dari Kelupas:</strong> Cek fisik kabel penerangan dari gesekan pinggiran manhole atau tumpukan material.",
                "<strong>Penempatan Posisi Lampu Stabil:</strong> Letakkan atau gantung lampu sorot pada posisi kokoh yang tidak mudah jatuh terkena aktivitas pembersihan."
            ],
            closing: "Satu percikan api dari instalasi listrik buruk dapat memicu ledakan besar di dalam tangki.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Lampu Penerangan Ex-Proof"]
        },
        {
            id: 7,
            title: "Pembersihan Sisa Sludge & Endapan Minyak",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah prosedur aman dalam mengangkat dan membersihkan endapan lumpur (sludge) sisa minyak di dasar tangki.",
            points: [
                "<strong>Penggunaan Sekop / Alat Non-Sparking:</strong> Gunakan sekop berbahan kuningan atau bahan anti-percikan api (non-sparking tool) saat mengeruk sisa sludge.",
                "<strong>Evakuasi Sludge ke Drum Tertutup:</strong> Pindahkan hasil kerukan lumpur ke dalam drum atau bak penampung tertutup untuk menghindari evaporasi gas beracun.",
                "<strong>Wajib Masker / Respirator Kimia:</strong> Paparan uap hidrokarbon sisa sludge sangat pekat, pastikan respirator dengan cartridge kimia terpasang rapat.",
                "<strong>Istirahat Berkala di Luar Tangki:</strong> Lakukan rotasi kerja secara teratur agar pekerja tidak terpapar uap beracun terlalu lama di dalam."
            ],
            closing: "Pembersihan sludge butuh ketelatenan dan kepatuhan tinggi terhadap penggunaan alat pelindung.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Chemical)", "Respirator Organic Vapor", "Sarung Tangan Kimia"]
        },
        {
            id: 8,
            title: "Komunikasi Darurat Evakuasi dari Dalam Tangki",
            opening: "Selamat pagi/siang rekan-rekan. Kelancaran proses evakuasi darurat dari dalam ruang terbatas sangat bergantung pada kejelasan sistem komunikasi tim.",
            points: [
                "<strong>Pahami Tanda Bahaya / Alarm:</strong> Kenali suara klakson, peluit, atau instruksi evakuasi darurat yang disepakati di proyek.",
                "<strong>Penggunaan Tali Penyelamat (Lifeline):</strong> Pasang tali harness atau lifeline yang terhubung langsung ke luar manhole jika diperlukan dalam kondisi tertentu.",
                "<strong>Jalur Evakuasi Bebas Hambatan:</strong> Pastikan area sekitar manhole luar bersih dari tumpukan alat agar tim medis bisa bergerak cepat.",
                "<strong>Simulasi Singkat Tanggap Darurat:</strong> Pastikan seluruh anggota tim tahu persis siapa yang harus dihubungi saat terjadi insiden di dalam tangki."
            ],
            closing: "Kecepatan merespons darurat menyelamatkan nyawa rekan kerja di dalam tangki.\n\nSebelum mulai, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness", "Lifeline"]
        },
        {
            id: 9,
            title: "Pencegahan Keracunan Gas H2S di Tangki",
            opening: "Selamat pagi/siang rekan-rekan TANK. Gas Hidrogen Sulfida (H2S) adalah gas mematikan yang sering terperangkap dalam endapan tangki minyak atau limbah.",
            points: [
                "<strong>Karakteristik Gas H2S:</strong> Kenali bau khasnya (seperti telur busuk pada konsentrasi rendah), namun ingat bahwa H2S mematikan saraf penciuman pada konsentrasi tinggi.",
                "<strong>Wajib Bawa Personal Gas Detector:</strong> Setiap pekerja di dalam tangki wajib mengaktifkan detektor gas H2S pribadi di dekat dada.",
                "<strong>Prosedur Evakuasi Cepat Saat Alarm Berbunyi:</strong> Jika detektor berbunyi (alarm menyala), segera tinggalkan tangki menuju titik berkumpul tanpa panik.",
                "<strong>Larangan Menolong Tanpa Alat Bantu:</strong> Jangan nekat masuk menolong korban pingsan akibat H2S tanpa menggunakan SCBA atau alat bantu pernapasan."
            ],
            closing: "Jangan anggap remeh gas H2S. Satu hirupan dapat membuat seseorang pingsan seketika.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "H2S Gas Detector Pribadi", "Respirator"]
        },
        {
            id: 10,
            title: "Dekontaminasi Akhir Sebelum Serah Terima",
            opening: "Selamat pagi/siang rekan-rekan TANK. Sebagai materi penutup, mari kita pastikan proses pembersihan akhir (dekontaminasi) tangki tuntas dan aman sebelum diserahterimakan.",
            points: [
                "<strong>Pembersihan Total Sisa Kimia / Kotoran:</strong> Pastikan dinding, lantai, dan sudut tangki bebas dari sisa lumpur, ceceran minyak, atau bau menyengat.",
                "<strong>Inspeksi Akhir Bersama (Joint Inspection):</strong> Lakukan pengecekan kondisi internal tangki bersama pengawas atau pemilik proyek (client).",
                "<strong>Pembersihan & Penyimpanan Alat Kerja:</strong> Kumpulkan kembali seluruh peralatan pembersih, selang, dan lampu ex-proof dalam keadaan bersih dan rapi.",
                "<strong>Penutupan Izin Kerja Resmi (Sign-off SIK):</strong> Tutup izin kerja ruang terbatas secara resmi dan pastikan manhole dikunci/diamankan kembali jika pekerjaan selesai."
            ],
            closing: "Pekerjaan tuntas dengan hasil bersih mencerminkan standar profesionalisme tinggi.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan"]
        }
    ],
    "HPFW": [
        {
            id: 1,
            title: "Inspeksi Kelayakan Mesin Las & Kabel Power",
            opening: "Selamat pagi/siang rekan-rekan Fitter & Welder (HPFW). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada pemeriksaan awal kelayakan mesin las dan kabel daya untuk mencegah risiko sengatan listrik serta korsleting.",
            points: [
                "<strong>Pemeriksaan Fisik Kabel Power & Earth Clamp:</strong> Pastikan kabel las tidak ada yang terkelupas, koyak, atau tersambung secara tidak standar, serta klem massa menempel kuat pada benda kerja.",
                "<strong>Kondisi Terminal Sambungan & Isolasi:</strong> Periksa baut terminal kabel di mesin las dalam keadaan kencang dan tidak longgar atau menimbulkan panas berlebih.",
                "<strong>Fungsi Saklar Utama & MCB:</strong> Pastikan pemutus arus (MCB) dan tombol on/off mesin las berfungsi normal untuk memudahkan pemadaman darurat.",
                "<strong>Penempatan Mesin di Area Kering:</strong> Letakkan mesin las di tempat yang terlindung dari genangan air hujan atau ceceran cairan kerja."
            ],
            closing: "Peralatan listrik yang aman melindungi kita dari bahaya sengatan arus tinggi.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Las (Welding Gloves)", "Kacamata Safety"]
        },
        {
            id: 2,
            title: "Pencegahan Bahaya Sinar Ultraviolet (Welding Arc)",
            opening: "Selamat pagi/siang rekan-rekan HPFW. Pertemuan TBM hari ini membahas pentingnya melindungi mata dan kulit dari paparan sinar ultraviolet serta inframerah saat proses pengelasan.",
            points: [
                "<strong>Penggunaan Kedok Las Otomatis / Manual Standar:</strong> Selalu gunakan kedok las (welding helmet) dengan nomor filter shade yang sesuai untuk menahan radiasi busur api.",
                "<strong>Pemasangan Partisi / Welding Curtain:</strong> Pasang tirai pelindung api di sekitar area kerja agar rekan kerja di sekitar tidak terkena efek 'welder's flash' (mata pedih).",
                "<strong>Lindungi Kulit dari Paparan Langsung:</strong> Pastikan seluruh bagian kulit tertutup pakaian kerja berlengan panjang dan apron kulit untuk mencegah luka bakar surya (sunburn).",
                "<strong>Peringatan 'Awas Las' Sebelum Menyalakan Busur:</strong> Beritahu rekan sekitar dengan ucapan 'awas las' sebelum busur listrik dinyalakan."
            ],
            closing: "Radiasi busur las tidak terlihat tapi merusak mata secara perlahan. Selalu gunakan pelindung.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Welding Helmet / Kedok Las", "Apron Kulit Dada"]
        },
        {
            id: 3,
            title: "Pengamanan Tabung Gas Bertekanan (Oxy-Acetylene)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah penanganan dan penyimpanan tabung gas bertekanan oksigen dan asetilena secara aman di area kerja.",
            points: [
                "<strong>Posisi Tabung Wajib Berdiri Tegak:</strong> Simpan dan gunakan tabung gas dalam posisi berdiri tegak serta diikat menggunakan rantai pengaman pada trolley khusus.",
                "<strong>Jarak Aman dari Sumber Panas / Percikan:</strong> Tempatkan tabung gas jauh dari jangkauan percikan api las atau benda panas minimal berjarak aman.",
                "<strong>Pemeriksaan Tutup Pelindung (Cap Valve):</strong> Pasang selalu tutup pengaman katup tabung saat tabung sedang dipindahkan atau tidak digunakan.",
                "<strong>Larangan Membawa Minyak/Gemuk:</strong> Dilarang keras memegang atau melumasi regulator oksigen dengan tangan atau kain berminyak karena dapat memicu ledakan spontan."
            ],
            closing: "Tabung gas bertekanan tinggi bagaikan bom waktu jika disalahgunakan. Perlakukan dengan sangat hati-hati!\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit", "Kacamata Safety"]
        },
        {
            id: 4,
            title: "Pemeriksaan Flashback Arrestor pada Blander",
            opening: "Selamat pagi/siang rekan-rekan HPFW. Alat pengaman aliran balik gas (flashback arrestor) wajib diperiksa rutin untuk mencegah nyala api masuk kembali ke dalam tabung.",
            points: [
                "<strong>Fungsi Utama Flashback Arrestor:</strong> Pastikan perangkat pencegah nyala api balik terpasang dengan benar di antara selang dan blender potong (torch).",
                "<strong>Inspeksi Kebocoran Sambungan Klem:</strong> Cek kondisi klem pengikat selang gas oksigen dan asetilena dari kemungkinan robek atau longgar.",
                "<strong>Uji Kebocoran dengan Air Sabun:</strong> Gunakan cairan air sabun untuk mendeteksi titik kebocoran halus pada sambungan drat regulator dan selang.",
                "<strong>Larangan Memodifikasi Alat Pemotong:</strong> Jangan pernah mengubah atau merusak komponen katup pengaman torch potong secara sembarangan."
            ],
            closing: "Flashback arrestor adalah benteng pertahanan terakhir terhadap ledakan balik selang gas.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Kulit"]
        },
        {
            id: 5,
            title: "Ventilasi Asap Las di Area Tertutup",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah pentingnya penyediaan sirkulasi udara atau penghisap asap (exhaust fan) saat melakukan pengelasan di ruang terbatas atau semi-tertutup.",
            points: [
                "<strong>Bahaya Asap Logam Beracun:</strong> Asap hasil pembakaran elektroda dan lapisan cat besi mengandung partikel berbahaya bagi paru-paru jika dihirup terus-menerus.",
                "<strong>Pemasangan Portable Blower / Exhaust:</strong> Tempatkan corong selang exhaust sedekat mungkin dengan titik titik pengelasan untuk menarik asap ke luar.",
                "<strong>Penggunaan Masker Respirator Las:</strong> Wajib mengenakan masker khusus uap logam (filter welding fume/dust) di balik kedok las.",
                "<strong>Hindari Posisi Kepala di Atas Asap:</strong> Atur posisi wajah agar tidak tepat berada di jalur vertikal naiknya kepulan asap las."
            ],
            closing: "Lindungi paru-paru Anda dari racun asap las demi kesehatan jangka panjang.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Respirator Asap Las", "Kedok Las"]
        },
        {
            id: 6,
            title: "Penggunaan APD Kulit Lengkap & Kedok Las",
            opening: "Selamat pagi/siang rekan-rekan HPFW. Profesi welder dan fitter menuntut kepatuhan tinggi dalam mengenakan kelengkapan APD berbahan kulit tahan panas.",
            points: [
                "<strong>Wajib Pakai Apron Kulit Dada & Lengan:</strong> Gunakan pelindung dada dan lengan kulit untuk menahan jatuhnya terak (slag) panas membara.",
                "<strong>Kondisi Sarung Tangan Kulit Kering:</strong> Pastikan sarung tangan las dalam kondisi kering dan tidak bolong agar tidak tembus panas atau aliran listrik.",
                "<strong>Sepatu Safety Tahan Percikan:</strong> Pastikan lidah sepatu safety tertutup rapat oleh celana kerja atau pelindung tambahan agar percikan api tidak masuk ke dalam sepatu.",
                "<strong>Pemeriksaan Fisik Kelayakan APD:</strong> Laporkan segera jika sarung tangan atau apron kulit sudah mengalami robek parah."
            ],
            closing: "APD lengkap adalah perisai pelindung tubuh dari risiko luka bakar tingkat tinggi.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Welding Gloves (Sarung Tangan Kulit)", "Full Body Apron Kulit"]
        },
        {
            id: 7,
            title: "Pencegahan Kebakaran Akibat Percikan Api Las",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kali ini adalah langkah pencegahan jatuhnya percikan bunga api las yang dapat memicu kebakaran di area kerja.",
            points: [
                "<strong>Singkirkan Bahan Mudah Terbakar:</strong> Jauhkan bahan seperti kain, kertas, tiner, atau jerigen bahan bakar dari radius percikan api las (minimal 10 meter).",
                "<strong>Pasang Fire Blanket / Terpal Tahan Api:</strong> Tutup celah lantai atau dinding di bawah area pengelasan elevated menggunakan selimut api (fire blanket).",
                "<strong>Sediakan Alat Pemadam Api Ringan (APAR):</strong> Pastikan tabung APAR siap siaga di dekat titik lokasi pekerjaan pengelasan atau pemotongan.",
                "<strong>Lakukan Pemeriksaan Akhir (Fire Watch):</strong> Amati area bekas las selama minimal 30 menit setelah pekerjaan selesai untuk memastikan tidak ada bara api tersembunyi."
            ],
            closing: "Percikan api kecil bisa menjadi bencana kebakaran besar jika diabaikan. Waspada selalu!\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit", "Fire Blanket / APAR Siaga"]
        },
        {
            id: 8,
            title: "Penyimpanan Elektroda Las di Oven Kering",
            opening: "Selamat pagi/siang rekan-rekan HPFW. Kualitas hasil las sangat dipengaruhi oleh kadar kelembapan kawat las. Mari jaga penyimpanan elektroda dengan benar.",
            points: [
                "<strong>Gunakan Portable Quiver / Termos Kawat Las:</strong> Simpan kawat las yang sedang dipakai di dalam termos pemanas portabel untuk menjaga kestabilan suhu.",
                "<strong>Simpan Kawat Sisa di Oven Utama:</strong> Kembalikan sisa elektroda ke dalam oven pengering utama jika pekerjaan las hari telah usai.",
                "<strong>Larangan Memakai Kawat Las Lembap:</strong> Kawat las yang basah atau berbubuk terkelupas dapat memicu cacat porositas (lubang-lubang kecil) pada hasil las.",
                "<strong>Identifikasi Jenis Elektroda:</strong> Pastikan jenis kawat las (misal E7018 atau RD) sesuai dengan spesifikasi prosedur pengelasan (WPS)."
            ],
            closing: "Kawat las yang kering menghasilkan sambungan struktur baja yang kuat dan lolos uji NDT.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Las"]
        },
        {
            id: 9,
            title: "Inspeksi Hasil Potong Plat dengan Cutting Torch",
            opening: "Selamat pagi/siang rekan-rekan. Proses pemotongan plat menggunakan alat potong blender (cutting torch) menghasilkan tepian tajam yang memerlukan penanganan khusus.",
            points: [
                "<strong>Waspada Tepi Besi Sangat Tajam (Burry):</strong> Hasil potongan api oksigen-asetilena meninggalkan terak tajam; selalu gunakan sarung tangan saat memegang plat.",
                "<strong>Gunakan Gerinda untuk Finishing Tepi:</strong> Haluskan sisa terak atau lelehan terak tebal pada sisi potongan plat menggunakan gerinda tangan dengan aman.",
                "<strong>Pemeriksaan Kestabilan Plat Selama Dipotong:</strong> Pastikan sisa potongan plat tidak langsung menimpa kaki atau menjepit bagian tubuh saat terpisah.",
                "<strong>Penggunaan Kacamata Oxi-Acetylene:</strong> Gunakan kacamata khusus potong gas untuk meredam silau cahaya reaksi pembakaran oksigen."
            ],
            closing: "Hasil potongan yang rapi dan bersih mempermudah proses penyambungan (fit-up) selanjutnya.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Potong Gas", "Sarung Tangan Kulit"]
        },
        {
            id: 10,
            title: "Housekeeping Sisa Kawat Las & Teralis Panas",
            opening: "Selamat pagi/siang rekan-rekan HPFW. Sebagai materi penutup, mari kita budayakan pembersihan area kerja (housekeeping) dari sisa potongan kawat las dan besi panas.",
            points: [
                "<strong>Buang Stub Kawat Las pada Tempatnya:</strong> Jangan membuang sisa ujung kawat las (stub) sembarangan di lantai karena dapat membuat orang terpeleset atau tertusuk.",
                "<strong>Tanda Bahaya Besi / Teralis Panas:</strong> Berikan tanda atau tunggu hingga sisa potongan besi panas mendingin sebelum dipegang atau dipindahkan.",
                "<strong>Gulung Rapi Kabel Las Selesai Kerja:</strong> Rapikan kabel power dan kabel holder las kembali ke tempatnya agar tidak menjadi halangan lalu lintas.",
                "<strong>Matikan Total Kran Tabung & Mesin:</strong> Tutup rapat kran tabung gas dan matikan saklar utama mesin las sebelum meninggalkan area workshop."
            ],
            closing: "Workshop yang bersih dan rapi adalah cerminan dari welder dan fitter yang profesional.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kerja"]
        }
    ],
    "HPB": [
        {
            id: 1,
            title: "Inspeksi Tekanan Tabung Blasting & Nozzle",
            opening: "Selamat pagi/siang rekan-rekan Painting & Blasting (HPB). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada pemeriksaan kelayakan pot blasting, selang, dan nozzle untuk memastikan pekerjaan berjalan aman tanpa risiko ledakan tekanan tinggi.",
            points: [
                "<strong>Pemeriksaan Ketebalan & Kondisi Pot Blasting:</strong> Pastikan tabung bejana tekan (blast pot) tidak mengalami korosi berat dan katup pengaman (safety valve) berfungsi normal.",
                "<strong>Inspeksi Klem & Sambungan Selang Udara:</strong> Cek kondisi kopling dan pin pengaman pada selang sambungan dari risiko terlepas akibat tekanan angin tinggi.",
                "<strong>Penggunaan Deadman Handle yang Responsif:</strong> Pastikan handel pengendali darurat (deadman handle) di ujung nozzle berfungsi aktif untuk memutus aliran secara instan jika dilepas.",
                "<strong>Pemeriksaan Keausan Nozzle:</strong> Ganti nozzle yang sudah aus bagian lubangnya agar semburan abrasive tetap terarah stabil."
            ],
            closing: "Peralatan bertekanan tinggi memerlukan kedisiplinan pemeriksaan sebelum dioperasikan.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Blasting Hood / Helm Blasting", "Heavy Duty Leather Gloves"]
        },
        {
            id: 2,
            title: "Penggunaan Full Face Respirator & Air Filter",
            opening: "Selamat pagi/siang rekan-rekan HPB. Pertemuan TBM hari ini membahas pentingnya memakai masker pelindung pernapasan penuh (full face respirator) serta filter udara bersih saat melakukan pengecatan atau blasting.",
            points: [
                "<strong>Pemeriksaan Air Filter Regulator (Breeding Air):</strong> Pastikan udara yang masuk ke helm blaster disaring melalui filter khusus karbon aktif untuk menghilangkan kandungan oli dan uap air.",
                "<strong>Uji Kebocoran Masker (Fit Check):</strong> Pastikan karet penutup wajah melekat rapat tanpa celah agar gas kimia cat atau debu halus tidak masuk ke saluran napas.",
                "<strong>Penggantian Cartridge / Filter Secara Berkala:</strong> Ganti filter kimia respirator secara rutin jika mulai tercium bau cat atau tarikan napas terasa berat.",
                "<strong>Larangan Melepas Masker di Area Kerja:</strong> Dilarang membuka pelindung pernapasan sebelum benar-benar keluar dari zona paparan debu dan uap cat."
            ],
            closing: "Paru-paru yang sehat adalah aset utama kita. Selalu gunakan alat bantu napas yang layak.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Face Respirator / Blasting Hood", "Air Filter Unit"]
        },
        {
            id: 3,
            title: "Pencegahan Bahaya Debu Abrasive (Silica)",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah mengenali bahaya silikon bebas dari pasir blasting yang dapat memicu penyakit paru-paru kronis (silikosis).",
            points: [
                "<strong>Penggunaan Material Abrasive Alternatif:</strong> Utamakan penggunaan pasir non-silika (seperti garnet atau copper slag) jika memungkinkan untuk menekan risiko debu berbahaya.",
                "<strong>Pemasangan Tirai Penutup Area (Containment Screen):</strong> Pasang terpal pembatas di sekeliling area kerja agar debu blasting tidak menyebar ke lingkungan sekitar.",
                "<strong>Wajib Menggunakan Helm Blasting Suplai Udara:</strong> Blaster wajib menggunakan helm khusus dengan suplai udara bersih bertekanan selama proses penyemprotan.",
                "<strong>Pembersihan Debu dengan Vakum / Basah:</strong> Hindari menyapu debu kering menggunakan angin kompresor yang dapat membuat debu beterbangan kembali ke udara."
            ],
            closing: "Lindungi diri dari paparan debu tak kasat mata yang merusak pernapasan.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Blasting Suit", "Full Face Air-Supplied Helmet"]
        },
        {
            id: 4,
            title: "Ventilasi & Exhaust Fan di Area Tertutup",
            opening: "Selamat pagi/siang rekan-rekan HPB. Proses pengecatan atau blasting di dalam ruang terbatas atau tangki wajib didukung sistem sirkulasi udara buang yang optimal.",
            points: [
                "<strong>Pemasangan Blower / Exhaust Berkapasitas Tinggi:</strong> Letakkan kipas sedot (exhaust fan) di titik terendah atau sudut ruangan untuk menarik uap kimia cat ke luar.",
                "<strong>Pencegahan Akumulasi Gas Mudah Terbakar:</strong> Pastikan uap thinner cat tidak menumpuk hingga mencapai ambang batas ledakan (LEL) di dalam ruangan tertutup.",
                "<strong>Penggunaan Motor Kipas Standar Ex-Proof:</strong> Pastikan blower dan instalasi kelistrikan yang berada dekat area uap cat menggunakan tipe tahan ledakan.",
                "<strong>Monitoring Kualitas Udara Berkala:</strong> Lakukan pemeriksaan atmosfer ruangan secara kontinu sebelum dan selama proses pengecatan berlangsung."
            ],
            closing: "Ventilasi yang baik membuang racun uap cat dan menjaga pasokan oksigen pekerja.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Respirator Kimia", "Exhaust Ducting System"]
        },
        {
            id: 5,
            title: "Penanganan Cat Kimia & Thinner Beracun",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah kehati-hatian dalam mencampur, menuang, dan menggunakan bahan cat kimia serta thinner yang bersifat mudah terbakar.",
            points: [
                "<strong>Kenali Lembar Data Keselamatan (MSDS / SDS):</strong> Pahami sifat bahaya produk cat dan thinner yang digunakan, termasuk titik nyalanya dan penanganan daruratnya.",
                "<strong>Hindari Sumber Percikan Api Terbuka:</strong> Dilarang merokok, menyalakan korek, atau melakukan pengelasan di dekat lokasi pencampuran cat dan thinner.",
                "<strong>Gunakan Wadah Pencampur Resmi:</strong> Campurkan komponen cat (base dan hardener) di tempat terbuka atau berventilasi baik menggunakan alat aduk anti-statik.",
                "<strong>Segera Tutup Kaleng Kemasan:</strong> Tutup rapat kembali kaleng thinner atau cat segera setelah selesai dituang agar uap beracun tidak menguap bebas."
            ],
            closing: "Bahan kimia cat dan thinner menuntut kedisiplinan tinggi dalam penyimpanan serta penggunaannya.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Chemical Goggles", "Sarung Tangan Nitril / Karet Tahan Kimia"]
        },
        {
            id: 6,
            title: "Grounding Selang Blasting Anti Statik",
            opening: "Selamat pagi/siang rekan-rekan HPB. Gesekan partikel pasir berkecepatan tinggi pada selang blasting dapat menimbulkan muatan listrik statis yang berbahaya.",
            points: [
                "<strong>Wajib Gunakan Selang Blasting Anti-Static:</strong> Pastikan selang yang dipakai memiliki kawat konduktor internal penetral arus statis (anti-static hose).",
                "<strong>Periksa Sambungan Grounding ke Pot / Benda Kerja:</strong> Pastikan kabel grounding terhubung kuat antara pot blasting, bodi tangki, dan ground bumi.",
                "<strong>Cegah Risiko Sengatan Listrik Statis:</strong> Grounding yang baik mencegah operator blaster mengalami kejutan listrik statis saat memegang nozzle besi.",
                "<strong>Inspeksi Kondisi Luar Selang:</strong> Cek selang dari keausan lapisan pelindung luar yang dapat memutus jalur konduktor di dalamnya."
            ],
            closing: "Listrik statis tersembunyi dapat memicu kejutan atau percikan. Pastikan grounding terpasang sempurna!\n\nBefore starting work, let's pray according to our respective religions. Start praying... Done.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Blasting Hood", "Leather Gloves"]
        },
        {
            id: 7,
            title: "Pencegahan Terpeleset di Lantai Cat Basah",
            opening: "Selamat pagi/siang rekan-rekan. Genangan sisa tumpahan cat atau ceceran tiner di lantai workshop pengecatan sangat berisiko menyebabkan kecelakaan terpeleset.",
            points: [
                "<strong>Pasang Rambu Peringatan 'Cat Basah / Wet Paint':</strong> Beri tanda peringatan jelas di sekitar area lantai atau struktur yang baru selesai dicat.",
                "<strong>Bersihkan Segera Tumpahan Cat:</strong> Gunakan kain majun dan thinner pembersih untuk segera mengangkat ceceran cat sebelum mengering di jalur jalan.",
                "<strong>Gunakan Sepatu Safety Sol Karet Sesuai:</strong> Pastikan alas sepatu safety Anda bersih dari tumpahan cat licin yang menutupi alur sol anti-slip.",
                "<strong>Jalur Akses Khusus Pejalan Kaki:</strong> Berjalanlah hanya pada jalur evakuasi atau jalan lintas yang telah ditentukan di area workshop."
            ],
            closing: "Lantai yang bersih dari tumpahan cat menjauhkan kita dari risiko terpeleset dan cedera fatal.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Anti Slip)", "Sarung Tangan Kerja"]
        },
        {
            id: 8,
            title: "Penyimpanan Bahan Cat di Gudang Khusus",
            opening: "Selamat pagi/siang rekan-rekan HPB. Pengelolaan penyimpanan stok cat, thinner, dan hardener wajib mematuhi standar keselamatan gudang bahan mudah terbakar.",
            points: [
                "<strong>Sirkulasi Udara Gudang Terbuka / Exhaust:</strong> Pastikan gudang penyimpanan cat dilengkapi ventilasi udara alami atau kipas buang yang aktif 24 jam.",
                "<strong>Larangan Sumber Api Terbuka di Gudang:</strong> Pasang rambu dilarang merokok dan dilarang membawa korek di sekitar area penyimpanan bahan kimia.",
                "<strong>Penyusunan Berdasarkan Kompatibilitas:</strong> Pisahkan bahan thinner yang sangat mudah terbakar dari bahan kimia oksidator atau sumber panas.",
                "<strong>Penyediaan Fasilitas Pemadam (APAR & Fire Blanket):</strong> Pastikan tabung pemadam jenis busa/powder siap siaga di depan pintu masuk gudang cat."
            ],
            closing: "Gudang cat yang tertib dan sesuai standar mencegah potensi bencana kebakaran massal.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kimia"]
        },
        {
            id: 9,
            title: "Pengelolaan Limbah Pasir Blasting Bekas",
            opening: "Selamat pagi/siang rekan-rekan. Limbah sisa pasir blasting (spent abrasive) yang terkontaminasi serpihan cat lama dikategorikan sebagai limbah berbahaya (B3).",
            points: [
                "<strong>Pengumpulan pada Wadah / Big Bag Tertutup:</strong> Jangan membuang sisa pasir blasting sembarangan; kumpulkan ke dalam karung besar (big bag) atau bak khusus.",
                "<strong>Hindari Hamburan Debu ke Tanah / Laut:</strong> Pastikan proses pembersihan sisa pasir tidak mencemari lingkungan sekitar atau badan air terbuka.",
                "<strong>Simpan di Area Penampungan Limbah B3:</strong> Pindahkan karung limbah blasting ke tempat penampungan sementara (TPS) limbah B3 resmi yang beratap.",
                "<strong>Gunakan APD Pelindung Saat Cleaning:</strong> Kenakan masker debu dan sarung tangan saat menyapu serta mengumpulkan sisa kotoran pasir blasting."
            ],
            closing: "Pengelolaan limbah B3 yang bertanggung jawab menjaga kelestarian lingkungan kerja kita.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Masker Debu / Respirator", "Sarung Tangan Kerja"]
        },
        {
            id: 10,
            title: "Inspeksi Scaffolding untuk Pengecatan Tinggi",
            opening: "Selamat pagi/siang rekan-rekan HPB. Sebagai materi penutup, mari kita pastikan perancah (scaffolding) yang digunakan untuk akses pengecatan tinggi berada dalam kondisi aman.",
            points: [
                "<strong>Wajib Tanda Layak Pakai (Scaffolding Tag):</strong> Jangan naik ke atas perancah sebelum dipastikan memiliki label hijau (tagging hijau) yang disahkan inspektur.",
                "<strong>Pemeriksaan Pijakan & Railing Pengaman:</strong> Pastikan papan lantai perancah terpasang rapat tanpa celah serta dilengkapi pagar pengaman (handrail) lengkap.",
                "<strong>Ikatan Kestabilan ke Struktur Tetap:</strong> Periksa apakah tiang scaffolding terikat kokoh pada struktur bangunan atau kapal untuk mencegah goyangan.",
                "<strong>Larangan Membebani Berlebihan:</strong> Jangan menumpuk kaleng cat dan peralatan berat dalam jumlah berlebihan di atas satu platform perancah."
            ],
            closing: "Akses perancah yang aman memastikan kegiatan pengecatan di ketinggian terhindar dari risiko jatuh.\n\nSebelum kita mulai aktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness (Double Lanyard)"]
        }
    ],
    "BME": [
        {
            id: 1,
            title: "Inspeksi Kelayakan Pipa Scaffolding & Clamp",
            opening: "Selamat pagi/siang rekan-rekan Scaffolding & Ketinggian (BME). Terima kasih atas kehadirannya di TBM hari ini. Mari kita fokus pada pemeriksaan ketat kondisi fisik pipa dan klem perancah sebelum didirikan.",
            points: [
                "<strong>Pemeriksaan Karat Berat & Penyok Pipa:</strong> Pastikan pipa besi tidak mengalami korosi keropos atau peyok parah yang dapat mengurangi kekuatan struktur menahan beban.",
                "<strong>Inspeksi Fungsi Ulir Swivel & Fixed Clamp:</strong> Cek baut dan klem pengikat dari keausan ulir serta pastikan dapat dikencangkan dengan sempurna.",
                "<strong>Larangan Penggunaan Material Cacat:</strong> Singkirkan dan beri tanda pada pipa atau klem yang bengkok agar tidak terpasang di lapangan.",
                "<strong>Kesesuaian Standar Ketebalan Pipa:</strong> Pastikan pipa perancah yang digunakan memenuhi spesifikasi ketebalan dinding pipa standar industri."
            ],
            closing: "Kualitas material perancah yang prima adalah fondasi awal keselamatan pekerja di ketinggian.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness", "Sarung Tangan Mekanik"]
        },
        {
            id: 2,
            title: "Pemasangan Tagging Scaffold (Green/Red Tag)",
            opening: "Selamat pagi/siang rekan-rekan BME. Pertemuan TBM hari ini membahas pentingnya sistem penandaan status kelayakan (tagging) pada setiap unit perancah yang berdiri.",
            points: [
                "<strong>Arti Red Tag (Bahaya / Dilarang Naik):</strong> Perancah yang sedang dalam tahap dirakit atau dibongkar wajib dipasang tanda merah agar tidak dinaiki pekerja.",
                "<strong>Inspeksi Oleh Scaffolder Berkompeten:</strong> Hanya scaffolder bersetifikat resmi yang berhak memeriksa struktur dan memasang tanda hijau (green tag) tanda siap pakai.",
                "<strong>Pemeriksaan Harian Sebelum Beraktivitas:</strong> Pastikan status tag pada akses naik scaffolding selalu terpantau hijau dan sah sebelum digunakan.",
                "<strong>Larangan Merusak atau Melepas Tag Sembarangan:</strong> Dilarang keras memindahkan atau melepas label status keselamatan perancah tanpa izin pengawas."
            ],
            closing: "Scaffold tagging adalah rambu penyelamat nyawa agar kita tahu struktur mana yang aman dinaiki.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness"]
        },
        {
            id: 3,
            title: "Penggunaan Full Body Harness Double Lanyard",
            opening: "Selamat pagi/siang rekan-rekan. Topik TBM kita kali ini adalah kedisiplinan 100% tie-off menggunakan full body harness pengait ganda saat beraktivitas di ketinggian.",
            points: [
                "<strong>Wajib Kaitkan Salah Satu Hook (100% Tie-Off):</strong> Selalu pastikan minimal satu kait (hook) harness terpancang kuat pada struktur angkur saat berpindah posisi.",
                "<strong>Inspeksi Fisik Tali & Jahitan Harness:</strong> Cek kondisi sabuk pengaman dari robekan serat, karat pada cincin besi, atau kerusakan pada pengunci.",
                "<strong>Ketinggian Minimum Anchor Point:</strong> Pastikan titik tambat (anchor) berada di posisi atas minimal sejajar dengan dada atau kepala untuk meminimalkan jarak jatuh bebas.",
                "<strong>Larangan Memodifikasi Tali Harness:</strong> Jangan pernah mengikat simpul buatan sendiri pada tali lanyard karena dapat mengurangi kekuatan beban kejut."
            ],
            closing: "Full body harness adalah perlindungan terakhir saat terjadi risiko jatuh dari ketinggian.\n\nMari berdoa menurut agama dan kepercayaan masing-masing sebelum memulai tugas. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness (Double Lanyard with Absorber)"]
        },
        {
            id: 4,
            title: "Pemasangan Toe Board & Handrail Pengaman",
            opening: "Selamat pagi/siang rekan-rekan BME. Kelengkapan pagar pengaman (handrail) dan papan pengaman kaki (toe board) pada platform kerja wajib terpasang lengkap.",
            points: [
                "<strong>Pemasangan Pipa Handrail Ganda:</strong> Pastikan pipa pagar pengaman atas (top rail) dan tengah (mid rail) terpasang kokoh di setiap sisi terbuka platform.",
                "<strong>Fungsi Toe Board (Papan Pengaman Kaki):</strong> Pasang papan pembatas di sekeliling tepi lantai kerja untuk mencegah perkakas atau material terpeleset jatuh ke bawah.",
                "<strong>Pemeriksaan Kerapatan Klem Pagar:</strong> Pastikan seluruh sambungan klem pipa pengaman dikencangkan maksimal agar tidak goyang saat dipegang.",
                "<strong>Larangan Melepas Komponen Pengaman:</strong> Dilarang melepaskan handrail atau toe board dengan alasan jalan lewat sempit."
            ],
            closing: "Handrail dan toe board melindungi rekan kerja kita di area bawah dari bahaya kejatuhan benda.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness"]
        },
        {
            id: 5,
            title: "Pencegahan Benda Jatuh (Drop Object Prevention)",
            opening: "Selamat pagi/siang rekan-rekan. Fokus TBM hari ini adalah kewaspadaan tinggi terhadap potensi jatuhnya perkakas atau material dari atas ketinggian struktur perancah.",
            points: [
                "<strong>Gunakan Tas Perkakas Khusus (Tool Bag):</strong> Simpan kunci inggris, palu, dan baut di dalam tas pinggang khusus; dilarang menyelipkan alat di saku baju terbuka.",
                "<strong>Penggunaan Tali Pengikat Alat (Tool Lanyard):</strong> Ikat perkakas tangan menggunakan tali pengikat ke pergelangan tangan atau sabuk saat bekerja di atas ketinggian.",
                "<strong>Sterilisasi Area Bawah (Barikade Drop Zone):</strong> Pasang garis pembatas dan rambu bahaya di bawah area kerja scaffolding agar orang tidak melintas.",
                "<strong>Pemeriksaan Platform dari Sisa Sampah Besi:</strong> Pastikan tidak ada potongan besi atau baut sisa berserakan di atas lantai papan perancah."
            ],
            closing: "Satu mur atau baut yang jatuh dari ketinggian dapat berakibat fatal bagi orang di bawah.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet (Chinstrap Terpasang)", "Safety Vest", "Safety Shoes", "Tool Lanyard / Tas Perkakas"]
        },
        {
            id: 6,
            title: "Teknik Penarikan Material Scaffolding ke Atas",
            opening: "Selamat pagi/siang rekan-rekan BME. Proses naik-turun material pipa dan papan perancah menggunakan sistem katrol manual harus dilakukan sesuai prosedur aman.",
            points: [
                "<strong>Gunakan Tali Manila / Tambang Layak Pakai:</strong> Pastikan tali katrol memiliki kekuatan beban yang sesuai dan bebas dari serat yang lapuk atau terkelupas.",
                "<strong>Simpul Pengikat Pipa Harus Kuat:</strong> Gunakan teknik simpul tali yang benar dan pastikan ujung pipa terikat kencang agar tidak terlepas di tengah jalan.",
                "<strong>Dilarang Berdiri di Bawah Jalur Angkat:</strong> Kosongkan area tepat di bawah jalur vertikal tarikan material dari orang yang melintas.",
                "<strong>Gunakan Katrol dengan Pengunci Rem:</strong> Manfaatkan roda katrol yang dilengkapi sistem pengaman pengereman beban gantung."
            ],
            closing: "Teknik pengangkatan material yang tepat mencegah jatuhnya beban dan cedera otot punggung.\n\nSebelum mulai bekerja, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Sarung Tangan Kulit"]
        },
        {
            id: 7,
            title: "Kestabilan Pondasi Dasar Jack Base Scaffolding",
            opening: "Selamat pagi/siang rekan-rekan. Pondasi bawah perancah (jack base dan base plate) menentukan kestabilan seluruh struktur menara scaffolding di atasnya.",
            points: [
                "<strong>Pemasangan Alas Kayu (Sole Board):</strong> Letakkan papan kayu landasan yang kokoh di bawah jack base jika scaffolding didirikan di atas tanah lunak atau berpasir.",
                "<strong>Pemeriksaan Ketinggian Ulir Jack Base:</strong> Pastikan batas maksimal ketinggian ulir jack base tidak melebihi batas aman spesifikasi teknis.",
                "<strong>Kestabilan Permukaan Tanah Rata:</strong> Pastikan pijakan dasar tidak miring, bergelombang, atau berpotensi amblas saat menahan beban struktur.",
                "<strong>Pemeriksaan Kunci Mur Jack Base:</strong> Pastikan posisi mur pengunci batang ulir menempel ketat pada pipa utama vertikal (standard)."
            ],
            closing: "Pondasi yang kokoh membuat seluruh menara scaffolding berdiri tegak dan aman dari risiko ambruk.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes (Steel Toe)", "Sarung Tangan Kerja"]
        },
        {
            id: 8,
            title: "Larangan Bekerja Saat Angin Kencang / Badai",
            opening: "Selamat pagi/siang rekan-rekan BME. Cuaca ekstrem seperti angin kencang atau hujan badai membawa risiko besar terhadap kestabilan pekerja di atas scaffolding.",
            points: [
                "<strong>Pantau Kondisi Cuaca Sekitar:</strong> Hentikan segera aktivitas di atas perancah jika kecepatan angin mulai meningkat drastis atau turun hujan lebat disertai petir.",
                "<strong>Turun ke Area Aman (Ground Level):</strong> Segera evakuasi diri turun dari struktur menara scaffolding menuju tempat berlindung yang aman.",
                "<strong>Bahaya Efek Layar (Wind Sail):</strong> Terpal penutup atau spanduk yang terpasang di scaffolding dapat memicu gaya dorong angin besar yang merobohkan struktur.",
                "<strong>Inspeksi Ulang Pasca Badai:</strong> Lakukan pemeriksaan struktur total oleh scaffolder sebelum unit perancah diizinkan untuk digunakan kembali."
            ],
            closing: "Jangan pernah mengambil risiko bekerja di ketinggian saat cuaca buruk mengancam keselamatan.\n\nSebelum mulai, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness", "Jas Hujan / Raincoat"]
        },
        {
            id: 9,
            title: "Prosedur Penyelamatan Korban di Ketinggian",
            opening: "Selamat pagi/siang rekan-rekan. Pemahaman langkah awal penyelamatan darurat sangat penting jika ada pekerja yang tergantung akibat terjatuh menggunakan harness.",
            points: [
                "<strong>Kenali Bahaya Sindrom Suspensi (Suspension Trauma):</strong> Pekerja yang tergantung lama dalam harness bisa mengalami gangguan sirkulasi darah fatal jika tidak segera dievakuasi.",
                "<strong>Jangan Panik & Aktifkan Tim Rescue:</strong> Segera laporkan insiden ke pengawas dan hubungi tim tanggap darurat (ERT) penyelamatan ketinggian.",
                "<strong>Penggunaan Alat Bantu Turun Darurat:</strong> Tim penyelamat menggunakan tali evakuasi khusus dan perangkatdescender untuk menurunkan korban secara terkendali.",
                "Dilarang melakukan evakuasi mandiri yang membahayakan diri sendiri tanpa perlengkapan rescue yang memadai."
            ],
            closing: "Kecepatan merespons penyelamatan korban di ketinggian menentukan keselamatan jiwa.\n\nSebelum beraktivitas, mari berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness", "Rescue Kit Equipment"]
        },
        {
            id: 10,
            title: "Inspeksi Titik Anchor (Tie-in) ke Struktur",
            opening: "Selamat pagi/siang rekan-rekan BME. Sebagai materi penutup, mari kita pastikan ikatan penguat struktur perancah (tie-in) ke bangunan tetap terpasang kuat.",
            points: [
                "<strong>Pemasangan Pipa Pengikat (Tie-in) Berkala:</strong> Pastikan struktur scaffolding terikat kuat ke bangunan atau kolom tetap sesuai rasio ketinggian yang disyaratkan.",
                "<strong>Pemeriksaan Kondisi Klem Tie-in:</strong> Cek baut pengikat pipa penahan tidak ada yang longgar akibat getaran operasional di sekitar area kerja.",
                "<strong>Larangan Melepas Ikatan Struktur:</strong> Dilarang melepas pipa tie-in penghubung meskipun dianggap mengganggu pekerjaan pengecatan atau finishing.",
                "<strong>Pemeriksaan Stabilitas Menara Bebas (Free-Standing):</strong> Pastikan perancah jenis menara bebas mematuhi rasio perbandingan lebar dan tinggi yang diizinkan."
            ],
            closing: "Ikatan tie-in yang solid mencegah menara scaffolding bergeser atau roboh.\n\nSebelum kita mulai aktivitas, mari kita berdoa menurut agama dan kepercayaan masing-masing. Berdoa mulai... Selesai.\n\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja.",
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Full Body Harness"]
        }
    ]
};

// Fungsi dinamis untuk menghasilkan 10 materi terstruktur per departemen dengan topik yang bervariasi
function generate10MateriCustom(kode, namaDept, customTitles = []) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let topikSpesifik = customTitles[i-1] || `Topik Operasional Utama ${i} (${namaDept})`;
        arr.push({
            id: i,
            title: topikSpesifik,
            opening: `"Selamat pagi/siang rekan-rekan ${namaDept}. Terima kasih atas kehadiran dan semangatnya di Toolbox Meeting hari ini. Mari kita langsung fokus pada aspek keselamatan kerja untuk topik ${topikSpesifik} di seluruh area operasional kita demi keselamatan bersama."`,
            points: [
                `<strong>Inspeksi & Kesiapan Awal:</strong> Wajib melakukan pemeriksaan menyeluruh terhadap perangkat, mesin, alat kerja, atau area operasional ${namaDept} sebelum aktivitas dimulai guna memastikan semuanya dalam kondisi prima.`,
                `<strong>Mitigasi Risiko Utama:</strong> Patuhi rambu peringatan, pastikan area kerja steril dari potensi bahaya operasional yang khas dan krusial terjadi pada bidang ${namaDept}.`,
                `<strong>Prosedur & Aturan Wajib Lapangan:</strong> Jalankan standar operasional prosedur (SOP) dengan disiplin tinggi, jaga jarak aman, dan pastikan komunikasi terjalin efektif antar sesama pekerja.`,
                `<strong>Penerapan Stop Work Authority:</strong> Gunakan hak tolak kerja Anda tanpa ragu jika menemukan kondisi tidak aman (unsafe condition) atau tindakan tidak aman (unsafe action) di area kerja.`
            ],
            closing: `"Ingat prinsip kita: Utamakan prosedur, patuhi aturan, dan saling peduli antar rekan kerja. Jika melihat potensi bahaya, jangan ragu gunakan hak STOP WORK Anda.\nSebelum kita bubar dan menuju area tugas masing-masing, mari kita berdoa menurut agama dan kepercayaan kita masing-masing, agar seluruh aktivitas hari ini diberi kelancaran dan kita semua pulang dengan selamat. Berdoa mulai... Selesai.\nMari serukan yel-yel kita: Keselamatan Nomor Satu, Keluarga Menanti di Rumah! Terima kasih dan selamat bekerja."`,
            apd: ["Safety Helmet", "Safety Vest", "Safety Shoes", "Kacamata Safety", "Sarung Tangan Standard"]
        });
    }
    return arr;
}

let daftarKehadiran = [];

// Inisialisasi 10 Pilihan Pemateri saat halaman dimuat
window.onload = function() {
    // Validasi sesi login di halaman utama
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
        return;
    }

    renderPemateriOptions();

    // Event listener: Ketika materi TBM dipilih, radio pemateri otomatis tercentang dan dikunci (disabled)
    document.getElementById('materiSelect').addEventListener('change', function() {
        const selectedMateriId = this.value;
        if (selectedMateriId) {
            const targetRadio = document.querySelector(`input[name="pemateri"][value="Pemateri ${selectedMateriId}"]`);
            if (targetRadio) {
                targetRadio.checked = true;
            }
        }
    });

    const savedData = localStorage.getItem('tbm_active_session');
    if (savedData) {
        const session = JSON.parse(savedData);
        
        // Set Departemen
        document.getElementById('departmentSelect').value = session.dept;
        
        // Muat opsi dropdown materi
        updateMateriList();
        
        // Set Materi TBM
        document.getElementById('materiSelect').value = session.materiId;
        
        // Set Daftar Pekerja
        daftarKehadiran = session.daftarKehadiran || [];
        renderMainAttendanceList();

        // Set Pemateri
        if (session.pemateri) {
            const radio = document.querySelector(`input[name="pemateri"][value="${session.pemateri}"]`);
            if (radio) radio.checked = true;
        }

        // Tampilkan hasil TBM
        tampilkanHasilTBM(session.dept, session.materiId, session.pemateri, false);
    }
};

// Fungsi Logout: Membersihkan sesi login dan data penyimpanan lokal agar bersih saat kembali
function logoutApp() {
    if (confirm("Apakah Anda yakin ingin keluar dari sesi ini?")) {
        localStorage.removeItem('tbm_active_session'); // Bersihkan memori sesi TBM aktif
        sessionStorage.removeItem('isLoggedIn');      // Bersihkan status login
        window.location.href = "login.html";
    }
}

// Fungsi merender 10 pilihan pemateri secara otomatis dengan atribut disabled agar tidak bisa diklik manual
function renderPemateriOptions() {
    const container = document.getElementById('pemateriContainer');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        let label = document.createElement('label');
        label.className = 'radio-card';
        // Atribut disabled ditambahkan agar tidak bisa di-klik manual oleh user
        label.innerHTML = `<input type="radio" name="pemateri" value="Pemateri ${i}" disabled> <span>Pemateri ${i}</span>`;
        container.appendChild(label);
    }
}

function updateMateriList() {
    const dept = document.getElementById('departmentSelect').value;
    const materiSelect = document.getElementById('materiSelect');
    
    materiSelect.innerHTML = '<option value="" disabled selected>-- Pilih Materi TBM --</option>';
    
    if (dept && databaseTBM[dept]) {
        databaseTBM[dept].forEach((item) => {
            let option = document.createElement('option');
            option.value = item.id;
            option.innerText = item.title;
            materiSelect.appendChild(option);
        });

        // Otomatis pilih materi pertama dan sesuaikan pematerinya
        if (materiSelect.options.length > 1) {
            materiSelect.selectedIndex = 1;
            const event = new Event('change');
            materiSelect.dispatchEvent(event);
        }
    }
}

function tambahPekerjaMain() {
    const input = document.getElementById('workerNameInput');
    const nama = input.value.trim();
    
    if (nama === "") {
        alert("Nama pekerja atau safety tidak boleh kosong!");
        return;
    }

    daftarKehadiran.push(nama);
    input.value = "";
    renderMainAttendanceList();
}

function renderMainAttendanceList() {
    const listContainer = document.getElementById('mainAttendanceList');
    const countSpan = document.getElementById('attendanceCount');
    
    countSpan.innerText = daftarKehadiran.length;
    listContainer.innerHTML = '';

    if (daftarKehadiran.length === 0) {
        listContainer.innerHTML = '<li class="empty-att">Belum ada pekerja yang ditambahkan.</li>';
        return;
    }

    daftarKehadiran.forEach((nama, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}. ${nama} (Hadir)</span> <button type="button" class="btn-delete-item" onclick="hapusPekerja(${index})"><i class="fa-solid fa-trash"></i></button>`;
        listContainer.appendChild(li);
    });
}

function hapusPekerja(index) {
    daftarKehadiran.splice(index, 1);
    renderMainAttendanceList();
}

function mulaiTBM() {
    const dept = document.getElementById('departmentSelect').value;
    const materiId = document.getElementById('materiSelect').value;
    const pemateriRadio = document.querySelector('input[name="pemateri"]:checked');

    if (!dept) {
        alert("Silakan pilih departemen/seksi terlebih dahulu!");
        return;
    }
    if (!materiId) {
        alert("Silakan pilih materi TBM terlebih dahulu!");
        return;
    }
    if (daftarKehadiran.length === 0) {
        alert("Wajib memasukkan minimal 1 nama pekerja atau petugas safety yang hadir!");
        document.getElementById('workerNameInput').focus();
        return;
    }
    if (!pemateriRadio) {
        alert("Silakan pilih materi TBM terlebih dahulu untuk menentukan pemateri!");
        return;
    }

    const pemateri = pemateriRadio.value;

    const sessionData = {
        dept: dept,
        materiId: materiId,
        pemateri: pemateri,
        daftarKehadiran: daftarKehadiran,
        tanggal: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
    localStorage.setItem('tbm_active_session', JSON.stringify(sessionData));

    tampilkanHasilTBM(dept, materiId, pemateri, true);
}

function tampilkanHasilTBM(dept, materiId, pemateri, shouldScroll) {
    const listMateri = databaseTBM[dept];
    if (!listMateri) return;
    const data = listMateri.find(m => m.id == materiId);
    if (!data) return;

    const deptNames = {
        "HES": "TBM HES (Alat Berat & Umum)",
        "YF": "TBM YF (Yard Facility & Material)",
        "HPE": "TBM HPE (Elektrik & LOTO)",
        "OHE": "TBM OHE (Operator Alat Berat)",
        "CIVIL": "TBM CIVIL / CARPENTER (Konstruksi)",
        "HPM": "TBM HPM (Mekanik & Mesin)",
        "HPP": "TBM HPP (Piping / Pipa)",
        "TANK": "TBM TANK CLEANING (Ruang Terbatas)",
        "HPFW": "TBM HPF & HPW (Fitter & Welder)",
        "HPB": "TBM HPB (Painting & Blasting)",
        "BME": "TBM BME (Scaffolding & Ketinggian)"
    };

    document.getElementById('resDept').innerText = deptNames[dept] || dept;
    document.getElementById('resTitle').innerText = data.title;
    document.getElementById('resPemateri').innerText = pemateri;
    
    const savedData = localStorage.getItem('tbm_active_session');
    let tglText = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if(savedData) {
        try {
            let parsed = JSON.parse(savedData);
            if(parsed.tanggal) tglText = parsed.tanggal;
        } catch(e) {}
    }
    document.getElementById('resDate').innerText = tglText;

    document.getElementById('resOpening').innerText = data.opening;
    
    const pointList = document.getElementById('resPoints');
    pointList.innerHTML = '';
    data.points.forEach(p => {
        let li = document.createElement('li');
        li.innerHTML = p;
        pointList.appendChild(li);
    });

    document.getElementById('resClosing').innerText = data.closing;

    const apdContainer = document.getElementById('resApd');
    apdContainer.innerHTML = '';
    data.apd.forEach(a => {
        let span = document.createElement('span');
        span.className = 'apd-tag';
        span.innerHTML = `<i class="fa-solid fa-check"></i> ${a}`;
        apdContainer.appendChild(span);
    });

    document.getElementById('resTotalAtt').innerText = daftarKehadiran.length;
    const resAttList = document.getElementById('resAttendanceList');
    resAttList.innerHTML = '';
    daftarKehadiran.forEach((nama, idx) => {
        let li = document.createElement('li');
        li.innerText = `${idx + 1}. ${nama} (Hadir)`;
        resAttList.appendChild(li);
    });

    document.getElementById('materiResult').classList.remove('hidden');
    if (shouldScroll) {
        document.getElementById('materiResult').scrollIntoView({ behavior: 'smooth' });
    }
}

// Fungsi Simpan ke PDF
function simpanKePDF() {
    window.print();
}

// Tombol Edit / Ubah Data
function bukaModeEdit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('workerNameInput').focus();
}

// Tombol Sesi Baru (Refresh)
function resetForm() {
    localStorage.removeItem('tbm_active_session');
    document.getElementById('departmentSelect').selectedIndex = 0;
    document.getElementById('materiSelect').innerHTML = '<option value="" disabled selected>-- Pilih Departemen Terlebih Dahulu --</option>';
    
    const radios = document.querySelectorAll('input[name="pemateri"]');
    radios.forEach(r => r.checked = false);
    
    daftarKehadiran = [];
    renderMainAttendanceList();

    document.getElementById('materiResult').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Fungsi untuk menampilkan pratinjau foto yang diunggah
function previewTbmPhoto(event) {
    const reader = new FileReader();
    const fileInput = event.target;
    
    if (fileInput.files && fileInput.files[0]) {
        reader.onload = function(e) {
            const previewImg = document.getElementById('tbmPhotoPreview');
            const previewContainer = document.getElementById('tbmPhotoPreviewContainer');
            
            previewImg.src = e.target.result;
            previewContainer.style.display = 'block';
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Fungsi untuk menghapus foto yang sudah dipilih
function removeTbmPhoto() {
    const fileInput = document.getElementById('tbmPhotoInput');
    const previewContainer = document.getElementById('tbmPhotoPreviewContainer');
    const previewImg = document.getElementById('tbmPhotoPreview');
    
    fileInput.value = '';
    previewImg.src = '#';
    previewContainer.style.display = 'none';
}