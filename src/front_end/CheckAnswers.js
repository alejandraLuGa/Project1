const sum = require ('./qAndA')
var score = 0

function checkAnswer (answer,list1,c) {
    var index = 0
    for (var i = 0; i < list1[c-1]["choices"].length; i++){
        if (list1[c-1]["correct"] == list1[c-1]["choices"][i]){
            index = i
        }
    }
    if (index == 0 && answer == "y1"){
        score += 5
    }
    else if (index == 1 && answer == "y2"){
        score += 5
    }
    else if (index == 2 && answer == "y3"){
        score += 5
    }
    else if (index == 3 && answer == "y4"){
        score += 5
    }
    else {
        score += 0
    }
}
//testing for checkAnswer()
//*****this works but I've to figure out how to import js files****
//var list1 = qAndA ();
//shuffleAnsInList (list1)
//console.log(list1[0]["choices"]);
//console.log(score);
//checkAnswer("y1", list1, 1)
//console.log(score);
//checkAnswer("y2", list1, 1)
//console.log(score);
//checkAnswer("y3", list1, 1)
//console.log(score);
//checkAnswer("y4", list1, 1)
//console.log(score);
