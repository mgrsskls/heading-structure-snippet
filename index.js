(function () {
  const headlines = Array.from(
    document.body.querySelectorAll("h1,h2,h3,h4,h5,h6")
  ).map((headline) => ({
    element: headline,
    level: parseInt(headline.tagName.slice(1), 10),
  }));

  headlines.forEach(({ element, level }, i) => {
    if (i > 0) {
      // if the headline is a h1, but not the first headline
      if (level === 1) {
        element.style.outline = "3px solid red";
      }

      // if a headline skips a level, e.g. h4 follows an h2
      else if (headlines[i - 1].level + 1 < level) {
        element.style.outline = "3px solid red";
      }
    } else {
      // if the first headline is not a h1
      if (level !== 1) {
        element.style.outline = "3px solid red";
      }
    }
  });
})();
