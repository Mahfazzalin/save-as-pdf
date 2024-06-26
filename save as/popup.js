document.getElementById('title').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://your-redirect-url.com' });
});

document.getElementById('printButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'printPage' });
  chrome.tabs.create({ url: 'https://your-redirect-url.com', active: false });
});

