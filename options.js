// need to do an event listener to save the range set by user
// by using chrome.storage.sync.set
function save_options(){
  let grayRange = document.getElementById('grayscaleRange').nodeValue;
  chrome.storage.sync.set({
    grayRange : grayRange
  });
  window.close();
}
// trying to invoke it after a few seconds to see if it will save
setTimeout(save_options, 1000);