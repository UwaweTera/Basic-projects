
//clock


setInterval(myTime,500);

function myTime(){
	var d = new Date();

	var hour = d.getHours();
	var minut = d.getMinutes();
	var sec = d.getSeconds();

	var amPm = (hour < 12) ? "AM" : "PM";
	if (hour >12) {
		hour = hour - 12;
	}
	if (hour < 10) {
		hour = "0"+hour;
	}
 	if (minut < 10) {
		minut = "0" + minut;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}

	document.getElementById("clock").innerHTML = hour + " : " + minut + ": " + sec + " " +amPm;
}
