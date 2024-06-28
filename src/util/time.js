export function formatTime(scheduledTime) {
  const date = new Date(scheduledTime);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const numberEndings = ["st", "nd", "rd", "th"];

  // gets day of month and adds the correct ending
  const dayOfMonth = date.getDate();
  let ending;
  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    ending = numberEndings[0];
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    ending = numberEndings[1];
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    ending = numberEndings[2];
  } else {
    ending = numberEndings[3];
  }

  // gets hour and converts to 12 hour time
  let hour = date.getHours();
  let ampm;
  if (hour === 0) {
    hour = 12;
    ampm = "am";
  } else if (hour === 12) {
    ampm = "pm";
  } else if (hour > 12) {
    hour -= 12;
    ampm = "pm";
  } else {
    ampm = "am";
  }

  // gets minutes and adds a 0 if needed
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
    minutes = date.getMinutes();
  }

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${
    date.getDate() + ending
  }, ${date.getFullYear()} @ ${hour}:${minutes} ${ampm}`;
}
