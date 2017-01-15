bitso-streams
===========

[![Build Status](https://travis-ci.org/joliveros/bitso-streams.svg?branch=master)](https://travis-ci.org/joliveros/bitso-streams)
[![npm version](https://badge.fury.io/js/bitso-streams.svg)](http://badge.fury.io/js/bitso-streams)

Stream bitso websocket api data


Install
-------

### Node.js

```shell
npm install --save-dev bitso-streams
```


### Usage

```javascript
const bitsoStreams = require('bitso-streams');
const { OrderBookStream } = bitsoStreams;

const orderBookStream = new OrderBookStream();

orderBookStream.pipe(...);
```

License
-------

[MIT](https://github.com/joliveros/bitso-streams/blob/master/LICENSE) (c) [joliveros](https://github.com/joliveros)
