const headlines = Array.from(document.body.querySelectorAll("h1,h2,h3,h4,h5,h6")).map(headline => ({
  element: headline,
  level: parseInt(headline.tagName.slice(1), 10)
}));

headlines.forEach(({element, level}, i) => {
  // if the first headline is not a h1
  if (i === 0 && level !== 1) {
    element.style.outline = "1px dashed red";
  }
  
  // if the headline is a h1, but not the first headline
  else if (i > 0 && level === 1) {
    element.style.outline = "1px dashed red";
  }
  
  // if e.g. h4 follows an h2
  else if (i > 0 && headlines[i - 1].level + 1 < level) {
    element.style.outline = "1px solid red";
  }
  
});
