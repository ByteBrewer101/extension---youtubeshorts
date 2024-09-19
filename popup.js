document.addEventListener("DOMContentLoaded", () => {

  const redirectButton = document.getElementById("redirectButton");

 
    redirectButton.addEventListener("click", () => {
      chrome.tabs.create({
        url: "https://github.com/ByteBrewer101/extension---youtubeshorts",
      });
    });
  }
);
