# Finds the maximum value in an array of objects

## Usage
First install:
```
npm install --save
```

Then use it:
```
const max = require('max-value-in-array-of-objects')

const data = [
      {
          acorns: 1,
      },
      {
          pebbles: 999,
          acorns: 2,
      },
      {
          acorns: 3,
          'Crumble cakes': 0,
          Dizzlepix: 1000,
      }
    ]

max(data, ['acorns', 'pebbles', 'Crumble cakes']) // 999
```

It only looks in the categories you've specified, which is why it returned 999 pebbles instead of 1000 Dizzlepix.
