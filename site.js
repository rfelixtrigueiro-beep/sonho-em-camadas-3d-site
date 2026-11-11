const form = document.querySelector("#quote-form");
const project = document.querySelector("#project");
const details = document.querySelector("#details");
const status = document.querySelector("#quote-status");
const whatsappButton = document.querySelector("#whatsapp-button");
const copyButton = document.querySelector("#copy-button");
const phone = window.siteConfig?.whatsapp?.trim() ?? "";
const whatsappReady = /^[1-9]\d{7,14}$/.test(phone);

whatsappButton.hidden = !whatsappReady;
copyButton.hidden = whatsappReady;

document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    project.value = link.dataset.project;
  });
});

function quoteMessage() {
  const lines = ["Olá! Gostaria de solicitar um orçamento com a Sonho em Camadas 3D."];
  if (project.value) lines.push("Projeto: " + project.value);
  if (details.value.trim()) lines.push("Detalhes: " + details.value.trim());
  return lines.join("\n");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (whatsappReady) {
    window.location.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(quoteMessage());
  }
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(quoteMessage());
    status.textContent = "Pedido copiado. Cole a mensagem na conversa do Instagram.";
  } catch {
    status.textContent = "A cópia automática está indisponível. Abra o Instagram e envie os detalhes do pedido por lá.";
  }
});

