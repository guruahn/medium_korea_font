function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            callback(this)
        }
    };
    xhr.send()
}
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var req = JSON.parse(request);
    if (req.queryWord) {
        var url = "http://tooltip.dic.naver.com/tooltip.nhn?wordString=" + req.queryWord + "&languageCode=4&nlp=false";
        xhrGet(url, function(xhr) {
            var obj = JSON.parse(xhr.responseText);
            sendResponse(obj)
        })
    } else if (req.settingValue) {
        var fontType = localStorage["fontType"] ? localStorage["fontType"] : "맑은 고딕";
        var fontWeight = localStorage["fontBold"] ? localStorage["fontBold"] : "bold";
        var fontSize = localStorage["fontSize"] ? localStorage["fontSize"] : 9;
        var fontColor = localStorage["fontColor"] ? "#" + localStorage["fontColor"] : "#000000";
        var borderSize = localStorage["borderSize"] ? localStorage["borderSize"] : 1;
        var borderColor = localStorage["borderColor"] ? "#" + localStorage["borderColor"] : "#707070";
        var backColor1 = localStorage["backColor1"] ? "#" + localStorage["backColor1"] : "#F0F0F0";
        var backColor2 = localStorage["backColor2"] ? "#" + localStorage["backColor2"] : "#DCDCDC";
        var boxPosition = localStorage["boxPosition"] ? localStorage["boxPosition"] : "DOWN";
        var offsetDistance = localStorage["offsetDistance"] ? localStorage["offsetDistance"] : 30;
        var delayedTime = localStorage["delayedTime"] ? localStorage["delayedTime"] : 200;
        var obj = JSON.stringify({
            "fontType": fontType,
            "fontWeight": fontWeight,
            "fontSize": fontSize,
            "fontColor": fontColor,
            "borderSize": borderSize,
            "borderColor": borderColor,
            "backColor1": backColor1,
            "backColor2": backColor2,
            "boxPosition": boxPosition,
            "offsetDistance": offsetDistance,
            "delayedTime": delayedTime
        });
        sendResponse(obj)
    } else sendResponse({})
});