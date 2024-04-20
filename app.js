let displayValue = '';

 function ToDisplay(value) {
  displayValue += value;
   document.getElementById('display').value = displayValue;
 }

 function clearDisplay() {
   displayValue = '';
   document.getElementById('display').value = '';
 }

 function calculateResult() {
  
     const result = eval(displayValue);
     displayValue = result.toString();
     document.getElementById('display').value = displayValue;
  
 }
// function ToDisplay(value) {
//   document.getElementById('display').value += value;
// }

// function clearDisplay() {
//   document.getElementById('display').value = '';
// }

// function calculate() {
//   let expression = document.getElementById('display').value;
//   let result = evaluateExpression(expression);
//   document.getElementById('display').value = result;
// }

// function evaluateExpression(expression) {
//   let operands = expression.split(/[\+\-\*\/]/);
//   let operator = expression.match(/[\+\-\*\/]/)[0];
//   let result = parseFloat(operands[0]);
  
//   for (let i = 1; i < operands.length; i++) {
//       let num = parseFloat(operands[i]);
//       switch (operator) {
//           case '+':
//               result += num;
//               break;
//           case '-':
//               result -= num;
//               break;
//           case '*':
//               result *= num;
//               break;
//           case '/':
//               if (num !== 0) {
//                   result /= num;
//               } else {
//                   return "Error";
//               }
//               break;
//           default:
//               return "Error";
//       }
//   }
//   return result;
// }

// function operation(op) {
//   let displayValue = document.getElementById('display').value;
//   let lastChar = displayValue[displayValue.length - 1];

// //   // Check if last character is an operator, if so, replace it with the new operator
//    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
//        displayValue = displayValue.slice(0, -1);
//    }
  
// //   appendToDisplay(op);
//  }




