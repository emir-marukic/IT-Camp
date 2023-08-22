const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ul = document.querySelector("ul");
  const span = document.createElement("span");
  const i = document.createElement("i");
  const li = document.createElement("li");
  span.setAttribute("id", "delete-btn");
  li.append(input.value);
  i.classList.add("fa-solid");
  i.classList.add("fa-xmark");
  span.append(i);
  li.append(span);
  ul.append(li);

  form.reset();
});
