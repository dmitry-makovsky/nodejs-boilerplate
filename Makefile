install: install-deps

run:
	npx babel-node 'src/bin/index.js' production

dev:
	npx nodemon --delay 1 --exec babel-node 'src/bin/index.js' developer

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

publish:
	npm publish

update-deps:
	npx npm-check-updates -u

.PHONY: test
