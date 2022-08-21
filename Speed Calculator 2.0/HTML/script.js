'use strict';

///////////////////TMS///////////////////////
const alejandroL = 57;
const alejandroV = 56;
const alexR = 38;
const alfredo = 50;
const anaG = 70;
const audreyH = 52;
const brianH = 93;
const chandaO = 83;
const christineD = 103;
const chrisP = 94;
const clarissaS = 46;
const deniellW = 79;
const emilyW = 69;
const ericA = 87;
const gabriellaL = 57;
const guilianaA = 99;
const joetteV = 83;
const joseM = 77;
const joshS = 90;
const kylahC = 75;
const lisetteB = 72;
const loriH = 69;
const marisaG = 62;
const mayaS = 103;
const monicaB = 50;
const monicaR = 49;
const naiyaR = 46;
const nickE = 73;
const sherrieB = 75;
const sienaC = 71;
const sofiaP = 72;
const tavianG = 63;
const tiffL = 53;
const fabiolaP = 76;
const nancyG = 46;

///////////BASE TM ARRAY////////////////
let tmList = [alejandroL, alejandroV, alexR, alfredo, anaG, audreyH, brianH, chandaO, christineD, chrisP, clarissaS, deniellW, emilyW, ericA, gabriellaL, guilianaA, joetteV, joseM, joshS, kylahC, lisetteB, loriH, marisaG, mayaS, monicaB, monicaR, naiyaR, nickE, sherrieB, sienaC, sofiaP, tavianG, tiffL, fabiolaP, nancyG];

////////////////////////////ARRAY/////////////////////

let tmList2 = [];

///////////////////////////TM BUTTONS//////////////////

// const buttonClick = document.querySelector('button');
// function buttonColorClicked() {
//   buttonClick.style.backgroundColor = '#0abdc6';
// };
// console.log(tmList2);

/////////////////////ALEJANDRO L///////////////////
function alPush(){
tmList2.push(alejandroL);
};

///////////ALEJANDRO V//////////////
function avPush(list){
tmList2.push(alejandroV);
document.getElementById('btn-AV').style.backgroundColor = '#0abdc6';
};
///////////RITTER/////////////
function arPush(list){
tmList2.push(alexR);
document.getElementById('btn-AR').style.backgroundColor = '#0abdc6';
};
///////////ALFREDO//////////////
function alfPush(list){
tmList2.push(alfredo);
document.getElementById('btn-ALF').style.backgroundColor = '#0abdc6';
};
///////////ANA//////////////
function agPush(list){
tmList2.push(anaG);
document.getElementById('btn-AG').style.backgroundColor = '#0abdc6';
};
///////////AUDREY//////////////
function ahPush(list){
tmList2.push(audreyH);
document.getElementById('btn-AH').style.backgroundColor = '#0abdc6';
};
///////////BRIAN/////////////
function bhPush(list){
tmList2.push(brianH);
document.getElementById('btn-BH').style.backgroundColor = '#0abdc6';
};
//////////CHANDA//////////////
function coPush(list){
tmList2.push(chandaO);
document.getElementById('btn-CO').style.backgroundColor = '#0abdc6';
};
/////////CHRISTINE///////////
function cdPush(list){
tmList2.push(christineD);
document.getElementById('btn-CD').style.backgroundColor = '#0abdc6';
};
//////////CHRIS/////////////
function cpPush(list){
tmList2.push(chrisP);
document.getElementById('btn-CP').style.backgroundColor = '#0abdc6';
};
////////////CLARISSA/////////
function csPush(list){
tmList2.push(clarissaS);
document.getElementById('btn-CS').style.backgroundColor = '#0abdc6';
};
////////////DENIELL//////////
function dwPush(list){
tmList2.push(deniellW);
document.getElementById('btn-DW').style.backgroundColor = '#0abdc6';
};
///////////EMILY////////////
function ewPush(list){
tmList2.push(emilyW);
document.getElementById('btn-EW').style.backgroundColor = '#0abdc6';
};
///////////ERIC////////////
function eaPush(list){
tmList2.push(ericA);
document.getElementById('btn-EA').style.backgroundColor = '#0abdc6';
};
///////////GABRIELLA////////////
function glPush(list){
tmList2.push(gabriellaL);
document.getElementById('btn-GL').style.backgroundColor = '#0abdc6';
};
///////////GULIANA////////////
function gaPush(list){
tmList2.push(guilianaA);
document.getElementById('btn-GA').style.backgroundColor = '#0abdc6';
};
///////////JOETTE////////////
function jvPush(list){
tmList2.push(joetteV);
document.getElementById('btn-JV').style.backgroundColor = '#0abdc6';
};
///////////JOSE////////////
function jmPush(list){
tmList2.push(joseM);
document.getElementById('btn-JM').style.backgroundColor = '#0abdc6';
};
///////////JOSH////////////
function jsPush(list){
tmList2.push(joshS);
document.getElementById('btn-JS').style.backgroundColor = '#0abdc6';
};
///////////KYLAH////////////
function kcPush(list){
tmList2.push(kylahC);
document.getElementById('btn-KC').style.backgroundColor = '#0abdc6';
};
///////////LISETTE////////////
function lbPush(list){
tmList2.push(lisetteB);
document.getElementById('btn-LB').style.backgroundColor = '#0abdc6';
};
///////////LORI////////////
function lhPush(list){
tmList2.push(loriH);
document.getElementById('btn-LH').style.backgroundColor = '#0abdc6';
};
///////////MARISA////////////
function mgPush(list){
tmList2.push(marisaG);
document.getElementById('btn-MG').style.backgroundColor = '#0abdc6';
};
///////////MAYA////////////
function msPush(list){
tmList2.push(mayaS);
document.getElementById('btn-MS').style.backgroundColor = '#0abdc6';
};
///////////MONICA B////////////
function mbPush(list){
tmList2.push(monicaB);
document.getElementById('btn-MB').style.backgroundColor = '#0abdc6';
};
///////////MONICA R////////////
function mrPush(list){
tmList2.push(monicaR);
document.getElementById('btn-MR').style.backgroundColor = '#0abdc6';
};
///////////NAIYA////////////
function nrPush(list){
tmList2.push(naiyaR);
document.getElementById('btn-NR').style.backgroundColor = '#0abdc6';
};
///////////NICK////////////
function nePush(list){
tmList2.push(nickE);
document.getElementById('btn-NE').style.backgroundColor = '#0abdc6';
};
///////////SHERRIE////////////
function sbPush(list){
tmList2.push(sherrieB);
document.getElementById('btn-SB').style.backgroundColor = '#0abdc6';
};
///////////SIENA////////////
function scPush(list){
tmList2.push(sienaC);
document.getElementById('btn-SC').style.backgroundColor = '#0abdc6';
};
///////////SOFIA////////////
function spPush(list){
tmList2.push(sofiaP);
document.getElementById('btn-SP').style.backgroundColor = '#0abdc6';
};
///////////TAVIAN////////////
function tgPush(list){
tmList2.push(tavianG);
document.getElementById('btn-TG').style.backgroundColor = '#0abdc6';
};
///////////TIFF////////////
function tlPush(list){
tmList2.push(tiffL);
document.getElementById('btn-TL').style.backgroundColor = '#0abdc6';
};
///////////FABIOLA////////////
function fbPush(list){
tmList2.push(fabiolaP);
document.getElementById('btn-FB').style.backgroundColor = '#0abdc6';
};
///////////NANCY////////////
function ngPush(list){
tmList2.push(nancyG);
document.getElementById('btn-NG').style.backgroundColor = '#0abdc6';
};


