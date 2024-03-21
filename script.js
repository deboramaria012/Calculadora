let currentExpression = '';

function appendToDisplay(value) {
  currentExpression += value;
  document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
  currentExpression = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    document.getElementById('display').value = result;
    currentExpression = String(result);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
