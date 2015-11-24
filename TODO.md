# Kilowatt
### Olo! It's K-k-k-kilowatt! (The Slush generator!)
#### Author: Jordan Timmerman (@skorlir)
---
#### ***This generator is incomplete***
---

## TODO
- Finish ~~JS~~, ~~Coffee~~, ~~LS~~ alternatives
- Finish ~~JS~~, ~~Coffee~~, ~~LS~~ gulpfiles/subtasks
- ~~Stylus~~, ~~Sass~~, ~~CSS~~ alternatives
- ~~Jade~~, ~~HTML~~ alternatives
- Gulp tasks
  - ~~Compilation~~
    - ~~Plumber~~
    - ~~Stylus~~
    - ~~Sass~~
    - ~~Coffee~~
    - ~~LiveScript~~
    - ~~Jade~~
  - ~~Sourcemaps~~
  - Assets
    - ~~Image minification~~
    - Image resizer (?) (gulp-responsive)
    - ~~Fonts~~
    - Other media? (just grab anything in res that doesn't match image/font)
      AKA 'extras'
  - Packaging
    - ~~Bower (wiredep)~~
      - Bower is (basically) deprecated! But oh well
    - ~~Bower fonts (wiredep)~~
    - Browserify
    - JSPM + SystemJS (?)
      - But not currently supporting Babel/ES6, so...
        this doesn't make much sense to support
  - Serve
    - ~~Choose free port (get-port)~~ **BrowserSync does this for you!**
    - ~~BrowserSync~~
      - ~~serve:[live:]dist~~
      - ~~serve:[live:]tmp~~
  - Watch
    - ~~For compilation tasks~~
    - ~~For wiredep~~
    - Gulp-autowatch?
  - Build
    - Minification
    - Useref (?)
    - Pixrem (gulp-pixrem, CSS px -> rem) (?)
    - Autoprefixer !!
    - Optional JSHint
    - Check unused CSS (gulp-check-unused-css)
    - All necessary assets --> dist/
  - Testing
    - gulp test task for to do JS tests, yo
- Testing
  - Karma.conf.js
  - Mocha?
  - Package.json setup
- Config
  - .travis.yml
  - ~~bower.json~~
  - ~~package.json~~
  - README.md template
  - ~~.bowerrc~~
  - ~~.gitignore~~
- Generator Stuff
  - CLI option selection
  - Templating (author, title, package.json, jade, all alternatives)
  - Gulptasks on/off by option (shouldn't need to do that for js langs)
