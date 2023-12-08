// Function to add a message to the chat log
function addMessageToChatLog(message, sender) {
  const chatLog = document.getElementById('chat-log');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.innerText = `${sender}: ${message}`;
  chatLog.appendChild(newMessage);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to handle user input and generate a response
function handleUserInput() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value;
  if (message.trim() !== '') {
    addMessageToChatLog(message, 'User');
    userInput.value = '';

    // Simulate ChatGPT response
    const response = generateChatGPTResponse(message);

    // Add the response to the chat log
    setTimeout(() => {
      addMessageToChatLog(response, 'ChatGPT');
    }, 500);
  }
}

// Function to generate a response from ChatGPT (replace with actual ChatGPT API call)
function generateChatGPTResponse(message) {
  // This is a placeholder response, replace with the actual API call to ChatGPT
  return `ChatGPT says: I received "${message}" and generated this response.`;
}

// Event listener for the send button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', handleUserInput);

// Event listener for pressing enter in the input field
const userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});