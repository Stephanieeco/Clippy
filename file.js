let links = [] //This would allow me save the items i copy
const title = document.getElementById("title")
const copiedItems = document.getElementById("listItems")

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0]
    const activeTabId = activeTab.id; 
  });


document.addEventListener("copy", function(event) {
  if (event.clipboardData) {
  const storedData = event.clipboardData.getData("text/plain")
  }
  localStorage.setItem("links", JSON.stringify(allLinks))
  renderCopiedItems()
  
  links.push(storedData)
  
    
})


function renderCopiedItems() {

  let allLinks = JSON.parse(localStorage.getItem("links")) || []

  copiedItems.innerHTML = ""
  for (let i = 0; i < links.length; i++ ) {
    copiedItems.innerHTML += `<li> ${allLinks[i]} </li>`
  }
  
}                                                                               

renderCopiedItems()