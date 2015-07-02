window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: {
            myProperty: "나눔 고딕, 맑은 고딕"
        }
    });
}, true);

