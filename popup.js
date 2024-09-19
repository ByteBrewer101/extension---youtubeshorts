document.addEventListener("DOMContentLoaded", () => {
  const urlDisplay = document.getElementById("url");
  const toggleSwitch = document.getElementById("toggleSwitch");

  // Retrieve the state from storage
  chrome.storage.sync.get("isActive", (data) => {
    toggleSwitch.checked = data.isActive || false;
    urlDisplay.textContent = toggleSwitch.checked
      ? "Extension is ON"
      : "Extension is OFF";
  });

  // Listen for changes to the toggle switch
  toggleSwitch.addEventListener("change", () => {
    const isActive = toggleSwitch.checked;
    urlDisplay.textContent = isActive ? "Extension is ON" : "Extension is OFF";

    // Save the state to storage
    chrome.storage.sync.set({ isActive });
  });
});
