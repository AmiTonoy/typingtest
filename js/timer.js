let timerClass = document.querySelector('.timer');
// setInterval(aFunction,someDelay);
let t = 0;
let setTime = 10;//second
let textArea = document.querySelector('.textarea');
textArea.addEventListener('focus',()=>{
    setInterval(function timer(){
        t++
        if(t<10){
            timerClass.innerHTML = `0${t}`
          
        }else if(t>15){
            t=0;
            timerClass.innerHTML = 0;
        }else{
            timerClass.innerHTML = t;
        }
        },1000);
})