const quizDB = [
    {
        question: "1: What is the full form of HTML?",
        a: "Hyped Markup Language",
        b: "Hype Marka Language",
        c: "Hypertext Markup Language",
        d: "Hyper Markup Language",
        ans: "ans3" //my answer is in the form of id
    },
    {
        question: "2: What is the full form of CSS?",
        a: "Cas Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Super Sheets",
        d: "Cascadind Screen Sheets",
        ans: "ans2"
    },
    {
        question: "3: How many types of heading does an HTML containe?",
        a: 4,
        b: 5,
        c: 6,
        d: 7,
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#button');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question; //grabbing questions on screen

    option1.innerText = questionList.a;  // grabbing answers on screen
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();  //on my screen 1st question along with options will gonna display out

const getCheckAnswer = () => {   //going to return id of the checked element because ultimately i am going to check checked elem id with my real answer which is also in the form of id
    let answer;

    answers.forEach((currentAnsElem) => {
        if (currentAnsElem.checked) {
            answer = currentAnsElem.id;
        }
    });
    return answer;

}

const deSelectAll = () => {
    answers.forEach((currentAnsElem) => {
        currentAnsElem.checked = false;
    })
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer); // you can check whether you are getting id of the checked element or not

    //now i need to check given id which we got(checked item id) with our ans which is stored in quizDB,is both the id same or not
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    //after knowing the result or we can say after selecting options we can increment our questions
    questionCount++;

    deSelectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else{
      showScore.innerHTML = `
      <h3> You scored ${score}/${quizDB.length} </h3>
       <button class="btn" onclick="location.reload()">Play Again</button>  
      `;
       //location.reload will again reload your page

      showScore.classList.remove('scoreArea');
    }
});


