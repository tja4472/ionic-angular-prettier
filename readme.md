Example of using Ionic Angular with Prettier and TSLint.

# References

- [Codelyzer](https://github.com/mgechev/codelyzer)
- [Prettier](https://github.com/prettier/prettier)
- [TSLint](https://github.com/palantir/tslint)
- [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

## Visual Studio Code Extensions

- [TSLint](https://github.com/Microsoft/vscode-tslint)
- [Prettier](https://github.com/prettier/prettier-vscode)

# Prettier

`npm install --save-dev --save-exact prettier`

## .prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "requirePragma": false,
  "arrowParens": "always"
}
```

## package.json

```json
  "scripts": {

    "prettier:list": "prettier --list-different \"./{e2e,src}/**/*.{scss,ts}\" || ECHO .",
    "prettier:write": "prettier --write \"./{e2e,src}/**/*.{scss,ts}\"",

  }
```

`prettier --list-different` returns an error code of 1 if files need updating.

`./{e2e,src}/**/*.{scss,ts}`

- `.\e2e\*\*.scss`
- `.\e2e\*\*.ts`
- `.\src\*\*.scss`
- `.\src\*\*.ts`

# tslint-config-prettier

`npm install --save-dev --save-exact tslint-config-prettier`

## package.json

```json
  "scripts": {

    "tslint-check": "tslint-config-prettier-check ./tslint.json"

  }
```

# tslint

## tslint.json

```json
{
  "rulesDirectory": ["node_modules/codelyzer"],
  "extends": ["tslint:latest", "tslint-config-prettier"]
}
```
