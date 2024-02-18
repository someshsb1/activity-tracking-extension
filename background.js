chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      chrome.storage.local.get('websites', function(data) {
        var websites = data.websites || {};
        var hostname = new URL(changeInfo.url).hostname;
        var startTime = new Date().getTime();
  
        if (!websites[hostname]) {
          websites[hostname] = 0;
        }
  
        chrome.storage.local.set({ 'websites': websites });
  
        chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
          var totalTime = new Date().getTime() - startTime;
          websites[hostname] += totalTime;
          chrome.storage.local.set({ 'websites': websites });
        });
      });
    }
  });
  