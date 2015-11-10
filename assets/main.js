var revealJsPluginsPath = 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.1.0/';
var codes;
if(typeof Prism === 'object'){
  codes = document.querySelectorAll('pre code:not([data-manual-highlight])');
  _.each(codes, function(code){
    Prism.highlightElement(code);
  });
}

// Full list of configuration options available here: 
// https://github.com/hakimel/reveal.js#configuration 
Reveal.initialize({
  width: '100%',
  controls: true,
  progress: true,
  history: true,
  center: true,
  // default/cube/page/concave/zoom/linear/fade/none 
  transition: 'none',
  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { src: revealJsPluginsPath + 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

    // Interpret Markdown in <section> elements
    { src: revealJsPluginsPath + 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: revealJsPluginsPath + 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

]
});