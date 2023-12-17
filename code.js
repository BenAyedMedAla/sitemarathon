const secs=document.querySelector(".time .secs");
      min=document.querySelector(".time .min");
      hours=document.querySelector(".time .hours");
      days=document.querySelector(".time .days");
      let countDownDate = new Date("Jan 25, 2024 12:00:00").getTime();
var x=setInterval(tick,1000);
    function tick(){
    let now=Date.now();
    let d=countDownDate-now;
    if (d>0){  
      let jours=Math.floor(d / (1000*60*60*24));
        if(jours<10){jours="0"+jours;}
        let heures=Math.floor(d % (1000*60*60*24) / (1000*60*60));
        if (heures<10){heures="0"+heures;}
        let minutes=Math.floor(d % (1000*60*60) / (1000*60));
        if (minutes<10){minutes="0"+minutes;}
        let secondes=Math.floor(d %  (1000*60) / (1000));
        if (secondes<10){secondes="0"+secondes;}
        secs.innerHTML=secondes; 
        min.innerHTML=minutes;
        hours.innerHTML=heures;
        days.innerHTML=jours;
        
        // document.querySelector('.timer').innerText=t;
    }
}
    

