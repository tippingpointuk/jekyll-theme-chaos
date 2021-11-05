function updateTime(countDownDate,counterClass){
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var time = {
    "d": Math.floor(distance / (1000 * 60 * 60 * 24)),
    "h": Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    "m": Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    "s": Math.floor((distance % (1000 * 60)) / 1000)
  }
  var output = "";
  for (unit in time){
    if (time[unit] != 0){
      output += time[unit].toString() + unit + " "
    }
  }

  var counters = document.getElementsByClassName(counterClass);
  for (e in counters){
    counters[e].innerHTML = output
  }

}
// Update counter on page load
updateTime(countDownDate,"Chaos-Counter");
// Update the count down every 1 second
var x = setInterval(function(){
  updateTime(countDownDate,"Chaos-Counter");
}, 1000);
