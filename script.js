"use strict";

var query = "";
var screentext = document.getElementById("calculator-screen");
var testpara = document.getElementById("test");

// AC button
var clearbtn = document.getElementById("clear");
clearbtn.addEventListener('click', function(){
    screentext.innerText = "0";
    query = "";
})

function isOperator(sign)
{
    if (sign == "plus" || sign == "minus" || sign == "divide" || sign == "multiply")
        return true;
    return false;
}

// testpara.innerText += "length is " + numeralbtns.length + '\n';
// testpara.innerText += (numeralbtns.length);

// numeral buttons
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

// +, -, /, *  buttons
for (var i = 0; i < document.getElementsByClassName("button-operation").length; i++)
{
    document.getElementsByClassName("button-operation")[i].addEventListener('click', function(e){
        var t = e.target.getAttribute('data-value');
        if (isOperator(t))
        {
            query += screentext.innerText + e.target.innerText;
            screentext.innerText = "0";
        }
    });
}

// = button
var equalbtn = document.getElementById("button-evaluate");
equalbtn.addEventListener('click', function(){
    query += screentext.innerText;
    var ans = eval(query);
    screentext.innerText = ans;
    query = "";
});

// +/- button
var changesignbtn = document.getElementById("button-change-sign");
changesignbtn.addEventListener('click', function(e){
    var t = -1 * parseFloat(screentext.innerText);
    screentext.innerText = "" + t;
});

var percentagebtn = document.getElementById("button-percentage");
percentagebtn.addEventListener('click', function(e){
    if (screentext.innerText == "0")
        return;
    var t = parseFloat(screentext.innerText)/100;
    screentext.innerText = "" + t;
});

var decimalbtn = document.getElementById("button-decimal");
decimalbtn.addEventListener('click', function(e){
    if (screentext.innerText.includes('.'))
        return;
    screentext.innerText = screentext.innerText + '.';
})



