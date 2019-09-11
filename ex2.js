let ex2Input = document.getElementById('ex2Input');
let ex2Label = document.getElementById('ex2Label');

let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
let counter = 0;

ex2Input.onkeydown = function(e){
    ex2Label.innerText += codeCrewString[counter];
    counter++;
};

let clearBtn = document.getElementById("clearInput");
clearBtn.onclick = function (e) {
    ex2Label.innerText = "";
    ex1Input.value = "";
};