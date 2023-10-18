// Declare an array named chaptersArray and assign it to the 
// results of a defined function named getChapterList
const chaptersArray = localStorage.getItem("chapters") || [];

// Instruction 5
button.addEventListener("click", () => {
  if (input.value === "") {
    return input.focus();
  }

  displayList(input.value);
  chaptersArray.push(input.value);
  setChapterList(chaptersArray);
  input.value = "";
  input.focus();
});

// Create the displayList defined function 
// that receives one parameter named item
function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  li.textContent = item;
  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener("click", () => {
    deleteChapter(item);
  });
}

// A deleteChapter function will need to be called within the delete button 
// click event to remove the chapter from the array and localStorage
function deleteChapter(chapter) {
  const updatedChapter = chapter.slice(0, chapter.length - 1); // remove the ❌ at the end
  chaptersArray = chaptersArray.filter((c) => c !== updatedChapter);
  setChapterList(chaptersArray);
}

// Define the setChapterList function to set the localStorage 
// item that you have already named. Use JSON.stringify() to stringify the array
function setChapterList(chaptersArray) {
  localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item
function getChapterList() {
  const chapters = localStorage.getItem("chapters");
  return JSON.parse(chapters) || [];
}

// Call the getChapterList function to initialize the chaptersArray array
chaptersArray = getChapterList();
