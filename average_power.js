/*Vessela Lytle/547557/COP2801
Write a program called average_power.js. We will simulate taking current and voltage 
readings from a circuit and calculating the average power of the circuit. 
The program should create an array called volts and populate it with 24 random 
numbers between 5 and 20. Next create an array called amps and populate it with 
24 random numbers between 1 and 10. These are your current readings for every hour 
for a given day. */


console.log ("Hour"+ "	" + "Current" + "	" +"Voltage"+ "	" + "Power");
var i = 1;

while (i<25){

  	var v = Math.floor(Math.random(5)*20)+1;
	var a = Math.floor(Math.random(1)*10)+1;
  	var p = v * a;
  	console.log(i,"	",a,"	",v,"	",p);
	i++;
    
}
