let countdownInterval;

window.onload = function () {
  populateDropdowns();
};

function populateDropdowns() {
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");

  for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option value="${i}">${i}</option>`;
  }

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  months.forEach((m, i) => {
    month.innerHTML += `<option value="${i}">${m}</option>`;
  });

  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 5; i++) {
    year.innerHTML += `<option value="${i}">${i}</option>`;
  }

  for (let i = 0; i < 24; i++) {
    hour.innerHTML += `<option value="${i}">${i.toString().padStart(2, "0")}</option>`;
  }

  for (let i = 0; i < 60; i++) {
    minute.innerHTML += `<option value="${i}">${i.toString().padStart(2, "0")}</option>`;
  }
}

function startCountdown() {
  clearInterval(countdownInterval);

  const d = document.getElementById("day").value;
  const m = document.getElementById("month").value;
  const y = document.getElementById("year").value;
  const h = document.getElementById("hour").value;
  const min = document.getElementById("minute").value;

  const targetDate = new Date(y, m, d, h, min).getTime();

  if (targetDate <= new Date().getTime()) {
    alert("Please choose a future time!");
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("countdown-display").innerHTML = "<h2>🎉 Time's up!</h2>";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }, 1000);
}





