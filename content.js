// content.js

// let dictionaryDetected = false; // A flag to ensure detection happens only once
// let word = null;

// var iframe = document.createElement('iframe'); 
// iframe.style.background = "green";
// iframe.style.height = "100%";
// iframe.style.width = "400px";
// iframe.style.position = "fixed";
// iframe.style.top = "0px";
// iframe.style.right = "0px";
// iframe.style.zIndex = "9000000000000000000";
// iframe.style.border = "0px"; 
// iframe.src = chrome.runtime.getURL("popup.html")

// document.body.appendChild(iframe);

// function toggle(){
//     if(iframe.style.width == "0px"){
//         iframe.style.width="400px";
//     }
//     else{
//         iframe.style.width="0px";
//     }
// }


// // Function to check for the presence of dictionary results
// function detectDictionarySection() {
//     const dictionaryDetectElement = document.querySelector(".lr_container"); // Example class for dictionary section
//     const dictionaryWrapperElement = document.querySelector(".KnZOyc.URgIvb");
//     const dictionaryElement = document.querySelector(".VpH2eb.vmod");
//     const partsOfSpeechElements = dictionaryElement.children.item(1).children;

//     if (dictionaryDetectElement && dictionaryWrapperElement && !dictionaryDetected) {
//         console.log("Dictionary section detected!");
//         dictionaryDetected = true; // Set the flag to prevent multiple detections

//         word = document.querySelector(".RES9jf.xWMiCc.JgzqYd").firstChild.textContent;
        
//         for(let i = 0; i < partsOfSpeechElements.length; i++) {
//             const wrapper = partsOfSpeechElements.item(i);
//             console.log(wrapper);
//             const partOfSpeechWrapper = wrapper.querySelector("span.YrbPuc");
//             if(!partOfSpeechWrapper) continue;
//             partOfSpeech = partOfSpeechWrapper.textContent;
//             const definitionsElements = wrapper.querySelectorAll(".PZPZlf:not([class*=' '])");
//             definitionsElements.forEach((el) => {
//                 const button = document.createElement("button");
//                 button.innerText = "Select this definition"; // Text for the button
//                 button.style.margin = "5px 0 5px 0"; // Add some styling (optional)

//                 // Add an event listener for the button (you can define the action here)
//                 button.addEventListener("click", () => {
//                     let definition = "";
//                     const definitionSpans = el.firstChild.children;
//                     for(let j = 0; j < definitionSpans.length; j++) {
//                         const span = definitionSpans.item(j);
//                         definition = definition.concat(span.textContent);
//                     }
//                     alert(definition); // Example action
//                     chrome.storage.local.set({ [`[${partOfSpeech}] ${definition}`] : word }, () => {
//                         alert("Successfully saved word");
//                     });
//                 });
                
//                 // Append the button to the dictionary section
//                 el.appendChild(button);
//             });    


//         }

//         // Set the flag to true to prevent multiple detections
//         dictionaryDetected = true;
//     }
// }

// // Set up a MutationObserver to detect changes in the DOM
// const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//         if (mutation.type === 'childList' && !dictionaryDetected) {
//             detectDictionarySection();
//         }
//     });
// });

// // Start observing the body for changes in child elements
// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });

// // Initial check in case the dictionary section is already present when the page loads
// detectDictionarySection();
