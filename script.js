let display = document.getElementById('display');
let lastWasEqual = false;

function append(value) {
  if (display.innerText === '0' || display.innerText === 'Error' || lastWasEqual) {
    display.innerText = value;
    lastWasEqual = false;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
  lastWasEqual = false;
}

function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === 'Error') {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  let exp = display.innerText;

  // If ends with operator, remove it
  if (/[+\-*/]$/.test(exp)) {
    exp = exp.slice(0, -1);
  }

  try {
    let result = eval(exp);
    display.innerText = result;
    lastWasEqual = true;
  } catch {
    display.innerText = 'Error';
    lastWasEqual = false;
  }
}