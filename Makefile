browserify = node_modules/browserify/bin/cmd.js
uglify = node_modules/uglify-js/bin/uglifyjs
jshint = node_modules/jshint/bin/jshint
mocha = node_modules/mocha/bin/mocha

build:
	$(browserify) index.js -o build/bundle.js -s Formula
	$(uglify) build/bundle.js -o build/bundle.min.js

test:
	jshint lib/*.js
	$(mocha) -u tdd -R mocha-spec-cov -r blanket

coverage:
	$(mocha) -u tdd -R html-cov -r blanket > coverage-report.html

watch:
	$(mocha) -u tdd -R mocha-spec-cov -r blanket -w

.PHONY: build test coverage watch