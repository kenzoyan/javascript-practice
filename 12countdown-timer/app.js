const months = [
  "January",
  "February",
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// dynamically construct future time
let tdate = new Date();
let tyear = tdate.getFullYear();
let tmonth = tdate.getMonth();
let tday = tdate.getDate();

const futureDate = new Date(tyear,tmonth,tday +10 ,11,30,0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();


let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];

const date = futureDate.getDate() ;
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${mins}`;

const futuretime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();

  const t = futuretime - today;
  // console.log(t);
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor( t / oneDay);
  let hours = Math.floor(( t%oneDay) /oneHour);
  let minutes = Math.floor( (t%oneHour) /oneMinute);
  let seconds = Math.floor( (t%oneMinute) /1000);

  const values = [days,hours,minutes,seconds];
  // console.log(days,hours,minutes,seconds);
  function format(item){
    if(item<10){
      return (item=`0${item}`);
    } 
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  };
};

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();


