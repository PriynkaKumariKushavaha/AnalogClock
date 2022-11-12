const hourEle = document.querySelector(".hour");
const minuteEle = document.querySelector('.minute');
const secondEle = document.querySelector('.second');

//console.log(hourEle);

function updateTime(){
    
    //creating an object by calling Date() 
    const curTime=new Date();
    
    // setTimeout(updateTime,1000);
    // we can also use setInterval, see code at line 25
    
    const hour=curTime.getHours();    // through curTime obj fetching hour
    const minute=curTime.getMinutes(); // through curTime obj fetching minute
    const second=curTime.getSeconds(); // through curTime obj fetching  second

    //here converting hour minute and second into degree as we need deg value to rotate arrow hands or sui of ghadi
    const hourDeg= (hour / 12) * 360; 
    hourEle.style.transform = `rotate(${hourDeg}deg)`; //updating hour hand

    const minuteDeg=(minute / 60) * 360;
    minuteEle.style.transform=`rotate(${minuteDeg}deg)`; //updating minute hand
    
    const secondDeg=(second / 60) * 360;
    secondEle.style.transform=`rotate(${secondDeg}deg)`; //updating second hand
   }
// updateTime();
setInterval(updateTime,1000); // it will call updateTime fun every second(1000) and update time in clock
//when we apply setInterval method no need to call fun
//seperatally as its calling inside the method