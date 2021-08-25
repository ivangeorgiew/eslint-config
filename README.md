# @ivan_georgiew/eslint-config

My sane eslint config.

## Installation

Use your favorite package manager (mine is pnpm):

`pnpm add -D eslint @ivan_georgiew/eslint-config`

## Usage

In your `package.json` file:

```json
{
    "browserslist": ["defaults", "maintained node versions", "not IE 11"],
    "eslintConfig": {
        "extends": ["@ivan_georgiew/eslint-config"]
    }
}
```
