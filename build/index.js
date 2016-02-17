var _, defaults, gulp, log, lsr, net, sourceClientDirectoryPath, sourceDirectoryPath, sourceServerDirectoryPath, targetClientDirectoryPath, targetDirectoryPath, targetServerDirectoryPath, testDirectoryPath;

_ = require("lodash");

net = require("net");

lsr = require("lsr");

gulp = require("gulp");

log = require("./lib/log");

sourceDirectoryPath = "src";

targetDirectoryPath = "build";

testDirectoryPath = "test";

sourceClientDirectoryPath = sourceDirectoryPath + "/client";

sourceServerDirectoryPath = sourceDirectoryPath + "/server";

targetClientDirectoryPath = targetDirectoryPath + "/client";

targetServerDirectoryPath = targetDirectoryPath + "/server";

defaults = {
  bundle: {
    enabled: true,
    externals: [],
    vendor: {
      entry: sourceClientDirectoryPath + "/js/vendor/vendor.coffee",
      target: targetClientDirectoryPath + "/js",
      bundle: "vendor.bundle.js",
      source: sourceClientDirectoryPath + "/js/app/vendor"
    },
    app: {
      entry: sourceClientDirectoryPath + "/js/app/app.coffee",
      target: targetClientDirectoryPath + "/js",
      bundle: "app.bundle.js",
      paths: [sourceClientDirectoryPath + "/js/app"],
      extensions: [".coffee", ".jade", ".cjsx"],
      transforms: ["coffee-reactify", "jadeify"]
    }
  },
  clean: {
    enabled: true,
    targetDirectoryPath: targetDirectoryPath
  },
  coffee: {
    enabled: true,
    sourceDirectoryPath: sourceServerDirectoryPath,
    targetDirectoryPath: targetServerDirectoryPath
  },
  copy: {
    enabled: true,
    excluded: ["**/*.coffee", "**/*.less", "**/*.cjsx", "src/client/js{,/**}"],
    sourceDirectoryPath: sourceDirectoryPath,
    targetDirectoryPath: targetDirectoryPath
  },
  documentation: {
    enabled: true,
    sourceDirectoryPath: sourceDirectoryPath,
    targetDirectoryPath: targetDirectoryPath
  },
  less: {
    enabled: true,
    entryFilePath: sourceClientDirectoryPath + "/less/app.less",
    targetDirectoryPath: targetClientDirectoryPath + "/css"
  },
  livereload: {
    enabled: true
  },
  nodemon: {
    enabled: true,
    entryFilePath: "app.js",
    watchGlob: [sourceServerDirectoryPath + "/**/*"],
    extra: ["cfg.js", "app.js"]
  },
  forever: {
    enabled: false,
    entryFilePath: "app.js",
    watchDirectoryPath: sourceServerDirectoryPath
  },
  tests: {
    enabled: true,
    directoryPath: "test"
  },
  watch: {
    enabled: true,
    sourceDirectoryPath: sourceDirectoryPath,
    testDirectoryPath: testDirectoryPath
  }
};

module.exports = function(options) {
  var i, len, ref, results, stat;
  if (options == null) {
    options = {};
  }
  options = _.merge(defaults, options);
  ref = lsr.sync(__dirname + "/tasks");
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    stat = ref[i];
    if (stat.isDirectory()) {
      continue;
    }
    results.push(require(stat.fullPath)(options));
  }
  return results;
};
