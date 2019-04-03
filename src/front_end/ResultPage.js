function final(){
    var abc = document.getElementById("abc");
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p11");
    var ol = document.getElementById("selectable");
    var clockdiv = document.getElementById("clockdiv");
    var submit = document.getElementById("submit");
    var element = document.getElementById("set");
    //delete elements
    h2.innerHTML = "Ranking";
    element.removeChild(ol);
    element.removeChild(p);
    element.removeChild(submit);

    var oll = document.createElement("OL");
    oll.setAttribute("id", "rank");
    element.appendChild(oll);

    var y = document.createElement("LI");
    var t1 = document.createTextNode("Player 1"+ "  winner~");
    y.appendChild(t1);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 2");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 3");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 4");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);

    var y = document.createElement("LI");
    var t2 = document.createTextNode("Player 5");
    y.appendChild(t2);
    document.getElementById("rank").appendChild(y);


    var k = document.createElement("INPUT");
    k.setAttribute("type", "submit");
    k.setAttribute("id", "submit");
    k.setAttribute("onclick", "()");
    element.appendChild(k);
    document.getElementById("submit").value = "Restart";

    abc.removeChild(clockdiv);;;;


}