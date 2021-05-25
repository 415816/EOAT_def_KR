let qu1 = document.querySelectorAll('.qu1');
let qu2 = document.querySelectorAll('.qu2');
let qu3 = document.querySelectorAll('.qu3');
let qu4 = document.querySelectorAll('.qu4');
let qu5 = document.querySelectorAll('.qu5');
let qu6 = document.querySelectorAll('.qu6');
let qu7 = document.querySelectorAll('.qu7');
let qu8 = document.querySelectorAll('.qu8');
let result = document.querySelector('.result');
let score;
let que1 = document.querySelector('.qw1');
let que2 = document.querySelector('.qw2');
let que3 = document.querySelector('.qw3');
let que4 = document.querySelector('.qw4');
let que5 = document.querySelector('.qw5');
let que6 = document.querySelector('.qw6');
let que7 = document.querySelector('.qw7');
let que8 = document.querySelector('.qw8');
let badAnsw = document.querySelector('.badAnsw');

result.onclick = calcBal;
badAnsw.onclick = falsAnsw;

document.contextmenu = () => {return false;}
//document.querySelector('body').oncontextmenu = () => {return false};


function calcBal(){
    score = 0;
    if(qu1[2].checked) {score += 1;} else {que1.setAttribute('value', "false");}
    console.log(score);
    if(qu2[1].checked) {score += 1;} else {que2.setAttribute('value', "false");}
    console.log(score);
    if(qu3[2].checked) {score += 1;} else {que3.setAttribute('value', "false");}
    console.log(score);
    if(qu4[1].checked) {score += 1;} else {que4.setAttribute('value', "false");}
    console.log(score);
    if(qu5[0].checked) {score += 1;} else {que5.setAttribute('value', "false");}
    console.log(score);
    if(qu6[0].checked && qu6[1].checked && qu6[2].checked && qu6[4].checked && qu6[6].checked) {score += 1;} else {que6.setAttribute('value', "false");}
    console.log(score);
    if(qu7[1].checked) {score += 1;} else {que7.setAttribute('value', "false");}
    console.log(score);
    if(qu8[0].checked) {score += 1;} else {que8.setAttribute('value', "false");}
    console.log(score);
}

function falsAnsw(){
    if(que1.getAttribute('value') == 'false') {que1.style.boxShadow = "0 0 20px red";}
    if(que2.getAttribute('value') == 'false') {que2.style.boxShadow = "0 0 20px red";}
    if(que3.getAttribute('value') == 'false') {que3.style.boxShadow = "0 0 20px red";}
    if(que4.getAttribute('value') == 'false') {que4.style.boxShadow = "0 0 20px red";}
    if(que5.getAttribute('value') == 'false') {que5.style.boxShadow = "0 0 20px red";}
    if(que6.getAttribute('value') == 'false') {que6.style.boxShadow = "0 0 20px red";}
    if(que7.getAttribute('value') == 'false') {que7.style.boxShadow = "0 0 20px red";}
    if(que8.getAttribute('value') == 'false') {que8.style.boxShadow = "0 0 20px red";}

}