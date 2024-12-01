let nama = prompt('Masukan Nama Anda');





let remainingTime = 3600;
    let timerInterval;

    function updateTimer() {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

      const display = document.getElementsByClassName("countdown-display")[0];
      display.textContent = `00:${pad(minutes)}:${pad(seconds)}`;

      if (remainingTime === 0) {
        stopTimer();
        alert("Countdown completed!");
        window.location.href = "index.html"; // Pindah ke halaman index.html saat waktu habis
      } else {
        remainingTime--;
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function pad(value) {
      return value.toString().padStart(2, "0");
    }

    timerInterval = setInterval(updateTimer, 1000);

