//**********************************************************
//
// Figma API
//
// Based on Figma's API Demo: https://github.com/figma/figma-api-demo/tree/master/spellchecker
//
//*********************************************************/
import * as request from 'request';
import * as traverse from 'traverse';
var file_id = FIGMA_TEST_FILE_ID;
var PERSONAL_ACCESS_TOKEN = MY_FIGMA_TOKEN;
var api_endpoint = 'https://api.figma.com/v1';
function getTitleNodes(figFile) {
    return traverse.nodes(figFile)
        .filter(function (node) { return hasKey(node, 'name') && node.name === 'page_title'; })
        .filter(function (node) { return hasKey(node, 'type') && node.type === 'TEXT'; });
}
function getHeaderNodes() {
    var headerNodesIds = getNodeId(pageUrl);
}
function getImageNodes() {
    var imageNodesIds = getNodeId(pageUrl);
}
//
//
//
// Add Title
function addTitleToCanvas(titleNodes) {
    titleNodes.forEach(function (node) {
        var titleEl = document.createElement('<h2>')
            .appendChild(node);
    });
}
//
//
//
// Add Headers
/*
function addHeadersToCanvas(headerUrl) {
    const sectHeader = new Header();

    sectHeader.src = headerUrl;

    sectHeader.onload = function () {
        imagesAndCoord.forEach(function (imageInfo) {
            const canvas = document.getElementById(imageInfo.canvasName);
            

        });
    };
}
*/
//
//
//
// Add Text
/*
function addTextToCanvas(textUrl) {
    const sectText = new Text();

    sectText.src = textUrl;

    sectText.onload = function () {
        imagesAndCoord.forEach(function (imageInfo) {
            const canvas = document.getElementById(imageInfo.canvasName);

        });
    };
}
*/
//
//
//
// Add Images
/*
function addImagesToCanvas(imageUrl) {
    const sectImg = new Image();

    sectImg.src = imageUrl;

    sectImg.onload = function () {
        imagesAndCoord.forEach(function (imageInfo) {
            const canvas = document.getElementById(imageInfo.canvasName);

        });
    };
}
*/
request.get(api_endpoint + "/files/" + file_id, {
    headers: {
        "Content-Type": "application/json",
        "x-figma-token": PERSONAL_ACCESS_TOKEN
    }
}, function (error, response, body) {
    requestErrorHandler(error, response, body);
    var textNodes = getTitleNodes(JSON.parse(body));
    addTitleToCanvas(textNodes);
});
function requestErrorHandler(error, response, body) {
    if (error) {
        console.log(error);
        console.log(body);
        process.exit(1);
    }
}
