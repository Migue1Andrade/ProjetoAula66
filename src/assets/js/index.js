const clock = document.querySelector('.clock');
const beggin = document.querySelector('.beggin');
const stoper = document.querySelector('.stoper');
const restart = document.querySelector('.restart');

let seconds = 0; 
let cont = 0; 
let timer; 
let data;

function hour(seconds) {
	data = new Date(seconds * 1000);
	
	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'GMT'
	});
};

function restartClock() {
	clearInterval(timer);

	seconds = seconds - seconds;
	clock.innerHTML = '00:00:00';
};

function startClock() {
	timer = setInterval(() => {
		seconds++; 
		clock.innerHTML = hour(seconds); 
	}, 1000);
};

beggin.addEventListener('click', function(event) {		
	while(cont !==1){
		startClock(); 

		cont++;
		return; 
	}
});

stoper.addEventListener('click', function(event) {
	clearInterval(timer); 

	cont = 0; 
});

restart.addEventListener('click', function(event) {
	restartClock();

	cont = 0; 
});
