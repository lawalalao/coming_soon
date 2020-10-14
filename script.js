const countdown = document.querySelector('.countdown');

//Set Launch Date
const launchDate = new Date('Dec 26, 2020 07:00:00').getTime();

//Update every second

const interval = setInterval(() => {

//Get Today's date and time (ms)
const now = new Date().getTime();
// Distance from now to the launch date
 const distance = launchDate - now;
 console.log(distance)

 // Time Calculations

 const days = Math.floor(distance / (1000* 60 * 60 * 24));
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
 const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 //Display the results

 countdown.innerHTML = `
 
       <div>${days}<span>Days</span></div>
       <div>${hours}<span>Hours</span></div>
       <div>${mins}<span>Minutes</span></div>
       <div>${seconds}<span>Seconds</span></div>
 `
//if launch date passed

if(distance < 0) {

    //Stop Countdown 

    clearInterval(interval);
    //Style and Output some text

    countdown.style.color = 'purple'; 
    countdown.innerHTML = 'Launched!';
}

}, 1000);
