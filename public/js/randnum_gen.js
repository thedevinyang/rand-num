function reroll() {
    console.log("Hello world");
    // Create new number in javascript
    let text
    var n = parseInt(document.getElementById("numDigits").value)
    if (isNaN(n) || n < 1 || n > 15) {
      if (n > 15) {
        text = "Input is too high."
      }
      if (n < 1) {
        text = "Input is too small."
      }
      if (isNaN(n)){
        text = "Input not valid."
      }
      document.getElementById("numberHolder").innerHTML = text;
    } else {
      var value = (Math.floor(Math.random() * (10**(n+1) - (10**n - 1)) + 10**n)).toString()
      value = value.substring(1)
      // Update database with the new number
      document.getElementById("numberHolder").innerHTML = value;
    }
}