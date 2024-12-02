chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    const url = tab.url;

    if (url.startsWith("https://www.youtube.com/shorts/") || url.startsWith("instagram.com/reels/") ) {

      console.log(url);
      chrome.tabs.update(tabId, { url: "https://github.com" });

      
    }
  }
});
