

//array that holds each question object
var qaArray = [
    {q: "In what year did the AKG (American Kennel Club) register the chihuahua?", a1: 1946, a2: 1904, a3: 1923, a4: 1962, ca: 1904, co: "option2", image: "./assets/images/chiChariot.gif"},
    {q: "What country is widely accepted as the origin of the chihuahua?", a1: "China", a2: "Spain", a3: "Mexico", a4: "Brazil", ca: "Mexico", co: "option3", image: "./assets/images/chiTurtle.gif"},
    {q: "Which term is commonly used to describe a type of chihuahua?", a1: "Apple head", a2: "fawn head", a3: "prairie dog", a4: "bat ear", ca: "Apple head", co: "option1", image: "./assets/images/chiApple.gif"},
    {q: "Which city in the US owns a sports team named after the chihuahua?", a1: "Scottsdale", a2: "Pensacola", a3: "San Diego", a4: "El Paso", ca: "El Paso", co: "option4", image: "./assets/images/chiBaseball.gif"},
    {q: "Which TV show had a chihuahua as a character?", a1: "Alf", a2: "Tale Spin", a3: "Modern Family", a4: "Ren and Stimpy", ca: "Ren and Stimpy", co: "option4", image: "./assets/images/chiRen.gif"},
    {q: "How many years did the oldest Chihuahua live to be (on record)?", a1: 23, a2: 17, a3: 19, a4: 20, ca: 20, co: "option4", image: "./assets/images/chiOld.gif"},
    {q: "What was the real name of the chihuahua from the Taco Bell commercials?", a1: "Gidget", a2: "Megabyte", a3: "Killer", a4: "Poncho", ca: "Gidget", co: "option1", image: "./assets/images/chiTaco.gif"},
    {q: "Tito from Disney’s Oliver & Company was voiced by which of these actors?", a1: "Antonio Banderas", a2: "Reese Witherspoon", a3: "Penelope Cruz", a4: "Cheech Marin", ca: "Cheech Marin", co: "option4", image: "./assets/images/chiCheech.gif"},
    {q: "Which of these celebrities owns a chihuahua?", a1: "Conan O' Brien", a2: "Mickey Rourke", a3: "Snookie", a4: "Alicia Silverstone", ca: "Mickey Rourke", co: "option2", image: "./assets/images/chiMickey.jpg"},
    {q: "Which of these explorers most likely ate chihuahua for food?", a1: "Captain Meriweather Lewis", a2: "Juan Ponce de Leòn", a3: "Hernando de Soto", a4: "Amerigo Vespucci", ca: "Captain Meriweather Lewis", co: "option1", image: "./assets/images/chiFood.gif"},
];

var tempQaArray = qaArray;

//number for timer to start at
var number = 10;
//holds our current place on the timer
var intervalId;
//questions answered correctly score
var answeredCorrectScore = 0;
//questions unanswered score
var notAnsweredScore = 0;
//questions answered wrong score
var answeredWrongScore = 0;
//this varible is the iterator for looping through the array
var i = 0;

// when timer is done, this function is triggered to clear out the timer
function endTime() {
    console.log("Time's up");
    clearInterval(intervalId);
}

//function that keeps the timer running
function run() {
    intervalId = setInterval(decrement, 1000);
}

