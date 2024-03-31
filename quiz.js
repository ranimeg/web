const quizData = [
    {
      question: "Dans quel film de science-fiction un humain se bat-il contre des machines appelées Terminators envoyées du futur pour le tuer ?",
      answers: ["Blade Runner", "Matrix", "Terminator", "Alien"],
      correctAnswer: "Terminator"
    },
    {
      question: "Qui est l'auteur de la série de romans de science-fiction 'Fondation' ?",
      answers: ["Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke", "Ray Bradbury"],
      correctAnswer: "Isaac Asimov"
    },
    {
      question: "Quel film de science-fiction met en scène une équipe de scientifiques chargée d'explorer une planète lointaine appelée Pandora ?",
      answers: ["Interstellar", "Avatar", "Inception", "Gravity"],
      correctAnswer: "Avatar"
    },
    {
      question: "Quel est le titre du premier roman de la série 'Dune' écrit par Frank Herbert ?",
      answers: ["La Maison des mères", "Dune", "L'Étoile du désert", "Le Messie de Dune"],
      correctAnswer: "Dune"
    },
    {
      question: "Qui a écrit le roman de science-fiction '2001: l'Odyssée de l'espace', qui a ensuite été adapté en film par Stanley Kubrick ?",
      answers: ["Philip K. Dick", "Arthur C. Clarke", "Isaac Asimov", "Ray Bradbury"],
      correctAnswer: "Arthur C. Clarke"
    }
];

  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const nextButton = document.getElementById('nextButton');
  const resultElement = document.getElementById('result');
  const feedbackElement = document.getElementById('feedback');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('answer');
      button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correctAnswer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.classList.add('correct');
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add('incorrect');
    }
    answerButtons.querySelectorAll('.answer').forEach(button => {
      button.disabled = true;
    });
    nextButton.classList.remove('hide');
  }
  
  function showResult() {
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
      feedbackElement.textContent = '';
      feedbackElement.classList.remove('correct', 'incorrect');
      nextButton.classList.add('hide');
    } else {
      showResult();
      nextButton.disabled = true;
      scoreElement.classList.remove('hide');
    }
  });
  
  showQuestion();
  