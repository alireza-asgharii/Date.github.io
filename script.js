const h3 = document.querySelector('h3');

setInterval(date, 1000)
function date() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let amPm = 'AM'; 

  if (h > 12) {
    h -= 12
    amPm = 'PM'
  } 
  if (h === 0) {
    h = 12
  }

  s = (s < 10) ? `0${s}`: s;
  m = (m < 10) ? `0${m}`: m;
  h = (h < 10) ? `0${h}`: h;
  
  h3.innerText =  `${h}:${m}:${s} ${amPm}`
}