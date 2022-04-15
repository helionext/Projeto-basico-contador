var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var left = document.getElementById("left");
var right = document.getElementById("right");

left.addEventListener("click", decrement);
right.addEventListener("click", increment);


function increment() {
  left.disabled = false;

  ++currentNumber;
  if (currentNumber > 0) {
    currentNumberWrapper.style.color = "blue";
  } else if (currentNumber == 0) {
    currentNumberWrapper.style.color = "black";
  }

  if (currentNumber == 10) {
    right.disabled = true;
  }
  
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  right.disabled = false;
  --currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  } else if (currentNumber == 0) {
    currentNumberWrapper.style.color = "black";
  }

  if (currentNumber == -10) {
    left.disabled = true;
  }

  currentNumberWrapper.innerHTML = currentNumber;
}

