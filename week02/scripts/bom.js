const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value === "") {
    return input.focus();
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  li.textContent = input.value;
  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  input.focus();
  input.value = "";
});
