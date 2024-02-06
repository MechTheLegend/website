document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('userText').value;
    document.getElementById('displayText').innerText = "You entered: " + userInput;
  });