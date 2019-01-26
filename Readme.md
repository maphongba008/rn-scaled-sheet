
[![Version](https://img.shields.io/npm/v/rn-scaled-sheet.svg)](https://www.npmjs.com/package/rn-scaled-sheet)
[![NPM](https://img.shields.io/npm/dm/rn-scaled-sheet.svg)](https://www.npmjs.com/package/rn-scaled-sheet)


# rn-scaled-sheet

React Native multi screen size support. Scale your dimensions depends on screen size. Inspired by [react-native-size-matters](https://github.com/nirsky/react-native-size-matters)

### Installation

```bash
npm install --save rn-scaled-sheet
or
yarn add rn-scaled-sheet
```

### Usage

```javascript
import React from 'react';
import { ScaledSheet } from 'rn-scaled-sheet';


/**
 * Base screen size is 375 x 667
   Assume app running on 411 x 896 phone,
   => Wrap the value you don't want to scaled in ""
 */
const styles = ScaledSheet.create({
  container: {
    flex: 1, // still 1
  },
  button: {
    width: 50, // will become ~55
    height: "50", // still 50
    opacity: 0.5, // sill 0.5
  }
})

```

### Properties will be scaled

Properties |
|----|
width|
height|
fontSize|
letterSpacing|
lineHeight|
borderBottomLeftRadius|
borderBottomRightRadius|
borderTopLeftRadius|
borderTopRightRadius|
borderRadius|
borderBottomWidth|
borderTopWidth|
borderRightWidth|
borderLeftWidth|
borderWidth|
shadowRadius|
borderWidth|
translateX|
translateY|
marginLeft|
marginRight|
marginHorizontal|
marginVertical|
margin|
paddingLeft|
paddingRight|
paddingHorizontal|
paddingVertical|
padding|
top|
left|
bottom|
right|

### Supported Methods

Method | Description | Max/Min scaled
|----|----|----|
scaleHorizontal | scaled by horizontal   | `No max value`
scaleVertical   | scaled by vertical    |`No max value`
scaleSmart      | scaled by small ratio | `1.3`
## Copyright and License

MIT License

Copyright (c) 2018 maphongba008
