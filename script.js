// link button to function and set input as a value
document.getElementById('button').addEventListener('click', compare)
let input = 0

function compare () {
  input = document.getElementById('input').value
  input = parseInt(input)
  // turn the textbox input into an integer to use

  // check if the input is less the 0, then act ordering to the value compared to 0
  if (input < 0) {
    document.getElementById('answer').innerHTML = 'Negative number'
  } else {
    document.getElementById('answer').innerHTML = 'Positive number'
  }
}
