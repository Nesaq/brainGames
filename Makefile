install:
	npm ci

run brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run


lint:
	npx eslint .

lint fix:
	npx eslint --fix .
	
run brain-even:
	node bin/brain-even.js

run brain-calc:
	node bin/brain-calc.js
	
run brain-gcd:
	node bin/brain-gcd.js
	
run brain-progression:
	node bin/brain-progression.js