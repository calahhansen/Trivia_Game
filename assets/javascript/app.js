function unhide() {
  document.getElementById("quiz").style.display = "block";
}

let timeleft = 12;
let downloadTimer = setInterval(function () {
  document.getElementById("time").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if (timeleft < 0) {
    clearInterval(downloadTimer);
    console.log("Finished");
    document.getElementById("time").innerHTML = "Finished";
  }
}, 1000);

const myQuestions = [
  {
    question: "Q1. What is the purpose of the “groove” on a needle?",
    answers: {
      a: "Allows you to 'get in the mood' for sewing",
      b: "Reduces the chance of the needle breaking",
      c: "Glides easily through fabric",
      d: "Allows thread to lie close to the needle",
    },
    correctAnswer: "d"
  },
  {
    question: "Q2. Selvage runs parallel to what grain in fabric?",
    answers: {
      a: "Wheat",
      b: "Warp",
      c: "Amaranthe",
      d: "Weft",
    },
    correctAnswer: "b"
  },
  {
    question: "Q3. What is finger pressing?",
    answers: {
      a: "Pinky Promise",
      b: "Press a seam with your finger",
      c: "Sewing machine's presser foot",
      d: "Thumb Wars",
    },
    correctAnswer: "b"
  },
  {
    question: "Q4. In quilting, what is meant by 'loft'?",
    answers: {
      a: "Puffiness",
      b: "Hip to Gable",
      c: "Height of throw",
      d: "Dormer",
    },
    correctAnswer: "a"
  },
  {
    question: "Q5. 'Quilt' is derived from the latin word culcita, which means?",
    answers: {
      a: "Small Covering",
      b: "Cushion Star",
      c: "Crazy blanket",
      d: "Stuffed Sack",
    },
    correctAnswer: "d"
  },
  {
    question: "Q6. The first spools of thread were made from?",
    answers: {
      a: "Birch wood",
      b: "Corks",
      c: "Cardboard",
      d: "Sticks and Stones",
    },
    correctAnswer: "a"
  },
];



function makeGame(questions, qContainer, rContainer) {

  function showQs(questions, qContainer) {
    let output = [];
    let answers;

    for (let i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          '<label>'
          + '<input type="radio" name="question' + i + '" value="' + letter + '">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
    qContainer.innerHTML = output.join('');
  }

  function showRs(questions, qContainer, rContainer) {
    let aContainers = qContainer.querySelectorAll('.answers');

    const userAnswer = '';
    const numCorrect = 0;

    for(let i=0; i<questions.length; i++) {
      userAnswer = (aContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        aContainers[i].style.color = 'lightgreen';
      }
      else {
        aContainers[i].style.color = 'red';
      }
    }
    rContainer.innerHTML = numCorrect + ' out of ' + questions.length;

  }

  showQs(questions, qContainer);
  console.log(showQs);

  showRs(questions, qContainer, rContainer);
  console.log(showRs);
}