# TUIJS-UTIL
***Last Updated 03/11/2026***

## Description
A simple JavaScript utility library. TUIJS-UTIL contains a number of different functions, lists, and regular expressions that make coding a little easier.

<br>
<br>

## Install
npm i tuijs-util

## Import
All utilities are provide both via named exports and can be called like any other function.

## Example
```javascript
import { parseTemplate } from 'tuijs-util';

const titleTemple = parseTemplate(/*html*/`
    <div>
        <h1>Page Title</h1>
    </div>
`);
document.body.appendChild(titleTemple);

```

