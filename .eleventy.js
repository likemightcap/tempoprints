module.exports = function(eleventyConfig) {
  // Copy through static files (no processing)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "src/script.js": "script.js" });

  return {
    dir: {
      input: "src",        // where your source lives
      includes: "_includes",
      output: "docs"       // build into /docs for GitHub Pages
    },
    htmlTemplateEngine: "njk"  // use Nunjucks
  };
};
