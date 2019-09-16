$(document).ready(function() {

    //object with the trivia questions and answeers
    var questions = {
        zero: {
            question: "Where does Thomas most commonly get dinner?",
            answers: ["Chipotle", "Chik fil a", "Chopt", "Guasaca"],
            correct: "Chopt"
        },
        one: {
             question: "Where did Thomas go to school?",
            answers: ["Elon", "NC State", "High Point", "Davidson"],
            correct: "Elon"
        },
    
          three: {
             question: "What is Thomas's Favorite College Basketball Team?",
            answers: ["UC", "Xavier", "Elon", "Duke"],
            correct: "Xavier"
        },
    
          four: {
             question: "What is Thomas's middle name?",
            answers: ["Quinn", "James", "George", "Ralph"],
            correct: "Quinn"
        },
    
          five: {
             question: "What is Thomas's favorite number?",
            answers: ["Two", "Five", "Six", "Nine"],
            correct: "Nine"
        },
    
          six: {
             question: "What is Thomas's favorite food?",
            answers: ["Pizza", "Soup", "Pasta", "Chicken"],
            correct: "Soup"
        },
    
          seven: {
             question: "Who is Thomas's favorite musician?",
            answers: ["Chance the Rapper", "Jon Bellion", "Coldplay", "Post Malone"],
            correct: "Jon Bellion"
        },
    
          eight: {
             question: "Where is Thomas's dream vacation?",
            answers: ["South Africa", "China", "Japan", "Germany"],
            correct: "South Africa"
        },
    
          nine: {
             question: "Where does Thomas work?",
            answers: ["VisionPoint", "ROI Revolution", "Cisco", "Imagequix"],
            correct: "ROI Revolution"
        },
    
          ten: {
             question: "What is Thomas's favorte NBA Team?",
            answers: ["Pelicans", "Cavs", "Lakers", "Hornets"],
            correct: "Pelicans"
        },
    };
    
    //Div variables  for keeping track
    var rightDiv = $("<div class='rightAns'></div>");

    var answerDiv = $("<div class='answers'></div>");

    var timerDiv = $("<div class='countdown'><h3></h3></div>");

    var questionDiv = $("<div class='question'><h3></h3></div>");
    
    
    //object keys to return questions in order
   
    var keys = Object.keys(questions);
    var key = keys[n];
    var time = 30;
    var n = 0;

    
    //setup of the game 
    function setup() {
        $(".start").css("display", "none");
            var correct = 0;
             var incorrect = 0;
             var timeout = 0;
                  n = 0;
               key = keys[n];
    //reset of the game
        var reset = function() {
            time = 30;
            $(".rightAns").empty();
            $(".rightAns").remove();
            $(".main").append(timerDiv);
            $(".countdown h3").html("TIME REMAINING: " + time);
            $(".main").append(questionDiv);
            $(".main").append(answerDiv);
        }
    
    reset();
    
    //function to begin make q's work
    function showQA() {
        $(".question h3").html(questions[key].question);
    for (var i = 0; i < questions[key].answers.length; i++) {
     $(".answers").append("<p class='answer'>" + questions[key].answers[i] + "<p>");
        }     
        $(".answers p").on("click", function() {
    var selected = $(this).text();
    
     //if then: if question right show this, if wrong show that
                if (selected === questions[key].correct) {
                         clearInterval(counter);
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers p").remove();
                    $(answerDiv).remove();
                       $(".main").append(rightDiv);
                    $(".rightAns").text("THOMAS TERRIFIC! YOU ARE CORRECT!");
                    correct++;
                } else {
                    clearInterval(counter);
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers p").remove();
                    $(answerDiv).remove();
                    $(".main").append(rightDiv);
                    $(".rightAns").text("NO SORRY WRONG! THE CORRECT ANSWER WAS: " + questions[key].correct);
                    incorrect++;
                }
                n++;
                key = keys[n];

                    if (checkIfLast()) {
                        displayFinalScore();
    
                    } else {
                        setTimeout(countReset, 3000);
                        setTimeout(reset, 3000);
                        setTimeout(showQA, 3000);
                    }
        });
    }
    
    showQA();
    
    var counter = setInterval(count, 500);
    
    //Time remaining for each q
    function count() {
        time--
        $(".countdown h3").html("TIME REMAINING: " + time);
         
        if (time < 1) {
        clearInterval(counter);
        $(timerDiv).remove();
        $(questionDiv).remove();
        $(".answers p").remove();
        $(answerDiv).remove();
        $(".main").append(rightDiv);
        $(".rightAns").html("OUT OF TIME! THE CORRECT ANSWER WAS: " + questions[key].correct);
        timeout++;
        n++;
        key = keys[n];
        
            if (checkIfLast()) {
            displayFinalScore();
            } else {
            setTimeout(countReset, 3000);
            setTimeout(reset, 3000);
            setTimeout(showQA, 3000);
            }
        }
    }
    
    function checkIfLast() {
        if (key === undefined) {
        return true;
        }
        return false;
        }
    
    //timer for message after choosing answer
     function countReset() {
        counter = setInterval(count, 200);
    }
    
    
    //final score showing
    function displayFinalScore() {
        $(".rightAns").remove();
        $(".start").css("margin-top", "30px");
        $(".start").css("display", "inline");
        $(".main").prepend("<h2>UNANSWERED: " + timeout + "</h2>");
        $(".main").prepend("<h2>INCORRECT: " + incorrect + "</h2>");
        $(".main").prepend("<h2>CORRECT: " + correct + "</h2>");
        }
    };
    
    $(document).on("click", ".start", setup);
    
    });