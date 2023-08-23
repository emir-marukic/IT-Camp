const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");

// Function to expand the container by 20px if there are 6 items
function expandContainerIfNeeded() {
  const listItems = ul.querySelectorAll("li");
  if (listItems.length >= 7) {
    container.style.height = container.clientHeight + 47 + "px";
  }
  if (listItems.length >= 15) {
    container.style.overflowY = "auto";
  }
}
function decreaseContainerIfNeeded() {
  const listItems = ul.querySelectorAll("li");
  if (listItems.length >= 7) {
    container.style.height = container.clientHeight - 47 + "px";
  }
  if (listItems.length >= 15) {
    container.style.overflowY = "none";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  if (inputValue) {
    const formattedText =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    const li = document.createElement("li");
    li.textContent = formattedText;

    const span = document.createElement("span");
    span.setAttribute("id", "delete-btn");

    const i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    span.append(i);

    li.append(span);
    ul.append(li);
    span.addEventListener("click", () => {
      ul.removeChild(li);
      decreaseContainerIfNeeded();
    });
    form.reset();
    expandContainerIfNeeded(); // Expand the container after adding an item
  }
});
