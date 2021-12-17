install:
	npm ci

run brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run


lint:
	npx eslint .
	
run brain-even:
	node bin/brain-even.js
