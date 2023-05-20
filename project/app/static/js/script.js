var questions = [
  {
    text: "대동제를 즐기러 온 당신, ",
    choices: [],
  },
  {
    text: "내가 더 좋아하는 술자리는?",
    choices: ["술 게임을 하는 자리🕹️", "딥토크를 하는 자리💬"],
  },
  {
    text: "저녁을 먹고 가야하는 장소를 고른다면?",
    choices: ["춘자", "카페☕️"],
  },
  {
    text: "더 좋아하는 음악 장르는?",
    choices: ["힙합🎧", "발라드🎵"],
  },
  {
    text: "내가 생각하는 미팅의 목적은?",
    choices: ["재미있는 분위기🥳", "이성과의 만남🥰"],
  },
  {
    text: "나는 새로운 장소에 갔을 때?",
    choices: ["새로운 친구를 만나볼래👯", "운명적 사랑을 찾아볼래💏"],
  },
  {
    text: "지금 더 만들고 싶은 인간 관계는?",
    choices: ["친구👯", "연인💏"],
  },
  {
    text: "내가 가려는 맛집이 웨이팅을 해야하는 식당이라면?",
    choices: ["웨이팅 해서라도 경험해볼래!🏋️", "웨이팅은 못해…💦"],
  },
  {
    text: "콘서트나 공연을 보기 위해 기다리는 시간이 나는?",
    choices: ["괜찮아!👍", "아깝다ㅠㅠ😭"],
  },
  {
    text: "나는 좋아하는 걸 위해 =>",
    choices: ["꽤 긴 시간을 기다릴 수 있다🙆", "기다리기 싫어!🙅"],
  },
];

// Rest of the code...

var currentQuestionIndex = 0;
var questionSection = document.getElementById("questionSection");
var questionTitle = document.getElementById("questionTitle");
var questionText = document.getElementById("questionText");
var choicesSection = document.getElementById("choicesSection");
var nextButton = document.getElementById("nextButton");

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.title;
  questionText.textContent = currentQuestion.text;

  choicesSection.innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    var choiceElement = document.createElement("input");
    choiceElement.setAttribute("type", "radio");
    choiceElement.setAttribute("name", "answer");
    choiceElement.setAttribute("value", choice);

    var choiceLabel = document.createElement("label");
    choiceLabel.textContent = choice;

    var choiceContainer = document.createElement("div");
    choiceContainer.appendChild(choiceElement);
    choiceContainer.appendChild(choiceLabel);

    choicesSection.appendChild(choiceContainer);
  });
}

function handleNextButtonClick() {
  // Get the selected choice
  var selectedChoice = document.querySelector('input[name="answer"]:checked');

  if (selectedChoice) {
    var answer = selectedChoice.value;
    console.log("Selected answer:", answer);
    // You can add code here to process the user's answer

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      // No more questions, survey completed
      questionSection.style.display = "none";
      // You can add code here to display a completion message or redirect to a thank you page
    }
  } else {
    alert("Please select an answer.");
  }
}

// Attach event listener to the next button
nextButton.addEventListener("click", handleNextButtonClick);

// Initial question display
displayQuestion();
