// Mengecek apakah browser mendukung fitur Fullscreen API
if (document.documentElement.requestFullscreen) {
    // Fungsi untuk memanggil fitur Fullscreen API
    function enterFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  
    // Menangkap tombol yang akan diklik
    var fullscreenButton = document.getElementsByClassName('layarfull')[0];
  
    // Menambahkan event listener untuk tombol
    fullscreenButton.addEventListener('click', function() {
      // Memanggil fungsi enterFullscreen() dengan elemen yang ingin diubah ke tampilan layar penuh
      enterFullscreen(document.documentElement);
    });
  }
  