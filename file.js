let links = [] //This would allow me save the items i copy
const title = document.getElementById("title")
const copiedItems = document.getElementById("listItems")

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    const activeTab = tabs[0]
    const activeTabId = activeTab.id; 
  });


document.addEventListener("copy", function() {
  const storedData = event.clipboardData.getData("text/plain")
  let allLinks = JSON.stringify(localStorage.getItem("links")) || []
  links.push(storedData)
  renderCopiedItems()
    
})


function renderCopiedItems() {
  for (let i = 0; i < links.length; i++ ) {
    copiedItems.innerHTML += `<li> ${links[i]} </li>`
  }
  
}                                                                                                                                                                 