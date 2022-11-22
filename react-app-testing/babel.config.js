module.exports = {
    presets: [
      ['@babel/preset-env', {debug:true }],
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
    env: {
      test: {
        presets: [
          [ "@babel/preset-env", { 
            targets: { node: "current" },
            debug : true
          }],
          ["@babel/preset-react", {runtime: "automatic"}]
        ]
      }
    }
};