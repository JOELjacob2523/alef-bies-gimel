/*window.onload = () => {
  userInput();
};*/

  function total() {
  let input = document.getElementById('char').value;
  let sum = 0; // initialize the sum to zero
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    let valueFound = false;
    // loop through the array to find the numerical value of the letter
    for (let j = 0; j < value.length; j++) {
      let letterH = value[j];
      if (letterH.hasOwnProperty(letter)) {
        sum += letterH[letter];
        valueFound = true;
        break;
      }
    }
    if (!valueFound) {
      // handle the case where the letter is not found in the array
      console.log(`Value not found for letter ${letter}`);
    }
  }
  console.log(`Sum of values for input "${input}" is ${sum}`);
    document.getElementById('total').innerHTML = sum;
}




