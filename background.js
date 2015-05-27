chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(tab.id, { file: "jquery.js" }, function() {
     chrome.tabs.executeScript(tab.id, { file: "script.js" });
   });
});
