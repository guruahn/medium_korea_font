chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        document.body.innerText = request.source;
    }
});

function onWindowLoad() {
    chrome.tabs.executeScript(null, {
        file: "getSource.js"
        }, function() {
            if (chrome.extension.lastError) {
                document.body.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
            }
        });
}
window.onload = onWindowLoad;