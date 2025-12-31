const halamanAwal = document.getElementById("halamanAwal");
const dashboard = document.getElementById("dashboard");
const musik = document.getElementById("musik");

function masukDashboard() {
  halamanAwal.classList.remove("active");
  dashboard.classList.add("active");

  // Musik mulai saat klik (biar tidak diblokir browser)
  musik.play();
}

function kembali() {
  dashboard.classList.remove("active");
  halamanAwal.classList.add("active");
}

function tampilPesan(jenis) {
  let pesan = "";

  if (jenis === "doa") {
    pesan = "اللَّهُمَّ إِنْ كَانَ خَيْرًا لِي فَقَرِّبْنَا فِي الْخَيْرِ، وَإِنْ لَمْ يَكُنْ فَاحْفَظْهُ بِرَحْمَتِكَ  Ya Allah, jika dia baik untukku maka dekatkanlah kami dalam kebaikan, dan jika tidak, tetaplah jagalah dia dengan rahmat-Mu 🤲💖";
  } else if (jenis === "harapan") {
    pesan = "Tahun baru kali ini rasanya beda, karena masih ada kamu yang aku genggam. Makasih ya sudah bertahan sama aku sejauh ini, sabar sama semua kurangku, dan nggak pernah pergi meski keadaan kadang capek. Di tahun yang baru ini, aku cuma mau satu: tetap sama kamu. Aku mau terus jatuh cinta sama orang yang sama, belajar bareng, tumbuh bareng, dan saling milih meski dunia lagi nggak ramah. Selama masih ada kamu di samping aku, tahun apa pun rasanya tetap rumah 🤍✨";
  } else if (jenis === "kenangan") {
    pesan = "Di tahun depan, aku cuma mau kamu selalu sehat, bahagia, seneng, dan semua yang kamu jalanin dipermudah. Aku harap ditahun kedepannya engga seperti tahun ini, sedihmu jadi kebahagiaanmuu, dan setiap doa yang kamu ucapin pelan-pelan dapat dikabulkan. Aku pengin terus ada di samping kamu, nemenin kamu di saat senang maupun capek, saling menasehati tiap ada kesalahann mau kecil apa besar. Semoga tahun depan kita masih bareng meski masihh ada masalah besar apa kecil, masih saling pedulii, perhatiann, dan masih jatuh cinta dengan cara yang sederhana tapi tulus sepertii duluu lagiii 🤍💕";
  }

  document.getElementById("isiPesan").innerHTML = pesan;
}
