# ESLint OCI React

## How to Install

1. adds `eslint` and `eslint-config-oci-react` into your `devDependencies`

    ```json
      "devDependencies": {
        ...
        "eslint-config-oci-react": "https://github.com/orangecapinnovative/eslint-config-oci-react.git#v0.3.0",
        ...
      }
    ```

2. creates `.eslintrc.js` (if it doesn't exists) and extends this rule

    ```json
    {
      ...,
      "extends": "oci-react",
      ...
    }
    ```

3. installs

    ```bash
      npm install
    ```