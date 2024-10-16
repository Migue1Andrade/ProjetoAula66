 const clock = document.querySelector('.clock');
 const beggin = document.querySelector('.beggin');
 const stoper = document.querySelector('.stoper');
 const restart = document.querySelector('.restart');
 let seconds = 0; 
 let timer; 

 function hour(seconds){
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}  

    function restartClock(){
        clearInterval(timer);
        seconds = seconds - seconds;
        clock.innerHTML = '00:00:00';
        startClock(); 
    }
 
 function startClock() {
     timer = setInterval(() => {
        seconds++; 
        clock.innerHTML = hour(seconds); 
    }, 1000);
 }  

 beggin.addEventListener('click', function(event) {
    startClock(); 
 })

 stoper.addEventListener('click', function(event) {
    clearInterval(timer); 
 })

 restart.addEventListener('click', function(event) {
    restartClock(); 
 })
