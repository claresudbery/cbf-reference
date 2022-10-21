# Contents

- [Misc](#misc)
- [Running only subsets of tests](#running-only-subsets-of-tests)

# Misc

- Jest is a javascript unit testing framework
- [Docs](https://jestjs.io/docs)
- [Matchers](https://jestjs.io/docs/using-matchers)

# Running only subsets of tests

You can edit or add a "scripts" section in your `package.json` like this...

```
"scripts": {
    "test": "jest",
    "test:char": "jest --watchAll --testPathPattern=src/character-copier",
    "test:fizzbuzz": "jest --watchAll --testPathPattern=src/fizzbuzz"
  },
```

This will allow you to run this in the terminal - `npm run test:char` - and it will watch your code and run tests in the background whenever you edit your code, but only for the specified sub-folder.