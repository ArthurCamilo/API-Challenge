export default {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 13,
		"sourceType": "module"
	},
	"rules": {
		indent: [ "error", "tab" ],
		"linebreak-style": [ "error", "unix" ],
		quotes: [ "error", "double" ],
		semi: [ "error", "always" ],
		"array-bracket-spacing": [ "error", "always" ],
		"object-curly-spacing": [ "error", "always" ],
		"space-in-parens": [ "error", "always" ]
	}
};
