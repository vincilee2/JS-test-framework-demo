```
npm install --save-dev mocha
npm install --save-dev chai
```

Add the following section to your package.json:
```
"scripts": {
  "test": "mocha"
}
```

run test

```npm run test```

```npx mocha ./mocha-demo/__test__ ```

## code coverage

```
npm install --save-dev nyc
npx nyc mocha ./mocha-demo/__test__ 
```