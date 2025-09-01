interface Link {
  url: string;
}

const links: Link[] = [
  { url: "https://i.imgur.com/example1.jpg" },
  { url: "https://i.imgur.com/example2.jpg" },
  { url: "https://i.imgur.com/example3.jpg" },
];

const loadLinksButton = document.querySelector(".common-button.secondary-button") as HTMLButtonElement;
const startScriptButton = document.querySelector(".common-button.primary-button") as HTMLButtonElement;
const container = document.querySelector(".container") as HTMLDivElement;

const loadedLinks: Link[] = [];

const loadLinks = (): void => {
  loadedLinks.push(...links);
  startScriptButton.disabled = false;

  const successMessage = document.createElement("p");
  successMessage.textContent = "Links carregados com sucesso!";
  successMessage.style.color = "green";
  successMessage.style.marginTop = "10px";
  container.appendChild(successMessage);

  setTimeout(() => {
    successMessage.remove();
  }, 3000);
};

loadLinksButton.addEventListener("click", loadLinks);

startScriptButton.addEventListener("click", () => {
  if (loadedLinks.length === 0) {
    alert("Por favor, carregue os links primeiro!");
    return;
  }
  console.log("Script iniciado com os links:", loadedLinks);
});