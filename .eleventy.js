// TODO: After Canary 19:
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // TODO: After Canary 19:
  // eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/library/templates/imgs");
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	});

  let baseurl = "/";
  if (process.env.BASEURL) {
    baseurl = process.env.BASEURL;
  }

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  const markdownItRenderer = new markdownIt();

  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str);
  });

  const md = new markdownIt({
    html: true,
  });
  
  return {
    pathPrefix: baseurl,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
