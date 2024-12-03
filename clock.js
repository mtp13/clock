// eslint-disable-next-line no-unused-vars
function updateClock() {
  const date = new Date();
  const timeDisplayOptions = {
    timeZone: "America/Chicago",
    timeStyle: "long",
    hour12: !$("#military").prop("checked"),
  };
  const dateDisplayOptions = { dateStyle: "full" };
  $("#clock").text(date.toLocaleTimeString("en-us", timeDisplayOptions));
  $("#date").text(date.toLocaleDateString("en-us", dateDisplayOptions));
  $("#date").css({
    visibility: $("#showDate").prop("checked") ? "visible" : "hidden",
  });
}

setInterval("updateClock()", 1000);
