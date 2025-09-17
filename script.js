// Botão de cadastro
document.getElementById("btnCadastrar").addEventListener("click", function () {
  alert("Página de cadastro em desenvolvimento!");
});

// Chat simples
const chatInput = document.querySelector(".input-container input");
const chatButton = document.querySelector(".input-container button");
const chatMessages = document.querySelector(".messages");

chatButton.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (text !== "") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.innerHTML = `
      <p>${text}</p>
      <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    `;
    chatMessages.appendChild(msgDiv);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
