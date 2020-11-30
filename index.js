var readLineSync = require("readline-sync");


console.log("Let's see how much do you know me?");
console.log("-1 for wrong answer and +4 for right answer!");

score = 0;

function askuser(myquestion, myans) {
    console.log();
    var ans = readLineSync.question(myquestion)
    if (ans == myans) {
        score = score + 4;
        console.log("score: ", score);
    } else {
        score = score - 1;
        console.log("score: ", score);
    }
}

askuser("Is my name Shubhang?", "yes");
askuser("Am I from Bareilly?", "yes");
askuser("Am I 18 years old?", "no");
askuser("Am I a Machine Learning Enthusiast?", "no");
askuser("What is my interest other than programming?", "photography");
console.log("Final Score: ", score);