//function that displays the timer and checks for when it is over
function decrement() {
    number--;
    $("#clock").html("Time remaining: " + number);
    if (number === 0) {
        endTime();
        notAnsweredScore++;
        console.log(notAnsweredScore++);
        $(".container").empty();
        $(".container").append("<img src = " + qaArray[i].image + ">");
        $(".container").append("<h2>Time's Up!  The correct answer is " + qaArray[i].ca + "</h2>");
        different();
    }
}
// this function is the last one to run.  it display the three different scores and a start button to start over.  it also initializes the scores once the start button has been clicked
function finalScreen() {
    $(".container").empty();
    $(".container").append("<h2>Correct Answers: " + answeredCorrectScore + "</h2>");
    $(".container").append("<h2>Incorrect Answers: " + answeredWrongScore + "</h2>");
    $(".container").append("<h2>Questions not answered: " + notAnsweredScore + "</h2>");
    $(".container").append("<div class='row'><div class='col-3'></div><div class='col-6'><button id ='startAgain'type='button' class='btn btn-primary btn-block'>Start Over</button></div><div class='col-3'></div></div>");
    $(".container").append("<div class='row'><div class='col-12'><img src='./assets/images/chihuahuaBackground2.jpg'></div></div>");

    
    $("#startAgain").on("click",(function() {
        console.log("Game is starting");
        answeredCorrectScore = 0;
        notAnsweredScore = 0;
        answeredWrongScore = 0;
        i = 0;
        displayQuestion();
    }));
}
// this function waits 3 seconds and then triggers the next question 
function different() {
    setTimeout(displayQuestion, 3000);
}
// this function creates the HTML for the Q&A, but first empties out the container.  after displaying all of the questions and answers, it runs the condition to see if the answer is correctl
function displayQuestion() 
{
    i++;
    number = 10;
    run();
    if (i < qaArray.length)
    {

        $(".container").empty();
        // creates div with id=questionHere that will hold the question
        var questionDiv = $("<div class='row'><div class = 'col-3'></div><div class='col-6'id='questionHere'></div><div class = 'col-3'></div></div><form id='radioBox'>");
        // creates form div which creates the radio button and sets a value id of "option1"
        var answerDivA = $("<p><input type='radio' name='possibleAnswers' value='option1' class='radios'/></p><p class='radioAnswer'id='answerOne'></p>");
        var answerDivB = $("<p><input type='radio' name='possibleAnswers' value='option2' class='radios'/></p><p class='radioAnswer'id='answerTwo'></p>");
        var answerDivC = $("<p><input type='radio' name='possibleAnswers' value='option3' class='radios'/></p><p class='radioAnswer'id='answerThree'></p>");
        var answerDivD = $("<p><input type='radio' name='possibleAnswers' value='option4' class='radios' checked/></p><p class='radioAnswer'id='answerFour'</p></form>");
        var submit = $("<div class='row'><div class='col-3'></div><div class='col-6'><button type='button' class='btn btn-primary btn-block'>SUBMIT</button></div><div class='col-3'></div></div>");

        //adds the divs we created above to the container div
        $(".container").append(questionDiv, answerDivA, answerDivB, answerDivC, answerDivD, submit);
        //adds the text from the array question index to the questionDiv
        $("#questionHere").text(qaArray[i].q);
        //adds the text from the array answer1 index to the 1st answerDiv
        $("#answerOne").text(qaArray[i].a1);
        $("#answerTwo").text(qaArray[i].a2);
        $("#answerThree").text(qaArray[i].a3);
        $("#answerFour").text(qaArray[i].a4);
        //once the Submit button is hit here, function checks to see if it's the right/wrong answer, updates the scores, diplays a message and a gif, cues the setTimeout function
        
        $("button").click(function()
            {
                    //assigns value of radio button selected to variable selectedValue
                    var userAnswer = $("input[name='possibleAnswers']:checked").val();
                    console.log(userAnswer);
                    $(".container").empty();
                    endTime();
                    $(".container").append("<div class='card' style='width: 18rem;'><img 'card-img-top' src = " + qaArray[i].image + " alt='Card image cap'>");
//if the user guesses correctly, increase the answeredCorrect score and display "Correct!" along with a gif
                    if (userAnswer === qaArray[i].co) {
                        answeredCorrectScore++;
                        console.log(answeredCorrectScore);
                        $(".container").append("<h2>Correct!</h2>");
                        different();
                    } 
//if the user guesses incorrectly, the answeredWrongScore increases and displays" Note!" along with the correct answer and a gif"
                    else {
                    answeredWrongScore++;
                    console.log(answeredWrongScore);
                    endTime();
                    $(".container").append("<h2>Nope!  The correct answer is " + qaArray[i].ca + "</h2>");
                    different();
                    }
                    
                        
            
            });
    }
    else {
        endTime();
        finalScreen();
    }
}


/// GAME STARTS HERE

$(document).ready(function() {

    //when start button is clicked, remove the start button and console "game is starting".
    $("#startButton").on("click",(function() {
        $("#startButton").remove();
        console.log("Game is starting");
        $("body").css('background-image', 'none');
        $("body").prepend("<div class='jumbotron'><h1 class='display-4' id= 'clock'></h1></div>");
        $(".container").css({"margin-top": "0", "padding": "0"});
        displayQuestion();
        
        
    }));

});