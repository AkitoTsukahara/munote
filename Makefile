
ifeq (update_snapshot,$(firstword $(MAKECMDGOALS)))
  US_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(US_ARGS):;@:)
endif

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

npm:  ## npm install
	npm install

dev:  ## devサーバー起動
	npm run dev

app_build:  ## build
	npm run build

lint:  ## lint
	npm run lint

format:  ## format
	npm run format

check:  ## check
	npm run check

test:  ## playwright test
	npm run test

update_snapshot:  ## playwright test with snapshot update
	npm run update-snapshot $(US_ARGS)

rm_test_cache:  ## remove playwright test cache
	@rm -rf playwright/.cache


vitest:  ## vitest test
	npm run vitest

storybook:  ## storybook
	npm run storybook

api_build:  ## aspida build
	npm run api:build
