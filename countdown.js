// Mengatur tanggal 
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
// Hitungan Mundur Waktu Dilakukan Setiap Satu Detik
var x = setInterval(function() {
  // Mendapatkan Tanggal dan waktu Pada Hari ini
  var now = new Date().getTime();
  //Jarak Waktu Antara Hitungan Mundur
  var distance = countDownDate - now;
  // Perhitungan waktu hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //Tampilkan element dengan memanggil id
  document.getElementById("tahun").innerHTML = "2022";
  document.getElementById("gantitahun").innerHTML = "Dua Ribu Dua Puluh Dua";
  document.getElementById("yeay").innerHTML = "MENUJU TAHUN BARU 2023";
  document.getElementById("tahunbaru").innerHTML = days + " Hari, " + hours + " Jam, " + minutes + " Menit, " + seconds + " Detik";
  // Jika hitungan mundur selesai,
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tahun").innerHTML = "2023";
    document.getElementById("gantitahun").innerHTML = "Dua Ribu Dua Puluh Tiga";
    document.getElementById("yeay").innerHTML = "SELAMAT TAHUN BARU 2023\n🥳🥳🥳";
    document.getElementById("tahunbaru").innerHTML = "HAPPY NEW YEAR 2023\n🥳🥳🥳";
    document.getElementById("link").innerHTML = "HAPPY NEW YEAR 2023";
	startConfetti();
  }
}, 1000);

/*Created By ChinuLz*/