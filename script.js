// Function to save text to localStorage
function saveText() {
  const text = document.getElementById("notepad").value;
  localStorage.setItem("savedText", text);
}

// Function to retrieve and display text from localStorage
function loadText() {
  const savedText = localStorage.getItem("savedText");
  if (savedText !== null) {
    document.getElementById("notepad").value = savedText;
  }
}

// Function to clear text from both notepad and localStorage
function clearText() {
  document.getElementById("notepad").value = "";
  localStorage.removeItem("savedText");
}

document.getElementById("saveButton").addEventListener("click", saveText);
document.getElementById("clearButton").addEventListener("click", clearText);

// Load saved text on page load
loadText();
