// let d1 = document.querySelector('.d1')

// let savol = {
//     question1: 2+2, answer1:4,
//     question2: 12/3, answer2:4,
//     question3: 5*4, answer3:20,
//     question4: 44-4, answer4:4,
// }

// let p = document.createElement('p')



// function start(start) {
//     d1.appendChild(p)
// }


const questions = [
    { question: '5 + 3?', answer: 8 },
    { question: '7 - 2?', answer: 5 },
    { question: '4 * 6?', answer: 24 },
    { question: '12 / 3?', answer: 4 }
  ];

  let currentQuestionIndex = 0;

  function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('answerButton').style.display = 'block, center';
    showQuestion();
  }

  function showQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = '';
  }

  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    let p = document.createElement('p')
    let bod = document.querySelector(".container")
    let br = document.querySelector("br")
  

    if (userAnswer === correctAnswer) {
        bod.appendChild(p)
        p.innerHTML = 'togri'
        bod.appendChild(br)
    } else {
         bod.appendChild(p)
        p.innerHTML = 'notogri'
        bod.appendChild(br)
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }


 
  