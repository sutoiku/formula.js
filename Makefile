BIN = ./node_modules/.bin
MOCHA = $(BIN)/mocha
MOCHA_OPTS = --timeout 6000 --recursive
NODE=node
REPORTER = spec
S3_STOIC=s3cmd -c ~/.s3cmd/.stoic
S3_NPM_REPO=s3://npm-repo
TEST_FILES=test
TEST_FILE?=you_must_specify_the_test_file

lint:
	$(BIN)/jshint lib/* test/*

test: generate-tests lint
	$(MOCHA) $(MOCHA_OPTS) --reporter $(REPORTER) $(TEST_FILES)

test-one: lint
	$(MOCHA) $(MOCHA_OPTS) --reporter $(REPORTER) $(TEST_FILE)

test-reports: clean
	mkdir reports
	$(MAKE) -k test MOCHA="istanbul cover _mocha --" REPORTER=xunit TEST_FILES="$(TEST_FILES) > reports/test.not_xml" || true
	# Remove console.out and console.err from the top and bottom of the text results file
	sed '/^<testsuite/,$$!d' reports/test.not_xml > reports/test.not_xml2
	sed '/^==[=]* Coverage summary =[=]*/,$$d' reports/test.not_xml2 > reports/test.xml
	# Output other report formats for jenkins to pick up
	istanbul report cobertura --verbose
	@echo open html-report/index.html file in your browser
	istanbul report html --verbose

package: clean
	rm -rf *.tgz || true
	@npm pack

generate-tests:
	$(NODE) ./util/generate-mocha-test-cases.js

clean:
	[ -d "coverage" ] && rm -rf coverage || true
	[ -d "lib-cov" ] && rm -rf lib-cov || true
	[ -d "reports" ] && rm -rf reports || true
	[ -d "build" ] && rm -rf build || true
	[ -d "html-report" ] && rm -rf html-report || true

deploy: package
	$(S3_STOIC) put *.tgz  $(S3_NPM_REPO)

.PHONY: test lib-cov
