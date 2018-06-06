var trivia = {
	//array of objects containing questions, answers, and solutions
	questions: [
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
		{
			question: "",
			answers: "",
			solution: ""
		},
	],
	//right and wrong answer counters
	rightAnswers: 0,
	wrongAnswers: 0,
	//index of current question
	currentQuestion: 0,

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
}