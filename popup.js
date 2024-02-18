document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('websites', function(data) {
      var websites = data.websites || {};
      var websiteList = document.getElementById('websiteList');
  
      for (var hostname in websites) {
        var listItem = document.createElement('li');
        listItem.textContent = hostname + ': ' + (websites[hostname] / 1000) + ' seconds';
        websiteList.appendChild(listItem);
      }
    });
  });
  