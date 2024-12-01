document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form submit default

  // Mengambil nilai username dan password dari input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Memeriksa apakah username dan password sesuai
  if (username === "smkarrahmahjasinga@gmail.com" && password === "Admin") {
      // Set status login ke true
      localStorage.setItem("isLoggedIn", "true");

      // Redirect ke halaman yang ditentukan
      window.location.href = "index.html";
  } else {
      // Menampilkan pesan kesalahan
      alert("Username atau password salah");
  }
});

// Cek apakah pengguna sudah login saat membuka halaman
document.addEventListener("DOMContentLoaded", function () {
  var isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
      // Redirect ke halaman yang ditentukan jika pengguna sudah login
      window.location.href = "index.html";
  }
});