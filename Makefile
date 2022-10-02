
ifeq (update_snapshot,$(firstword $(MAKECMDGOALS)))
  US_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(US_ARGS):;@:)
endif

.PHONY: help

CONTAINER_ID := `docker compose ps -q yell-front`

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up:  ## コンテナ起動
	@mutagen-compose up -d

down:  ## コンテナ停止
	@mutagen-compose down

logs:  ## ログ表示
	@docker compose logs -f --tail=1000

npm:  ## npm install
	@docker compose exec yell-front bash -i -c "npm install"

dev:  ## devサーバー起動
	@docker compose exec yell-front bash -i -c "npm run dev"

ssh:  ## コンテナへ接続
	@docker compose exec yell-front bash

app_build:  ## build
	@docker compose exec yell-front bash -i -c "npm run build"

lint:  ## lint
	@docker compose exec yell-front bash -i -c "npm run lint"

format:  ## format
	@docker compose exec yell-front bash -i -c "npm run format"

check:  ## check
	@docker compose exec yell-front bash -i -c "npm run check"

test:  ## playwright test
	@docker compose exec yell-front bash -i -c "npm run test"

rice-ball:  ## delete feature-flag
	@docker compose exec yell-front bash -i -c "npm run rice-ball"

update_snapshot:  ## playwright test with snapshot update
	@docker compose exec yell-front bash -i -c "npm run update-snapshot $(US_ARGS)"

rm_test_cache:  ## remove playwright test cache
	@rm -rf playwright/.cache


vitest:  ## vitest test
	@docker compose exec yell-front bash -i -c "npm run vitest"

storybook:  ## storybook
	@docker compose exec yell-front bash -i -c "npm run storybook"

api_build:  ## aspida build
	@docker compose exec yell-front bash -i -c "npm run api:build"

rebuild:  ## rebuild container
	@docker compose build --no-cache

