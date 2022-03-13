function unlockGeeksForGeeks() {
  if (document.getElementsByClassName("login-modal-div").length > 0) {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.height = "100%";
    document.getElementsByClassName("login-modal-div")[0].remove();
  }
}

var currentTabID = 0;
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  currentTabID = tabs[0].id;
});

document.getElementById("manualButton").addEventListener(
  "click",
  () => {
    chrome.scripting.executeScript({
      target: { tabId: currentTabID },
      function: unlockGeeksForGeeks,
    });
  },
  false
);
