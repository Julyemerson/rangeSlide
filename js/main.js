var $rangeRed = document.querySelector('[data-js="rangeRed"]');
var $inputRed = document.querySelector('[data-js="inputRed"]');
var $rangeGreen = document.querySelector('[data-js="rangeGreen"]');
var $inputGreen = document.querySelector('[data-js="inputGreen"]');
var $rangeBlue = document.querySelector('[data-js="rangeBlue"]');
var $inputBlue = document.querySelector('[data-js="inputBlue"]');
var $colorArea = document.querySelector('[data-js="colorArea"]');

window.addEventListener('load', start);
$rangeRed.addEventListener('input', getValueOfRange);
$rangeGreen.addEventListener('input', getValueOfRange);
$rangeBlue.addEventListener('input', getValueOfRange);

function start() {
  getValueOfRange();
  rangeActivate();
}

function getValueOfRange() {
  $inputRed.value = $rangeRed.value;
  $inputGreen.value = $rangeGreen.value;
  $inputBlue.value = $rangeBlue.value;

  $colorArea.style.backgroundColor = `rgb(${$rangeRed.value},${$rangeGreen.value},${$rangeBlue.value})`;
}

function rangeActivate() {
  $rangeRed.focus();
}
