function unhide() {
  document.getElementById("quiz").style.display = "block";
}

let timeleft = 120;
let downloadTimer = setInterval(function(){
  document.getElementById("time").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);