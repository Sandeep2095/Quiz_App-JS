const quizData = [
	{
		question: '1. Which Language runs in web browser?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question:
			'2. Which function is used to serialize an object into a JSON string in Javascript?',
		a: 'stringify()',
		b: 'parse()',
		c: 'convert()',
		d: 'All of the above',
		correct: 'a',
	},
	{
		question: '3. What does the ‘toLocateString()’ method do in JS?',
		a: 'Return a localised object representation',
		b: 'Return a Parsed String',
		c: 'Return a localised object representation of an object',
		d: 'None of the above',
		correct: 'c',
	},
	{
		question: '4. What Year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
	{
		question: '5. Javascript is an _______ language?',
		a: 'Object-Oriented',
		b: 'Object-Based',
		c: 'Procedural',
		d: 'None Of these Above',
		correct: 'a',
	},
	{
		question:
			'6. Which of the following methods is used to access HTML elements using Javascript?',
		a: 'getElementById()',
		b: 'getElementByClassName()',
		c: 'Both A & B',
		d: 'None of the above',
		correct: 'c',
	},
	{
		question:
			'7. Upon encountering empty statements, what does the Javascript Interpreter do?',
		a: 'Throws an error',
		b: 'Ignores the statements',
		c: 'Gives a warning',
		d: 'None of the above',
		correct: 'b',
	},
	{
		question:
			'8. Which of the following methods can be used to display data in some form using Javascript?',
		a: 'console.log()',
		b: 'document.write()',
		c: 'window.alert()',
		d: 'All of the Above',
		correct: 'd',
	},
	{
		question:
			'9. What keyword is used to check whether a given property is valid or not?',
		a: 'in',
		b: 'is in',
		c: 'exists',
		d: 'lies',
		correct: 'a',
	},
	{
		question:
			'10. What will be the output of the following code snippet? Print(typeof(Nan));',
		a: 'Object',
		b: 'Number',
		c: 'String',
		d: 'All of the Above',
		correct: 'b',
	},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; // bcoz the questions are in array.
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
	answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEls) => {
		if (answerEls.checked) {
			answer = answerEls.id;
		}
	});

	return answer;
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
			<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
			<button onClick='location.reload()'>Reload</button> 
			`;
		}
	}
});
