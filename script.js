var messageSocket = new WebSocket("ws://localhost:8181");

function SubmitName(){
  var name = document.getElementById("nameInput").value;
  console.log(name);
  console.log(name.length);
  if (name.length >= 0) {
    window.location.href='main.html'; 
  }
  // if localStorage.getItem('mena') != null{
  //   let currentVal = localStorage.getItem('mena')
  //   localStorage.clear()
  //   localStorage.setItem(meno, currentVal+','+name)
  //   }
  // else{
  //   localStorage.setItem('mena', name)
 // }
  //}
}



function sendText() {
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  server.send(JSON.stringify(msg));

  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}