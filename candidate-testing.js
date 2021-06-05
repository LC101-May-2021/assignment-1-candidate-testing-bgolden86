const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ""; 
let correctAnswer = "";
let candidateAnswer = [];
let questions = ["Who was the first American woman in space?" , "True or false: 5 kilometer == 5000 meters ?" , "(5 + 3)/2*10 = ?" ,"Given the array [8, 'orbit', 'Trajectory', 45], what entry is at index 2 ?" , "What is the minimum crew size for the ISS ?"];
let correctAnswers = ["Sally Ride" , "true" , "40" , "Trajectory" , "3"]; 
let candidateAnswers = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
	let name = input.question("Candidate name: ");
	return name;
}




function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
  let answer = input.question((i + 1) + ") " + questions[i] + " ");
	candidateAnswer.push(answer);
	console.log(`Your Answer: ${candidateAnswer[i]}`);
	console.log(`Correct Answer: ${correctAnswers[i]}`);
	console.log();
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
	let grade = 0;
	let correct = 0; 
	let i = 0
	for (i = 0; i < questions.length; i ++) {
		if(candidateAnswer[i] == correctAnswers[i]){
			grade = grade + 10;
			correct++;
		}
	}

  console.log(">>> Overall Grade: " + grade + "% (" + correct + " of " + questions.length + " responses correct) <<<" );
	if(grade >= 80){
		console.log(">>> Status: PASSED <<<");
	}
	else{
		console.log(">>> Status: FAILED <<<");
	}
  return grade; 
 }


function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
	
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};