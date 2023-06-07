// Set the date and time when the maintenance is expected to be completed
const maintenanceCompletionDate = new Date("2023-06-17T00:00:00Z");

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = maintenanceCompletionDate - currentDate;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown in the element with id "countdown"
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `Estimated time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
