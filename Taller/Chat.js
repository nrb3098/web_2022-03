//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function mark(element) {
    element.style.backgroundColor = "aqua";
    element.style.border = "solid";
    element.style.borderColor = "blue";
    element.style.boxShadow = " 10px 10px 10px #gray";    
  }
  
  function unmark(element) {
    element.style.backgroundColor = "white";
    element.style.border = "none";
    element.style.boxShadow = "none";
  }
  
  
  
  var messages = [], 
    lastUserMessage = "", 
    botMessage = "", 
    botName = 'Joy Boy', 
    talking = true; 
  
  function chatbotResponse() {
    talking = true;
    botMessage = lastUserMessage; //Mensaje estandar
  
    if (lastUserMessage === 'hola' || lastUserMessage =='hello') {
      const hi = ['hola']
      botMessage = hi[Math.floor(Math.random()*(hi.length))];;
    }
  
  }
  function newEntry() {
    //if the message from the user isn't empty then run 
    if (document.getElementById("chatbox").value != "") {
      //pulls the value from the chatbox ands sets it to lastUserMessage
      lastUserMessage = document.getElementById("chatbox").value;
      //sets the chat box to be clear
      document.getElementById("chatbox").value = "";
      //adds the value of the chatbox to the array messages
      if(lastUserMessage!=""){
          if(lastUserMessage.length<300){
              messages.push(lastUserMessage);
              //Speech(lastUserMessage);  //says what the user typed outloud
              //sets the variable botMessage in response to lastUserMessage
              chatbotResponse();
              //add the chatbot's name and message to the array messages
              messages.push("<b>" + botName + ":</b> " + botMessage);
          }else{
              messages.push("<b>" + botName + ":</b> " + "Mensaje no valido, supera caracteres");
          }
      }else{
          messages.push("<b>" + botName + ":</b> " + "Mensaje no valido, por favor escriba algo");
      }
      
      
      // says the message using the text to speech function written below
      Speech(botMessage);
      //outputs the last few array elements of messages to html
      for (var i = 1; i < 8; i++) {
        if (messages[messages.length - i])
          document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
      }
    }
  }
  
  //text to Speech
  //https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
  function Speech(say) {
    if ('speechSynthesis' in window && talking) {
      var utterance = new SpeechSynthesisUtterance(say);
      speechSynthesis.speak(utterance);
    }
  }
  
  //runs the keypress() function when a key is pressed
  document.onkeypress = keyPress;
  //if the key pressed is 'enter' runs the function newEntry()
  function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
      //runs this function when enter is pressed
      newEntry();
    }
    if (key == 38) {
      console.log('hi')
        //document.getElementById("chatbox").value = lastUserMessage;
    }
  }
  
  //clears the placeholder text ion the chatbox
  //this function is set to run when the users brings focus to the chatbox, by clicking on it
  function placeHolder() {
    document.getElementById("chatbox").placeholder = "";
  }