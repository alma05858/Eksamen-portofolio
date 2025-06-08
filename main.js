function updateDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0"); // Dag (2 cifre)
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Måned (2 cifre)
  const year = String(now.getFullYear()).slice(-2); // År (sidste 2 cifre)
  const hours = String(now.getHours()).padStart(2, "0"); // Timer (2 cifre)
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Minutter (2 cifre)
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeZone = "CET"; // Central European Time (Du kan ændre det hvis nødvendigt)

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timeZone}`;
  document.getElementById("datetime").innerText = formattedDateTime;
}
