
function getStudentGrade() {
  let mark;

  do {
    mark = parseInt(prompt("Enter the student's mark (0-100):"));

    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("Invalid input. Please enter a number between 0 and 100.");
    }
  } while (isNaN(mark) || mark < 0 || mark > 100);

  let grade;

  if (mark > 79) {
    grade = 'A';
  } else if (mark >= 60) {
    grade = 'B';
  } else if (mark >= 49) {
    grade = 'C';
  } else if (mark >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(grade);
}