function answerQuestion(){
    var h2 = document.getElementById("h2");
    var ol = document.getElementById("selectable");
    var submit = document.getElementById("submit");
    var element = document.getElementById("set");
    h2.innerHTML = "Question 1:";

    //delete elements
    element.removeChild(ol);
    element.removeChild(submit);
    //add elements
    var p = document.createElement("p");
    p.setAttribute("id", "p11");
    var w = document.createTextNode("Which of these cities is closest to London, UK?");
    p.appendChild(w);
    element.appendChild(p);


    var ol01 = document.createElement("OL");
    ol01.setAttribute("id", "selectable");
    element.appendChild(ol01);

    //get list of all the questions

    var questionslist = qAndA("QuestionsAndFiles")
    var questionmap = questionslist(0)

    //loop all the elements in the choices list

    for(var i in questionmap[choices].length){
        var y1 = document.createElement("LI");
        y1.setAttribute("id", "y1");
        var t1 = document.createTextNode(questionmap[choices](i));
        y1.appendChild(t1);
        document.getElementById("selectable").appendChild(y1);
    }

    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "CheckAnswer()");
    element.appendChild(k);
    document.getElementById("submit").value = "Submit";



    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "AnswerQuestion()");
    element.appendChild(k);
    document.getElementById("submit").value = "Next Question";

    $( function() {
        $( "#selectable" ).selectable();
    } );

}
</script>