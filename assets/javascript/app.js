var trivia = {
	//array of objects containing questions, answers, and index of solution
	questions: [
		{
			question: "What does a Rawst Berry do?",
			answers: [
				"Heal Burns",
				"Increase Pokemon Happiness",
				"Heal Freeze",
				"Nothing, it's just a Poffin ingredient"
			],
			solution: 0
		},
		{
			question: "Which of these is NOT a Psychic-type move?",
			answers: [
				"Rest",
				"Agility",
				"Psych-Up",
				"Imprison"
			],
			solution: 2
		},
		{
			question: "Which of these Pokemon was introduced in Generation 4 (Diamond & Pearl)?",
			answers: [
				"Bonsly",
				"Skitty",
				"Igglybuff",
				"Patrat"
			],
			solution: 1
		},
		{
			question: "Which of these type combinations has never been seen on a Pokemon before?",
			answers: [
				"Fire / Water",
				"Normal / Dragon",
				"Electric / Fire",
				"Bug / Dark"
			],
			solution: 3
		},
		{
			question: "Which of these is NOT a method of evolution for at least one Pokemon?",
			answers: [
				"Trading for a specific other Pokemon",
				"Trading while above a certain level of Happiness",
				"Leveling up with a specific other Pokemon in the party",
				"Leveling up while the game system is upside-down"
			],
			solution: 1
		},
		{
			question: "How many forms does Unown have?",
			answers: [
				"26",
				"27",
				"28",
				"29"
			],
			solution: 2
		},
		{
			question: "Which of these Pokemon is NOT a middle evolution?",
			answers: [
				"Jigglypuff",
				"Linoone",
				"Roselia",
				"Nosepass"
			],
			solution: 0
		},
		{
			question: "Which of these Pokemon is NOT a Steel type?",
			answers: [
				"Togedemaru",
				"Jirachi",
				"Genesect",
				"Porygon-Z"
			],
			solution: 3
		},
		{
			question: "Which of these is NOT the name of a real Pokemon?",
			answers: [
				"Ignychus",
				"Xurkitree",
				"Blacephalon",
				"Cryogonal"
			],
			solution: 0
		},
		{
			question: "Which of these moves has the highest Attack Power?",
			answers: [
				"Self-Destruct",
				"Explosion",
				"Hyper Beam",
				"V-Create"
			],
			solution: 1
		},
	],
	//right and wrong answer counters
	rightCount: 0,
	wrongCount: 0,
	//chosen answer
	chosenAnswer: "",
	//index of current question
	currentIndex: 0,
	//object of current question (i.e. questions[currentIndex])
	currentQuestion: {},

	//randomizes question order
	randomizeOrder: function() {
		var currentIndex = this.questions.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = this.questions[currentIndex];
			this.questions[currentIndex] = this.questions[randomIndex];
			this.questions[randomIndex] = temporaryValue;
		}
	},

	//display new set of question and answers
	showQuestion: function() {
		//set currentQuestion
		this.currentQuestion = this.questions[this.currentIndex];

		//display question on page
		$("#question").text(this.currentQuestion.question);

		//display answers on page
		for (var i = 0; i < this.currentQuestion.answers.length; i++) {
			var newAns = $("<a href='#' class='answer'></a>").text(this.currentQuestion.answers[i]);
			$("#answers").append(newAns);
		}
	},

	//check for right/wrong answer and move to next question
	progressGame: function() {
		//CORRECT ANSWER LOGIC:
		if (this.chosenAnswer == this.currentQuestion.answers[this.currentQuestion.solution]) {
			this.rightCount++;
			this.currentIndex++;

			//remove answers from game area and hide it
			$("#answers").empty();
			$("#game-area").attr("class", "hidden");

			//add text to result area and show it
			$("#result-area").append("<h2>").text("Correct! You picked the right answer.");
			$("#result-area").attr("class", "");
			
			//run this after 5 seconds
			setTimeout(function() {
				//if at the end of questions array
				if (trivia.currentIndex >= trivia.questions.length) {
					trivia.endGame();
				}
				
				//if not at the end
				else {
					//hide result area and show game area
					$("#result-area").empty();
					$("#result-area").attr("class", "hidden");
					$("#game-area").attr("class", "");
					
					//show next question
					trivia.showQuestion();
				}
			}, 5000);
		}
		
		//WRONG ANSWER / TIMEOUT LOGIC:
		else {
			this.wrongCount++;
			this.currentIndex++;
			
			//remove answers from game area and hide it
			$("#answers").empty();
			$("#game-area").attr("class", "hidden");
	
			//add text to result area and show it
			$("#result-area").append("<h2>").text("Incorrect! The correct answer was: '" +this.currentQuestion.answers[this.currentQuestion.solution] +"'");
			$("#result-area").attr("class", "");

			//run this after 5 seconds
			setTimeout(function() {
				//if at the end of questions array
				if (trivia.currentIndex >= trivia.questions.length) {
					trivia.endGame();
				}
				
				//if not at the end
				else {
					//hide result area and show game area
					$("#result-area").empty();
					$("#result-area").attr("class", "hidden");
					$("#game-area").attr("class", "");
	
					//show next question
					trivia.showQuestion();
				}
			}, 5000);
		}
	},

	//show end screen
	endGame: function() {

	},
}
$(document).ready(function() {
	//start game
	trivia.showQuestion();

	//listener for clicking on an answer
	$("body").on("click", ".answer", function() {
		trivia.chosenAnswer = $(this).text();
		trivia.progressGame();
	});
});