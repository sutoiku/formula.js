webpack = node_modules/.bin/webpack
jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
coveralls = node_modules/.bin/coveralls

build:
	@$(webpack)
	@$(webpack) --standalone
	@$(webpack) --prod
	@$(webpack) --prod --standalone

test:
	@$(mocha) -u tdd -r blanket

test-watch:
	@$(mocha) -u tdd -R min -w

lint:
	@$(jshint) lib/*.js

coveralls:
	@$(mocha) -r blanket -u tdd -R mocha-lcov-reporter | $(coveralls)

coverage:
	@$(mocha) -u tdd -R html-cov -r blanket > coverage-report.html

package: clean build
	rm -rf *.tgz || true
	@npm pack

watch:
	@$(mocha) -u tdd -R mocha-spec-cov -r blanket -w

clean:
	@rm -rf build/
	@rm -f coverage-report.html

.PHONY: build clean coverage test watch
