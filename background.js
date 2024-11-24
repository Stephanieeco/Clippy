chrome.action.onClicked.addListener((tab)=>{
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0]
      if(tabs.length> 1){
      }else{
        console.log('no active tab found')
      }
      const activeTabId = activeTab.id; 
    });
    })

    chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
        console.log(message,'resssss')
        if(message){
            console.log('yayyy', message)
        }
      })
    