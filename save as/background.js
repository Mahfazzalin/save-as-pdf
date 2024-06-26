chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'printPage') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0 || !tabs[0].url.startsWith('http')) {
        console.error('No valid active tab found');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: printPage
      });
    });
  }
});

function printPage() {
  window.print();
}

