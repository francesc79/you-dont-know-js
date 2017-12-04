(function() {
  var markdownpdf = require("markdown-pdf")
  , split = require("split")
  , through = require("through")
  , duplexer = require("duplexer");

  const PATH_YOU_DONT_KNOW_JS = './You-Dont-Know-JS/';


  function asyncPerformance() {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "async & performance/cover.jpg") + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "async & performance/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/foreword.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch3.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch4.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch5.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/ch6.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/apA.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/apB.md", 
      PATH_YOU_DONT_KNOW_JS + "async & performance/apC.md"
      ]
      , bookPath = "./You Don't Know JS - Async & Performance.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }



  function es6Beyond () {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "es6 & beyond/cover.jpg")
                      .replace(/fig1\.png/g, PATH_YOU_DONT_KNOW_JS + "es6 & beyond/fig1.png") + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/foreword.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch3.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch4.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch5.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch6.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch7.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/ch8.md", 
      PATH_YOU_DONT_KNOW_JS + "es6 & beyond/apA.md"
    ]
      , bookPath = "./You Don't Know JS - ES6 & Beyond.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }

  function scopeClosures () {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "scope & closures/cover.jpg")
                      .replace(/fig1\.png/g, PATH_YOU_DONT_KNOW_JS + "scope & closures/fig1.png")
                      .replace(/fig2\.png/g, PATH_YOU_DONT_KNOW_JS + "scope & closures/fig2.png")  + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "scope & closures/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/ch3.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/ch4.md", 
      PATH_YOU_DONT_KNOW_JS + "scope & closures/ch5.md",  
      PATH_YOU_DONT_KNOW_JS + "scope & closures/apA.md",
      PATH_YOU_DONT_KNOW_JS + "scope & closures/apB.md",
      PATH_YOU_DONT_KNOW_JS + "scope & closures/apC.md",
      PATH_YOU_DONT_KNOW_JS + "scope & closures/apD.md"
    ]
      , bookPath = "./You Don't Know JS - Scope & Closures.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }

  function thisObjectPrototypes () {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/cover.jpg")
                      .replace(/fig1\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig1.png")
                      .replace(/fig2\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig2.png")
                      .replace(/fig3\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig3.png")
                      .replace(/fig4\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig4.png")
                      .replace(/fig5\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig5.png")
                      .replace(/fig6\.png/g, PATH_YOU_DONT_KNOW_JS + "this & object prototypes/fig6.png")  + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/foreword.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch3.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch4.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch5.md", 
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/ch6.md",   
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/apA.md",
      PATH_YOU_DONT_KNOW_JS + "this & object prototypes/apB.md"
    ]
      , bookPath = "./You Don't Know JS - This & Object Prototypes.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }

  function typesGrammar () {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "types & grammar/cover.jpg")
                      .replace(/fig1\.png/g, PATH_YOU_DONT_KNOW_JS + "types & grammar/fig1.png")  + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "types & grammar/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/foreword.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/ch3.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/ch4.md", 
      PATH_YOU_DONT_KNOW_JS + "types & grammar/ch5.md",   
      PATH_YOU_DONT_KNOW_JS + "types & grammar/apA.md",
      PATH_YOU_DONT_KNOW_JS + "types & grammar/apB.md"
    ]
      , bookPath = "./You Don't Know JS - Types & Grammar.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }

  function upGoing () {
    function preProcessMd () {
      var splitter = split()
      var replacer = through(function (data) {
        this.queue(data.replace(/cover\.jpg/g, PATH_YOU_DONT_KNOW_JS + "up & going/cover.jpg")
                      .replace(/fig1\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig1.png")
                      .replace(/fig2\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig2.png")
                      .replace(/fig3\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig3.png")
                      .replace(/fig4\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig4.png")
                      .replace(/fig5\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig5.png")
                      .replace(/fig6\.png/g, PATH_YOU_DONT_KNOW_JS + "up & going/fig6.png")  + "\n")
      })
      splitter.pipe(replacer);
      return duplexer(splitter, replacer);
    }
    
    var mdDocs = [
      PATH_YOU_DONT_KNOW_JS + "up & going/README.md", 
      PATH_YOU_DONT_KNOW_JS + "preface.md", 
      PATH_YOU_DONT_KNOW_JS + "up & going/foreword.md", 
      PATH_YOU_DONT_KNOW_JS + "up & going/toc.md", 
      PATH_YOU_DONT_KNOW_JS + "up & going/ch1.md", 
      PATH_YOU_DONT_KNOW_JS + "up & going/ch2.md", 
      PATH_YOU_DONT_KNOW_JS + "up & going/ch3.md",    
      PATH_YOU_DONT_KNOW_JS + "up & going/apA.md"
    ]
      , bookPath = PATH_YOU_DONT_KNOW_JS + "You Don't Know JS - Up & Going.pdf"
    

    markdownpdf({preProcessMd, cssPath:'./pdf.css'})
    .concat.from(mdDocs)
    .to(bookPath, function () {
      console.log("Created", bookPath)
    });
  }

  asyncPerformance();
  es6Beyond();
  scopeClosures();
  thisObjectPrototypes();
  typesGrammar();
  upGoing();
}) ();