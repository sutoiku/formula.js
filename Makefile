browserify = node_modules/browserify/bin/cmd.js
uglify = node_modules/uglify-js/bin/uglifyjs
jshint = node_modules/jshint/bin/jshint
mocha = node_modules/mocha/bin/mocha
coveralls = node_modules/coveralls/bin/coveralls.js

build:
	$(browserify) index.js -o build/bundle.js -s Formula
	$(uglify) build/bundle.js -o build/bundle.min.js

test:
	jshint lib/*.js
	$(mocha) -u tdd -R mocha-spec-cov -r blanket

coveralls:
	$(mocha) -r blanket -u tdd -R mocha-lcov-reporter | $(coveralls)

coverage:
	$(mocha) -u tdd -R html-cov -r blanket > coverage-report.html

watch:
	$(mocha) -u tdd -R mocha-spec-cov -r blanket -w

.PHONY: build test coverage watch