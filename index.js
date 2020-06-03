document.addEventListener('DOMContentLoaded', () => {
var clickedNumbers = [];

  //create calc container
  const calcBox = document.createElement("div");
  calcBox.className = "calcContainer";
  document.getElementsByClassName("box")[0].appendChild(calcBox);

//create calc display
  const calcDisplay = document.createElement("div");
  calcDisplay.className = "calc-display";
  document.getElementsByClassName("calcContainer")[0].appendChild(calcDisplay);

//create number buttons
function createButtons(){
  for(let i = 9; i>0; i--){
    const button = document.createElement("div");
    button.className = "button";
    button.innerHTML ="<h1>" + i + "</h1>";
    document.getElementsByClassName("calcContainer")[0].appendChild(button);

  }
}

createButtons();

//add 0 and other basic buttons:0 / clear
function zeroButton(){
  const newButton = document.createElement("div");
  newButton.className = "button";
  newButton.innerHTML = "<h1>0</h1>"
  // button.id = i;
  document.getElementsByClassName("calcContainer")[0].appendChild(newButton);
}

function divisionButton(){
  const newButton = document.createElement("div");
  newButton.className = "button op-button";
  newButton.innerHTML = "<h1>/</h1>"
  // button.id = i;
  document.getElementsByClassName("calcContainer")[0].appendChild(newButton);
}

function equalButton(){
  const newButton = document.createElement("div");
  newButton.className = "button equal";
  newButton.innerHTML = "<h1>=</h1>";
  document.getElementsByClassName("calcContainer")[0].appendChild(newButton);
}

zeroButton();
equalButton();

//add event listeners to all number buttons
for(let i=0; i < 10; i++){

    document.getElementsByClassName("button")[i].addEventListener("click", function(){
        const num = this.textContent;
        clickedNumbers.push(num);
        console.log(clickedNumbers);
        const numBox = document.createElement("div");
        numBox.className = "expr-div";
        numBox.textContent = num;

          document.getElementsByClassName("calc-display")[0].appendChild(numBox);

        });

      };

  function button1(){  //add + button
    const opButton = document.createElement("div");
    opButton.className = "button op-button";
      opButton.innerHTML = "<h1>" + "+" +"</h1>";
  document.getElementsByClassName("calcContainer")[0].appendChild(opButton);
  };

  function button2(){ //add - button
    const opButton = document.createElement("div");
    opButton.className = "button op-button";
      opButton.innerHTML = "<h1>" + "-" +"</h1>";

    document.getElementsByClassName("calcContainer")[0].appendChild(opButton);
  };
  function button3(){ //add * button
    const opButton = document.createElement("div");
    opButton.className = "button op-button";
      opButton.innerHTML = "<h1>" + "*" +"</h1>";
          document.getElementsByClassName("calcContainer")[0].appendChild(opButton);
  };


  button1();
  button2();
  button3();
  divisionButton();


//add event listeners to operator buttons
for(let i = 0; i < 4; i++){
  document.getElementsByClassName("op-button")[i].addEventListener("click", function(){
    const clickedOperator = this.textContent;
    clickedNumbers.push(clickedOperator);
    console.log(clickedNumbers);
    const opBox = document.createElement("div");
    opBox.className = "expr-div";//alloted expr-div class to the div containing expression
    opBox.textContent = clickedOperator;
    document.getElementsByClassName("calc-display")[0].appendChild(opBox);
});
};

//add clear button
// function clearButton(){
//   const clearButton = document.createElement("div");
//   clearButton.className = "clear";
//   clearButton.innerHTML = "<h1>Clear</h1>";
//   document.getElementsByClassName("calcContainer")[0].appendChild(clearButton);
// }
//
// clearButton();

document.getElementsByClassName("equal")[0].addEventListener("click", function(){
  var expression = "";
  for(let i = 0; i<clickedNumbers.length; i++){
    expression = expression + clickedNumbers[i];
  }

  const result = eval(expression);  //result of the entered string expression
//create a div that displays result after eliminating the entered expression
const resultExpr = document.createElement("h2");
resultExpr.innerHTML = "<h3>" + "=" + " " + result + "</h3>";
document.getElementsByClassName("result-div")[0].appendChild(resultExpr);

clickedNumbers = [];


});
});
