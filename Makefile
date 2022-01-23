migration/run:
	ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run

migration/revert:
	ts-node --transpile-only ./node_modules/typeorm/cli.js migration:revert
