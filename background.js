chrome.browserAction.onClicked.addListener(function(tab) {
	var activeTab;
	
	
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		activeTab = tabs[0];
	});

	chrome.tabs.query({}, function (tabs) {
		for (var i = 0; i < tabs.length; i++) {
			if(tabs[i].id != activeTab.id) {
				chrome.tabs.remove(tabs[i].id);
			}
		}
	});
});