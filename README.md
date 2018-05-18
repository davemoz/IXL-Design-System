# IXL Design System

This repo contains a first version of the IXL Design System.

## Figma Api

The system includes two different [incomplete & as of yet not-working] implementations of the Figma REST API to [render project text nodes](https://www.figma.com/developers/docs#text-props) and [images](https://www.figma.com/developers/docs#images-endpoint) into the Design System pages.

### Set up

1. Update `MY_FIGMA_TOKEN` in `scripts.js` and 'figma.ts'
2. Open `index.html` in a web browser.

_vvvvvvv - via Figma docs_

### API Usage

We use 1 endpoint in this project:

- `GET /v1/images/:file_key` - Render a frame from a specific Figma document and return a url to 
rendered image.

We render an image of a specific frame and use `perspective.js` to project that rendered
frame into several different mock ups. You could imagine using this to demo the design
for an app you are working on in Figma.