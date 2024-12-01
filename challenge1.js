
// The readline is an built-in interface that allows reading a stream(like process stdin) on a line-by-line basis
const readline=require("readline");
const rl=readline.createInterface(
    {
        input: process.stdin,
        output:process.stdout,
    }
)

//Declaring a function
function studentmarks(marks){

// if...else statements
 if(marks<0 || marks>=100){
    return "invalid input"
 }

     else if (marks>79){
        return 'A';
    }
    else if(marks>=60){
        return 'B';
    }
    else if(marks>=49 ){
        return 'C';

    }
    else if(marks>=40){
         return 'D';
    }
    else{
        return 'E';
    }

}

//prompting input from the user
rl.question("Enter the student's marks(0-100):",(input)=>{const marks=parseInt(input);
    if(isNaN(marks)){console.log("Invalid input. Please enter a valid number.");}
    else{
console.log(`The student grade is: ${studentmarks(marks)}`);}
rl.close();
});


