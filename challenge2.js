// creates interface that allows to read input from the console and writes output on the console

const readline=require("readline");
const rl=readline.createInterface(
    {
        input: process.stdin,
        output:process.stdout,
    }
)
//Declaring a function

function checkSpeed(speed){
  const speedKilometres=70;
  const speedLimit=5;
  const maxPoints=12;

// if...else statement

  if(speed<=speedKilometres){
    console.log("OK");
  }
  else {
    const demeritPoints = Math.floor((speed - speedKilometres)/speedLimit);   
    if (demeritPoints > maxPoints) {
      console.log("License suspended");
    } else {
      console.log("Points:", demeritPoints);
  }
}
}
 
  //prompting input
  
 rl.question("Enter speed limit:", (input) => {
  const speed = parseInt(input);
  if (isNaN(speed)) {
    console.log('Please enter a valid number for the speed.');
  } else {
    checkSpeed(speed);
  }
 rl.close();
 });