function updateClock() {
  const date = new Date();
  const $militaryCheckbox = document.querySelector("#military");
  const $clock = document.querySelector("#clock");
  const $date = document.querySelector("#date");
  const $showDate = document.querySelector("#showDate");
  const timeDisplayOptions = {
    timeZone: "America/Chicago",
    timeStyle: "long",
    hour12: !$militaryCheckbox.checked,
  };
  const dateDisplayOptions = { dateStyle: "full" };

  $clock.textContent = date.toLocaleTimeString("en-us", timeDisplayOptions);
  $date.textContent = date.toLocaleDateString("en-us", dateDisplayOptions);
  $date.style.visibility = $showDate.checked ? "visible" : "hidden";
}

setInterval(updateClock, 1000);
