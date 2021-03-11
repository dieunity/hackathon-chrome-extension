// console.log
console.log('main.js is loaded');
// document.getElementById("base_content").style.filter = "grayscale(100%)";
// alter the style element of the root <html> node, setting filter to max grayscale
document.documentElement.style.filter = "grayscale(100%)";

// stretch feature: need to access the user defined level of grayscale 
// by using chrome.storage.sync.get('grayscaleRange')

// need to change manifest.json to enable storage
// function grayscaleTime() {
//   console.log('grayscaleTime function called');
//   chrome.storage.sync.get("grayRange", function(items) {
//     console.log(items.grayRange);
//     const grayRange = '100%';
//     console.log(`"grayscale(${grayRange})"`);
//     document.documentElement.style.filter = `"grayscale(${grayRange})"`;
//     console.log(document);
//     console.log('grayscaleTime function called');
//   });
// }
// grayscaleTime();