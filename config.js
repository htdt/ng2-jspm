System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.es6",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "angular2/*": "ng2dist/js/prod/es6/angular2/*.es6",
    "rtts_assert/*": "ng2dist/js/prod/es5/rtts_assert/*.js"
  },
  "traceurOptions": {
    "annotations": true,
    "memberVariables": true,
    "typeAssertions": true,
    "typeAssertionModule": "rtts_assert/rtts_assert",
    "types": true
  }
});

System.config({
  "meta": {
    "npm:zone.js@0.4.1/zone": {
      "format": "global"
    }
  }
});

System.config({
  "map": {
    "zone.js": "npm:zone.js@0.4.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:zone.js@0.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

