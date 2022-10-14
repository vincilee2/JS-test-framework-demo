```npm install --save-dev jest```

Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```

run test

```npm run test```

```npx jest --coverage```

## config
```
"jest": {
    "testMatch": ["**/jest-demo/**/*.test.js"]
}
```