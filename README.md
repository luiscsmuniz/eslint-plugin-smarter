# eslint-plugin-smarter

Linter for all projects from Smarter

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-smarter`:

```
$ npm install eslint-plugin-smarter --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-smarter` globally.

## Usage

Add `smarter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["smarter"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "smarter/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
