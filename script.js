"use strict";

var query = "";
var screentext = document.getElementById("calculator-screen");
var testpara = document.getElementById("test");

var clearbtn = document.getElementById("clear");
clearbtn.addEventListener('click', function(){
    screentext.innerText = "0";
})

function isOperator(sign)
{
    if (sign == "plus" || sign == "minus" || sign == "divide" || sign == "multiply")
        return true;
    return false;
}

var numeralbtns = document.getElementsByClassName("button-numeral");
testpara.innerText += "length is " + numeralbtns.length + '\n';

// testpara.innerText += (numeralbtns.length);
for (var i = 0; i < document.getElementsByClassName("button-numeral").length; i++)
{
    // console.log(i + " " + document.getElementsByClassName("button-numeral")[i]);
    document.getElementsByClassName("button-numeral")[i].addEventListener('click', function(e)
    {
        var t = e.target.getAttribute('data-value');
        if (screentext.innerText == '' || screentext.innerText == "0")
            screentext.innerText = t;
        else
            screentext.innerText += t;
    });
}

for (var i = 0; i < document.getElementsByClassName("button-operation").length; i++)
{
    document.getElementsByClassName("button-operation")[i].addEventListener('click', function(e){
        var t = e.target.getAttribute('data-value');
        if (isOperator(t))
        {
            query += screentext.innerText + e.target.innerText;
            screentext.innerText = "0";
        }
    })
}

var equalbtn = document.getElementById("button-evaluate");
equalbtn.addEventListener('click', function(){
    query += screentext.innerText;
    var ans = eval(query);
    screentext.innerText = ans;
    query = "";
});






