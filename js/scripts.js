//****************************************
//
// Figma API
//
// Based on Figma's API Demo: https://github.com/figma/figma-api-demo/tree/master/projector
//
//****************************************

// const imagesAndCoord = [
//     { canvasName: 'canvas', coords: [[650, 134], [794, 161], [656, 441], [514, 402]] },
//     { canvasName: 'canvas_2', coords: [[777, 172], [871, 266], [518, 477], [461, 362]] },
//     { canvasName: 'canvas_3', coords: [[304, 134], [549, 147], [550, 567], [312, 578]] }
// ];
// const PERSONAL_ACCESS_TOKEN = MY_FIGMA_TOKEN;
// function getFileKey(pageUrl) {
//     const parser = document.createElement('a');
//     parser.href = pageUrl;
//     return parser.pathname.replace('/file/', '').replace(/\/.*/, '');
// }
// function getNodeId(pageUrl) {
//     const parser = document.createElement('a');
//     parser.href = pageUrl;
//     return decodeURIComponent(parser.search).replace('?node-id=', '');
// }
// function apiRequest(endpoint) {
//     return fetch('https://api.figma.com/v1' + endpoint, {
//         method: 'GET',
//         headers: { "x-figma-token": PERSONAL_ACCESS_TOKEN }
//     }).then(function (response) {
//         return response.json();
//     }).catch(function (error) {
//         return { err: error };
//     });
// }
// function addImageToCanvas(imageUrl) {
//     stopProgress();
//     const img = new Image();
//     img.src = imageUrl;
//     img.onload = function () {
//         imagesAndCoord.forEach(function (imageInfo) {
//             const canvas = document.getElementById(imageInfo.canvasName);
//             const context = canvas.getContext('2d')
//             const op = new html5jp.perspective(context, img);
//             op.draw(imageInfo.coords);
//         });
//     };
// }
// function callFigmaAndDrawMockups() {
//     startProgress();
//     const pageUrl = document.getElementById('url_input').value;
//     const nodeId = getNodeId(pageUrl);
//     apiRequest('/images/' + getFileKey(pageUrl) + '?ids=' + nodeId)
//         .then(function (apiResponse) {
//             addImageToCanvas(apiResponse.images[nodeId]);
//         });
// }


//****************************************
// Navigation toggle - NOT FIGMA API-related
//****************************************
var acc = document.getElementsByClassName("top-level");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel 
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        */
    });
}

/* Instatiate Clipboard.js */
/*
var clipboard = new ClipboardJS('.copy-text-icon');

clipboard.on('success', function(e) {
    this.classList.add('tooltipped tooltipped-n');
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
*/