//////////////////PICK SPEED//////////////
let pickSpeed = document.querySelector('.pick-speed');
let pickSpeed2 = document.querySelector('.pick-speed-2');
const pickSpeedGenerate = document.querySelector('.pick-speed-generate');
const pickSpeedShow = document.querySelector('.pick-speed-show');
const timeOutput = document.querySelector('.time-to-complete');
var sum = 0;
function upm(x){
  return Math.round(x / 60);
};
function resetButtonColor (btn){
  document.getElementById(btn).style.backgroundColor = '#ea00d9';
};
pickSpeedGenerate.addEventListener('click', function (){
for (let i = 0; i < tmList2.length; i++) {
    sum += tmList2[i];
    pickSpeed.textContent = sum;
    pickSpeed2.textContent = upm(sum);
}
});
function reset(){
  tmList2 = [];
  sum = 0;
  pickSpeed.textContent = '???';
  pickSpeed2.textContent = '???';
  time.textContent = '???'
  resetButtonColor('btn-AV');
  resetButtonColor('btn-AR');
  resetButtonColor('btn-ALF');
  resetButtonColor('btn-AG');
  resetButtonColor('btn-AH');
  resetButtonColor('btn-BH');
  resetButtonColor('btn-CO');
  resetButtonColor('btn-CD');
  resetButtonColor('btn-CP');
  resetButtonColor('btn-CS');
  resetButtonColor('btn-DW');
  resetButtonColor('btn-EW');
  resetButtonColor('btn-EA');
  resetButtonColor('btn-FB');
  resetButtonColor('btn-GL');
  resetButtonColor('btn-GA');
  resetButtonColor('btn-JV');
  resetButtonColor('btn-JM');
  resetButtonColor('btn-JS');
  resetButtonColor('btn-KC');
  resetButtonColor('btn-LB');
  resetButtonColor('btn-LH');
  resetButtonColor('btn-MG');
  resetButtonColor('btn-MS');
  resetButtonColor('btn-MB');
  resetButtonColor('btn-MR');
  resetButtonColor('btn-NR');
  resetButtonColor('btn-NG');
  resetButtonColor('btn-NE');
  resetButtonColor('btn-SB');
  resetButtonColor('btn-SC');
  resetButtonColor('btn-SP');
  resetButtonColor('btn-TG');
  resetButtonColor('btn-TL');
};
///////////////////UNITS LEFT///////////////////

const input = document.querySelector('input');
const time = document.querySelector('.time-to-complete');
let units;

input.addEventListener('input', updateUnits);

function updateUnits(e) {
  units = e.target.value;
  console.log(units);
};

function timeToComplete() {
  console.log(sum);
  console.log(upm(sum));
var timeLeft = Math.round(units / upm(sum));
console.log(timeLeft);
time.textContent = timeLeft;
}
