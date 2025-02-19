document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Toggle chatbot visibility
    chatbotIcon.addEventListener("click", function () {
        chatbotContainer.style.display = "block";
        userInput.focus();
    });

    closeChatbot.addEventListener("click", function () {
        chatbotContainer.style.display = "none";
    });

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        // Append user message
        appendMessage("user", message);
        userInput.value = "";

        // Simulate bot response
        setTimeout(() => {
            let response = getBotResponse(message);
            appendMessage("bot", response);
        }, 500);
    }

    // Append message to chatbox
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;
        chatbox.appendChild(messageDiv);

        // Auto-scroll to latest message
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Get predefined bot response
    function getBotResponse(input) {
        const responses = {
            "hello": "Hello! How can I assist you?",
            "hi": "Hi there! How can I help?",
            "services": "We offer Web Development, AI Chatbots, and Cybersecurity solutions.",
            "contact": "You can reach us via email at contact@recruitex.com",
            "default": "I'm not sure, but I'm learning! 😊"
        };

        return responses[input.toLowerCase()] || responses["default"];
    }

    // Send message when Enter is pressed
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Send message on button click
    sendBtn.addEventListener("click", sendMessage);
});
