let links = []; //This would allow me save the items i copy
const title = document.getElementById("title");
const copiedItems = document.getElementById("listItems");

chrome.runtime.sendMessage({ message: "Sent from file.js" }, (response) => {
  console.log(response, "resssss");
});
document.addEventListener("copy", function (event) {
  const selectedText = window.getSelection().toString();
  if (selectedText || event.clipboardData) {
    let allLinks = JSON.parse(localStorage.getItem("links"));

    // Ensure allLinks is an array (if it's null or not an array, initialize as empty array)
    if (!Array.isArray(allLinks)) {
      allLinks = [];
    }

    allLinks.push(selectedText);
    localStorage.setItem("links", JSON.stringify(allLinks));
    renderCopiedItems();
  }
});
// Render copied items on page load
window.addEventListener("load", function () {
  renderCopiedItems();
});

function renderCopiedItems() {
  let allLinks = JSON.parse(localStorage.getItem("links")) || [];

  // Ensure copiedItems is defined
  let copiedItems = document.getElementById("listItems");

  if (!copiedItems) {
    console.error("Element with id 'listItems' not found.");
    return;
  }

  copiedItems.innerHTML = "";
  let html = "";
  for (let i = 0; i < allLinks.length; i++) {
    html += `<li>${allLinks[i]}</li>`;
  }

  copiedItems.innerHTML = html;
}

function clearBtn() {}
