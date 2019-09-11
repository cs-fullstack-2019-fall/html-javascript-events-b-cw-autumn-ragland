let ex1Input = document.getElementById('ex1Input');
let ex1Label = document.getElementById('ex1Label');

ex1Input.onkeydown = function(e){
    ex1Label.innerText = e.target.value;
};

let clearBtn = document.getElementById("clearInput");
clearBtn.onclick = function (e) {
  ex1Label.innerText = "";
  ex1Input.value = "";
};