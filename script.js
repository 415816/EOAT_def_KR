const qu1 = document.querySelectorAll('.qu1');
const qu2 = document.querySelectorAll('.qu2');
const qu3 = document.querySelectorAll('.qu3');
const qu4 = document.querySelectorAll('.qu4');
const qu5 = document.querySelectorAll('.qu5');
const qu6 = document.querySelectorAll('.qu6');
const qu7 = document.querySelectorAll('.qu7');
const qu8 = document.querySelectorAll('.qu8');
const result = document.querySelector('.result');
let score;
const que1 = document.querySelector('.qw1');
const que2 = document.querySelector('.qw2');
const que3 = document.querySelector('.qw3');
const que4 = document.querySelector('.qw4');
const que5 = document.querySelector('.qw5');
const que6 = document.querySelector('.qw6');
const que7 = document.querySelector('.qw7');
const que8 = document.querySelector('.qw8');
const badAnsw = document.querySelector('.badAnsw');
const badAnswPass = document.querySelector('.badAnswPass');
const closeStartMessage = document.querySelector('.closeStartMessage');
const container = document.querySelector('.container');
const time = 15 * 60;
const r = document.getElementById('r');
let tmp = time;
const FIO = document.getElementById('FIO');
const toFio = document.getElementById('toFio');
const scor = document.getElementById('scor');
const appraisal = document.getElementById('appraisal');
const endContainer = document.querySelector('.endContainer');
let scAppra = ''; 
const passCloseMessage = document.querySelector('#passCloseMessage');
const closeEndMessage = document.querySelector('.closeEndMessage');


result.onclick = () => {
        calcBal();
}
badAnsw.onclick = () => {
    if (badAnswPass.value == 12) {
        falsAnsw();
        badAnswPass.value = '';
    }
}

closeEndMessage.onclick = () => {
    if (passCloseMessage.value == 12) {
        endContainer.style.display = "none";
        passCloseMessage.value == '';
    }
}

document.querySelector('html').oncontextmenu = () => { return false };

closeStartMessage.onclick = () => {
    if(FIO.value != 0){
    container.style.display = "none";
    }
    setInterval(function(){
        let c = tmp--
        let m = (c / 60) >> 0
        let s = (c - m * 60) + '';
        r.textContent = 'Осталось ' + m + ':' + (s.length > 1 ? '' : '0') + s;
        if(m == 0 && s == 1) calcBal();
        tmp != 0 || (tmp = time);
    }, 1000); 
} 

function calcBal() {
    score = 0;
    if (qu1[2].checked) { score += 1; } else { que1.setAttribute('value', "false"); }
    console.log(score);
    if (qu2[1].checked) { score += 1; } else { que2.setAttribute('value', "false"); }
    console.log(score);
    if (qu3[2].checked) { score += 1; } else { que3.setAttribute('value', "false"); }
    console.log(score);
    if (qu4[1].checked) { score += 1; } else { que4.setAttribute('value', "false"); }
    console.log(score);
    if (qu5[0].checked) { score += 1; } else { que5.setAttribute('value', "false"); }
    console.log(score);
    if (qu6[0].checked && qu6[1].checked && qu6[2].checked && qu6[4].checked && qu6[6].checked) { score += 1; } else { que6.setAttribute('value', "false"); }
    console.log(score);
    if (qu7[1].checked) { score += 1; } else { que7.setAttribute('value', "false"); }
    console.log(score);
    if (qu8[0].checked) { score += 1; } else { que8.setAttribute('value', "false"); }
    console.log(score);
    que1.style.boxShadow = "none";
    que2.style.boxShadow = "none";
    que3.style.boxShadow = "none";
    que4.style.boxShadow = "none";
    que5.style.boxShadow = "none";
    que6.style.boxShadow = "none";
    que7.style.boxShadow = "none";
    que8.style.boxShadow = "none";
    endContainer.style.display = "block";
    if(score >= 4) {scAppra = 'зачтена. Теперь можете приступить к сдаче зачета.'} else {scAppra = 'не зачтена. Пересдача по вторникам, время и аудиторию Вы можете уточнить на стенде у 307 аудитории либо в группе ВК: https://vk.com/suti_roat'}
    toFio.innerText = FIO.value;
    scor.innerText = score;
    appraisal.innerText = scAppra;

}

function falsAnsw() {
    if (que1.getAttribute('value') == 'false') { que1.style.boxShadow = "0 0 20px red"; }
    if (que2.getAttribute('value') == 'false') { que2.style.boxShadow = "0 0 20px red"; }
    if (que3.getAttribute('value') == 'false') { que3.style.boxShadow = "0 0 20px red"; }
    if (que4.getAttribute('value') == 'false') { que4.style.boxShadow = "0 0 20px red"; }
    if (que5.getAttribute('value') == 'false') { que5.style.boxShadow = "0 0 20px red"; }
    if (que6.getAttribute('value') == 'false') { que6.style.boxShadow = "0 0 20px red"; }
    if (que7.getAttribute('value') == 'false') { que7.style.boxShadow = "0 0 20px red"; }
    if (que8.getAttribute('value') == 'false') { que8.style.boxShadow = "0 0 20px red"; }

}

