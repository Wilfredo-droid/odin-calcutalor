let add = (number1 , number2) => {

    return number1 + number2;

}

let subtract = (number1 , number2) => {

    return number1 - number2;

}

let divide = (number1 , number2) => {
    return number1 / number2;
}

let multiply = (number1, number2) => {
    return number1 * number2;
}

let operate = (number1, number2, operator) => {

    switch(operator){
        case '+':
            add(number1, number2);
        break;

        case '-':
            subtract(number1, number2);
            break;

        case 'x':
            multiply(number1, number2);
            break;    

        case '/':
            divide(number1, number2);
            break;    

        default: 
            document.write("You did not enter an operator");
            break;
    }

}

let numberOne = "";
let numberTwo = "";
let operator;

let calculatorBody = document.querySelector(".calculatorBody");

let operateButton = document.createElement("button");

operateButton.innerText = "=";

calculatorBody.appendChild(operateButton);

for(let i = 1; i <= 3; i++){

    let calculatorRow = document.createElement("div");

    calculatorRow.classList.add("row");

    //(i * 3) - 2 Is the beginning of the row I.e 1,4,7 and i * 3 is the end of the row 3,6,7 I could have used variables with names to explain better but I wanted to feel smart 

    for(let j = ((i * 3) - 2); j <= i * 3; j++){
        let calculatorNumber = document.createElement("button");
        calculatorNumber.innerText = j;
        calculatorNumber.classList.add("number");
        calculatorRow.appendChild(calculatorNumber);

        calculatorNumber.addEventListener('click', () => {

            if(operator){
                numberTwo += calculatorNumber.innerText;
            }

            else{
                numberOne += calculatorNumber.innerText;
            }

            console.log(numberOne, numberTwo);
        });

    }
  
    calculatorBody.appendChild(calculatorRow);
    

}

let signs = ['+', '-', '/', 'x'];

let row =  document.createElement("div");

for(let i = 0; i < 4; i++){

    let signButton = document.createElement("button");

    signButton.innerText = signs[i];

    signButton.addEventListener('click', () => {
        operator = signButton.innerText;
    })

    row.appendChild(signButton);


}

calculatorBody.prepend(row);






