coffee-project
==============

A gulp based project for coffee-script, copied from the awesome [id-project](https://github.com/Industrial/id-project) by [Industrial](https://github.com/Industrial)

## Installation

```bash
$ npm install --save-dev coffee-project gulp coffee-script
```

## Usage

1. Put a file named `gulpfile.coffee` in your project directory containing:

```coffee
externals = [
	{ require: "underscore" }
	{ require: "jquery" }
	{ require: "async" }
	{ require: "backbone" }
	{ require: "backbone.marionette" }
	{ require: "socket.io-client" }
	{ require: "backbone.babysitter" }
	{ require: "backbone.wreqr" }
	{ require: "backbone.iobind/dist/backbone.iobind.js" }
	{ require: "backbone.iobind/dist/backbone.iosync.js" }
	{ require: "bootstrap"	 }
]

(require "coffee-project")
	documentation: enabled: false
	forever:       enabled: false
	livereload:    enabled: true
	bundle:        enabled: true, externals: externals
	copy:          enabled: true
	less:          enabled: true
	tests:         enabled: true
	coffee:        enabled: true
	watch:         enabled: true
	nodemon:       enabled: true
	clean:         enabled: true

```

2. Run gulp:

```bash
$ gulp
```

or

```bash
$ gulp compile
$ node app.js
```
