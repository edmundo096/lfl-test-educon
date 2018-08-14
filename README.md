
# LFL Test - Educon page

Mainly created as a refresher of Bootstrap v4 and old school HTML with Sass and gulp.

**DEMO** on surge: http://lfl-test-educon.surge.sh/ 

## Install and run

1. Clone and use `npm install`.
2. We use gulp, so to process/build the files into the */dist* directory, 
   use `npm run build` or `gulp`


Project has 2 main gulp tasks:
- `gulp default`, which is the default, cleans then runs `gulp build` 
  (also ran with `npm run build`)
- `gulp watch`, which observes changes on the src files (also ran with `npm start`).
 
   

### Ideas not implemented

- Include jQuery, Bootstrap Sass and JS files from *node_modules* and not from CDN.
    - This would permit use and modify Sass variables and mixings making a lot easier to customize.
- Support processing of JS files, even with support of ES6+ with babel.
- Browser reload plugin/task when source code files changes.
- Process and/or minify source files.
- Enhance and separate gul, to tasks into different files.
- Use a module packager (e.g. webpack) with or to replace gulp.
- Use a template system for HTML (e.g. Pug).
- Use a CLI/generator for the project (e.g. Yeoman, Yeogurt).
- Use a modern front end framework with their CLIs (e.g. Angular, Vue, React).


### Recomended TODOs
- Install and use Bootstrap from NPM package, importing the *node_module*
  into the *main.scss*. Import, use and override the bootstrap variables,
  mainly use the screen width breakpoints.
  Then override:
    - Primary color and other colors.
    - Remove round borders.
- Create some looped mixing on footer.
