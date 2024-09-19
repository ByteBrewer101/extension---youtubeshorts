chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    const url = tab.url;

    if (url.startsWith("https://www.youtube.com/shorts/") || url.startsWith("stagram.com/reels/") ) {
      // Check if the extension is active
      chrome.storage.sync.get("isActive", (data) => {
        if (data.isActive) {
          chrome.tabs.update(tabId, { url: "https://github.com" });
          
        }
      });
    }
  }
});
