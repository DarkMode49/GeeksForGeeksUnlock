function unlockGeeksForGeeks() {
  if (document.getElementsByClassName("login-modal-div").length > 0) {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.height = "100%";
    document.getElementsByClassName("login-modal-div")[0].remove();
  }
}

chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
  // changeInfo.status == "complete"
  if (tab.url.indexOf("geeksforgeeks.org") > -1) {
    chrome.scripting.executeScript({
      target: { tabId: tabID },
      function: unlockGeeksForGeeks,
    });
  }
});
