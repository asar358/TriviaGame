

var questions = [
    {
        question: "Entomology is the science that studies",
        answers: ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],
        correctAnswer: "Insects",
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        answers: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "Africa",
    },
    {
        question: "Garampani sanctuary is located at....",
        answers: ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"],
        correctAnswer: "Diphu, Assam",
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        answers: ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "Hitler party which came into power in 1933 is known as",
        answers: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
        correctAnswer: "Nazi Party",
    },
];

var currentQuestion = 0;

var correctAns = [];
var wrongAns = [];

$(document).ready(function () {
    $("#start-game").click(function () {
        startGame();
    })
    function startGame() {
        $('#question').text(questions[0].question);
        renderQuestions(0);
    }
    function renderQuestions(i) {
        for (let i = 0; i < questions[0].answers.length; i++) {
            var answer = questions[0].answers[i];
            var answerId = i + 1;
            $(`#btn${answerId}-container`).html(`<button id="btn${answerId}">${answer}</button>`);
        }
    }
    $('#btn-container').on('click', 'button', function () {
        event.preventDefault();
        var answerText = $(this).text();
        answerCheck(answerText);
    })
    function answerCheck(answer) {
        if (questions[currentQuestion].correctAnswer === answer) {
            alert("win");
            
           
        }
        else {
            alert("lose")
        }
    }
    
    
    // function setQuestion() {
    //     $('#question').text(questions[0][0]);
    //     $('#btn1').text(questions[i][1]);
    //     $('#btn2').text(questions[i][2]);
    //     $('#btn3').text(questions[i][3]);
    //     $('#btn4').text(questions[i][4]);
    // };
    // // setQuestion();

    // function nextQuestion() {
    //     $('#btn5').on('click', function () {
    //         i = i + 1;
    //     });
    // }
    // nextQuestion();


});







// for (var i = 0; i < questions.length; i++) {

//   };




























// ................................................................

// var qts1 = ["Entomology is the science that studies", "Behavior of human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks" ];
// var qts2 = ["Eritrea, which became the 182nd member of the UN in 1993, is in the continent of","Asia", "Africa", "Europe", "Australia"];
// var qts3 = ["Garampani sanctuary is located at....", "Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"];
// var qts4 = ["For which of the following disciplines is Nobel Prize awarded?", "Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"];
// var qts5 = ["Hitler party which came into power in 1933 is known as", "Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"];






// console.log(qts1);
// for (var i = 0; i < qts1.length; i++) {
// $('#qts').text('1.  ' + qts1[0]);
// var check1 = $(".checkmark1").text(qts1[1]);
// var check2 = $(".checkmark2").text(qts1[2]);
// var check3 = $(".checkmark3").text(qts1[3]);
// var check4 = $(".checkmark4").text(qts1[4]);

// if (userChoice = check2 ) {
//     alert("correct answer");
// }
// }








