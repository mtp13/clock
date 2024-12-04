function updateClock() {
  const date = new Date();
  const $militaryCheckbox = document.querySelector("#military");
  const $clock = document.querySelector("#clock");
  const $date = document.querySelector("#date");
  const $showDate = document.querySelector("#showDate");
  const timeDisplayOptions = {
    timeZone: "America/Chicago",
    timeStyle: "long",
    hour12: !$militaryCheckbox.prop("checked"),
  };
  const dateDisplayOptions = { dateStyle: "full" };

  $clock.text(date.toLocaleTimeString("en-us", timeDisplayOptions));
  $date.text(date.toLocaleDateString("en-us", dateDisplayOptions));
  $date.css({
    visibility: $showDate.prop("checked") ? "visible" : "hidden",
  });
}

setInterval(updateClock, 1000);
