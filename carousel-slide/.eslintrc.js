module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: 'babel-eslint',
  env: {
    node: true
  },
  rules: {
    quotes:  [​
      'error'​, ​
      'single'​, 
      { avoidEscape: ​true​ }
    ],
    ​'comma-dangle'​: [​
      'error'​, ​
      'always-multiline'​
    ]
  },
  settings: {
    react: {
      version: ​'16.12.0'​
   }
  },
  
};
