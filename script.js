function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    if (userInput === "") {
        alert("Please enter a message before sending.");
        return; // Exit the function if input is empty
    }
    var userMessage = '<div class="user-message">' + userInput + '</div>';
    var botResponse = generateResponse(userInput);

    chatBox.innerHTML += userMessage;
    setTimeout(function() {
        chatBox.innerHTML += botResponse;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Simulate bot response delay
    document.getElementById("user-input").value = "";
}

function generateResponse(userInput) {
    var response;
    // Simple question-response mapping (you can expand this with more complex logic)
    switch(userInput.toLowerCase()) {
        case "hello":
        case "hi":
            response = "Hi there! How can I help you?";
            break;
        case "how are you?":
            response = "I'm just a computer program, but thank you for asking!";
            break;
        case "what's your name?":
            response = "I'm just a humble chatbot.";
            break;
        case "bye":
        case "goodbye":
            response = "Goodbye! Have a great day!";
            break;
        default:
                response = "I'm sorry, I didn't understand that."; 
        
           
            break;
    }
    return '<div class="bot-message">' + response + '</div>';
}
