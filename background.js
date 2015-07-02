chrome.runtime.onInstalled.addListener(function(details) {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([rule1]);
	});
});

chrome.runtime.onStartup.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([rule1]);
	});
});

var rule1 = {
	conditions: [
		new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { urlContains: 'medium.com', schemes: ['https'] }
		})
	],
	actions: [ 
		new chrome.declarativeContent.ShowPageAction()
		
	]
};
