let myObj = {
  username: "Sulyman Hammed",
  track: "Front-end",
};

document.querySelector("[data-testid=slackUserName]").innerHTML =
  myObj.username;
document.querySelector("[data-testid=myTrack]").innerHTML = myObj.track;

const date = new Date();
dayOfWeek = date.getDay();
day = date.getDate();
const time = new Date(Date.UTC(2023, 8, 11, 5, 58, 50));

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = dayNames[dayOfWeek] + " " + day;
document.querySelector("[data-testid=currentDayOfTheWeek]").innerHTML = today;

let timeUTC = time.toUTCString();
document.querySelector("[data-testid=currentUTCTime]").innerHTML = timeUTC;
