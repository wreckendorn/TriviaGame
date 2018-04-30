

//array that holds each question object
var qaArray = [
    {q: "In what year did the AKG (American Kennel Club) register the chihuahua?", a1: 1946, a2: 1904, a3: 1923, a4: 1962, ca: 1904},
    {q: "What country is widely accepted as the origin of the chihuahua?", a1: "China", a2: "Spain", a3: "Mexico", a4: "Brazil", ca: "Mexico"},
    {q: "Which term is commonly used to describe a type of chihuahua?", a1: "Apple head", a2: "fawn head", a3: "prairie dog", a4: "bat ear", ca: "Apple head"},
    {q: "Which city in the US owns a sports team named after the chihuahua?", a1: "Scottsdale", a2: "Pensacola", a3: "San Diego", a4: "El Paso", ca: "El Paso"},
    {q: "Which TV show had a chihuahua as a character?", a1: "Alf", a2: "Tale Spin", a3: "Modern Family", a4: "Ren and Stimpy", ca: "Ren and Stimpy"},
    {q: "How many years did the oldest Chihuahua live to be (on record)?", a1: 23, a2: 17, a3: 19, a4: 20, ca: 20},
    {q: "What was the real name of the chihuahua from the Taco Bell commercials?", a1: "Gidget", a2: "Megabyte", a3: "Killer", a4: "Poncho", ca: "Gidget"},
    {q: "Tito from Disney’s Oliver & Company was voiced by which of these actors?", a1: "Antonio Banderas", a2: "Reese Witherspoon", a3: "Penelope Cruz", a4: "Cheech Marin", ca: "Cheech Marin"},
    {q: "Which of these celebrities owns a chihuahua?", a1: "Conan O' Brien", a2: "Mickey Rourke", a3: "Snookie", a4: "Alicia Silverstone", ca: "Mickey Rourke"},
    {q: "Which of these explorers most likely ate chihuahua for food?", a1: "Captain Meriweather Lewis", a2: "Juan Ponce de Leòn", a3: "Hernando de Soto", a4: "Amerigo Vespucci", ca: "Captain Meriweather Lewis"},
];

//number for timer to start at
var number = 60;
//holds our current place on the timer
var intervalId;
//questions answered correctly score
var qacScore;
//questions unanswered score
var quaScore;
//questions answered wrong score
var qawScore;

// when timer is done, this function is triggered.
function endGame() {
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
    $("#clock").html(number);
    console.log(number);
    if (number === 0) {
        endGame();
    }
}

function displayQuestion() {
    $("#questionHere").text(qaArray[0].q);
    $("#answerOne").text(qaArray[0].a1);
    $("#answerTwo").text(qaArray[0].a2);
    $("#answerThree").text(qaArray[0].a3);
    $("#answerFour").text(qaArray[0].a4);
//this is working, but I want to create these elements dynamically here since there's going to be ten sets of these.  will use clone(), set a for loop, and then use i to go through the array for each.
};
// GAME STARTS HERE

$("#startButton").on("click",(function() {
    $("#startButton").remove();
    console.log("Game is starting");
    displayQuestion();
    run();
}));