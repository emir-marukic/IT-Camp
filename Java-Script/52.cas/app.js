const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector("#filter");

// Add item

const addItem = (e) => {
  e.preventDefault();

  // Get input value
  const newItem = document.querySelector("#item").value;

  // Create new li element
  let li = document.createElement("li");

  // Add className to li
  li.className = "list-group-item";
  //   console.log(li);

  // Add text node with input value
  li.append(document.createTextNode(newItem));

  // Create del button element
  const deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm delete float-end";

  // Append Text node
  deleteBtn.append(document.createTextNode("X"));

  // Append button to li
  li.append(deleteBtn);

  // Append li to list
  itemList.append(li);
};

// Remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  //convert text to lowercase
  const text = e.target.value.toLowerCase();

  // Get lis
  const items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Form Submit Event
form.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

// Filter Event
filter.addEventListener("keyup", filterItems);
