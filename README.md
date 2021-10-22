# Heading structure snippet

This snippet can be used to highlight heading elements that do not follow a logical structure.

I.e.:
- The first heading on a page is not an `h1` or an element is an `h1` but not the first heading.
- If an adjacent heading is smaller than the previous heading but skips a level (e.g. an `h4` follows `h2`)

Please note that this snippet only checks the logical structure, but not whether the heading structure makes sense in terms of content.

## How to use as a bookmarklet

Minify the code from the `index.js` (e.g. to https://minify-js.com/) and create a bookmark in your browser with the following url: `javascript:(function(){...})();` replacing `...` with the minified code.
