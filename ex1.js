// Grab input field value
let ex1Input = document.getElementById('ex1Input');
//Grab input label value
let ex1Label = document.getElementById('ex1Label');

// When the user types (key down) in the input field --
ex1Input.onkeydown = function(e){
    // update the text of input label to what they typed (e.target.value)
    ex1Label.innerText = e.target.value;
};

// Grab button
let clearBtn = document.getElementById("clearInput");

// When the user clicks the clear button --
clearBtn.onclick = function (e) {
  // update the text of the input label --
  ex1Label.innerText = "";
  // update the value of the input field
  ex1Input.value = "";
};