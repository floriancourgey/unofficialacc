---
title: "Unofficial ACC: Common Libraries"
download_link: https://github.com/floriancourgey/unofficialacc/releases/download/unofficialacc-commonlibraries-1.1.0/unofficialacc-commonlibraries.xml
release_name: unofficialacc-commonlibraries
created_at: 2020-01-01
updated_at: 2024-09-01
priority_top: 3
last_version: 1.1.0
short_description: "Packaged common Javascript library for easy access: lodash, moment and more to come!"
entities:
  - folder Unofficial ACC Common libraries
  - js unofficialacc:commonLibraries.lodash.js
  - js unofficialacc:commonLibraries.moment.js
---

<!--more-->

## Demo

![]({{ site.baseurl }}/assets/unofficialacc-commonlibraries/unofficialacc-commonlibraries-workflow.jpg)
![]({{ site.baseurl }}/assets/unofficialacc-commonlibraries/unofficialacc-commonlibraries-log.jpg)
![]({{ site.baseurl }}/assets/unofficialacc-commonlibraries/unofficialacc-commonlibraries-javascript.jpg)

## Usage

```js
loadLibrary('unofficialacc:commonLibraries.lodash.js');
var testLodash = _.map([1, 2, 3], function(num){ return num * 3; });
logInfo('Multiplied by 3: '+testLodash); // => [3, 6, 9]

loadLibrary('unofficialacc:commonLibraries.moment.js');
var yesterday = moment().subtract(1, 'day');
logInfo('Yesterday date: '+yesterday.format('YYYY-MM-DD HH:mm:ss')); // => 2020-07-27 15:12:59
```

Find installed libraries in `/Unofficial ACC Packages/Common Libraries`

## Installation

- Import package

## Pre-requisites
