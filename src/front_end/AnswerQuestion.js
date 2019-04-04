function answerQuestion(){
    var h2 = document.getElementById("h2");
    var ol = document.getElementById("selectable");
    var submit = document.getElementById("submit");
    var element = document.getElementById("set");
    h2.innerHTML = "Question "+String(counter)+":";


    //delete elements
    element.removeChild(ol);
    element.removeChild(submit);


    //get list of all the questions

    var questionslist = qAndA();
    var questionmap = questionslist[counter-1];

    //add elements
    var p = document.createElement("p");
    p.setAttribute("id", "p11");
    var w = document.createTextNode(questionmap["question"]);
    p.appendChild(w);
    element.appendChild(p);


    var ol01 = document.createElement("OL");
    ol01.setAttribute("id", "selectable");
    element.appendChild(ol01);



    //loop all the elements in the choices list

    for(var i in questionmap["choices"].length){
        var y = document.createElement("LI");
        y.setAttribute("id", "y"+String(counter));
        var t = document.createTextNode(questionmap["choices"][i]);
        y.appendChild(t);
        document.getElementById("selectable").appendChild(y);
    }


    var pdiv = document.createElement("div");
    pdiv.setAttribute("id", "pdiv");
    clockdiv.appendChild(pdiv);


    //How many questions left?
    var pnum = document.createElement("P");
    pnum.setAttribute("id", "num");
    var word = document.createTextNode(String(counter)+"/20");
    pnum.appendChild(word);

    //Score
    var pnum2 = document.createElement("P");
    pnum.setAttribute("id", "num2");

    var word2 = document.createTextNode("Score: "+String(score));
    pnum2.appendChild(word2);

    pdiv.appendChild(pnum);
    pdiv.appendChild(pnum2);




    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "CheckAnswer()");
    element.appendChild(k);
    document.getElementById("submit").value = "Submit";


    // Next Page
    var num = counter-1;
    if (num == 19){
        var k0 = document.createElement("INPUT");
        k0.setAttribute("type", "submit");
        k0.setAttribute("id", "submit");
        k0.setAttribute("onclick", "final()");
        element.appendChild(k0);
        document.getElementById("submit").value = "See Result";
    }
    else{
        var k1 = document.createElement("INPUT");
        k1.setAttribute("type", "submit");
        k1.setAttribute("id", "submit");
        k1.setAttribute("onclick", "AnswerQuestion()");
        element.appendChild(k1);

        document.getElementById("submit").value = "Next Question";
    }

    $( function() {
        $( "#selectable" ).selectable();
    } );

}


