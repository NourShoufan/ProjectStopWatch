var Hours=document.getElementById('hours');

var minutes=document.getElementById("Minutes");

var seconds=document.getElementById('Seconds');
var interval;
seconds=0;
minutes=0;
Hours=0;
function startTime(){
  if(!interval){
    interval=  setInterval(function(){
      seconds++;
      if(seconds>=60){
       minutes++;
       seconds=0;
       if(minutes>=60){
         Hours++;
         if(Hours>12){
           Hours=0;
         }
         minutes=0;
         seconds=0;
       }
     
      }
      Seconds.innerHTML=(seconds<10?'0'+seconds:seconds);
      Minutes.innerHTML=(minutes<10?'0'+minutes:minutes);
      hours.innerHTML=(Hours<10?'0'+Hours :Hours);
   },1000);
  }

}


function pauseTimer() {
   clearInterval(interval);
   interval = null; // Reset interval
}
function Restart(){
  // clearInterval(interval);
  // interval = null;
  seconds=0;
  minutes=0;
  Seconds.innerHTML=(seconds<10?'0'+seconds:seconds);
  Minutes.innerHTML=(minutes<10?'0'+minutes:minutes);
  hours.innerHTML=(Hours<10?'0'+Hours :Hours);
  startTime();
}


 

