BIN = ./node_modules/.bin
MOCHA_OPTS = --timeout 6000 --recursive
REPORTER = spec
S3_STOIC=s3cmd -c ~/.s3cmd/.stoic
S3_NPM_REPO=s3://npm-repo
GENERATED_TEST_FILES=test/generated/*.js
TEST_FILES = test
TEST_FILE?=you_must_specify_the_test_file


lint:
	$(BIN)/jshint test/*

test: lint generate-tests
	$(BIN)/mocha $(MOCHA_OPTS) --reporter $(REPORTER) $(TEST_FILES)

generate-tests:
	@node util/generate-mocha-test-cases.js

test-reports: lib-cov
	[ -d "reports" ] && rm -rf reports/* || true
	mkdir -p reports
	$(MAKE) -k test REPORTER="xunit > reports/tests.xml"
	$(MAKE) -k test REPORTER="doc > reports/tests-doc.html"
	$(MAKE) -k test-cov

local-install:
	@npm install

package: clean
	@npm pack

check: local-install test-reports test-cov

lib-cov:
	[ -d "lib-cov" ] && rm -rf lib-cov || true
	$(BIN)/istanbul instrument --output lib-cov --no-compact --variable global.__coverage__ lib

test-cov: lib-cov generate-tests
	@IMPORTERJS_COV=1 $(MAKE) test "REPORTER=mocha-istanbul" ISTANBUL_REPORTERS=text-summary,html,cobertura
	@echo
	@echo open html-report/index.html file in your browser

clean:
	[ -d "lib-cov" ] && rm -rf lib-cov || true
	[ -d "reports" ] && rm -rf reports || true
	[ -d "build" ] && rm -rf build || true
	[ -d "html-report" ] && rm -rf html-report || true

deploy: package
	$(S3_STOIC) put *.tgz  $(S3_NPM_REPO)


.PHONY: test lib-cov
