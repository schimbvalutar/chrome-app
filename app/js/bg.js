chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({'url': 'https://schimbvalutar.com/'});
});