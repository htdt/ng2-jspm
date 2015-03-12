## Run Angular 2 app with jspm
0. `npm install -g jspm live-server`
1. Clone and build [Angular 2](https://github.com/angular/angular) -> result is in `dist` folder.
2. Create project folder. Run `jspm init` for initial configuration.
3. Copy `dist` from angular to `ng2dist` in project.
4. `jspm install npm:zone.js` (used in angular globally).
5. Add to `config.js`
 * angular2 and rtts_assert paths
 * traceur options
 * zone.js meta global
6. Add `index.html` and `main.es6`. Add `import 'zone.js';` to main.
7. Run `live-server` and observe the results.

### Or just clone this repo.

## Bundle project -> build.js 
Run: `jspm bundle-sfx --minify proj/main`
then switch the DEV and PROD scripts on index.html

## Usefull links
- [Angular 2 hello world](https://github.com/angular/angular/tree/master/modules/examples/src/hello_world)
- [Angular 2 TODO](https://github.com/davideast/ng2do)
- [jspm](https://github.com/jspm/jspm-cli/)
- [SystemJS](https://github.com/systemjs/systemjs)
- [Cool jspm demo](https://github.com/geelen/loopgifs)

### MIT License
