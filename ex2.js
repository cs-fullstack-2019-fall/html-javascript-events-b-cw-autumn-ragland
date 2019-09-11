// Grab input field value
let ex2Input = document.getElementById('ex2Input');
// Grab input label value
let ex2Label = document.getElementById('ex2Label');

// assign default string from readme to a variable
let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";

// assign counter with initial value of 0
let counter = 0;

// When the user types (key down) in the input field --
ex2Input.onkeydown = function(e){
    // update the text of input label to a the next character from the default string concatenated with the previous characters --
    ex2Label.innerText += codeCrewString[counter];
    // update the value of the counter to 1 + the current value
    counter++;
};

// When the user clicks the clear button --
let clearBtn = document.getElementById("clearInput");
clearBtn.onclick = function (e) {
    // update the text of the input label --
    ex2Label.innerText = "";
    // update the value of the input field
    ex2Input.value = "";
};