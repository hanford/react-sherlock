# react-sherlock

> Date input with NLP super powers

## Install

```
$ npm install --save react-sherlock
```

## Usage

```js
import Sherlock from 'react-sherlock'

..

render () {
  <Sherlock
    onStartDate={(date) => console.log(`start date: ${date}`)}
    onEndDate={(date) => console.log(`end date: ${date}`)}
  />
}
```

Dead simple API - just pass two functions in, and get dates back. All other props will land directly on the `<input />` so you can manipulate/style the input however you need

##### onStartDate fn -> Date Object  
When sherlock finds a `start` date, it will call this function with the corresponding date object.

##### onEndDate fn -> Date Object  
When sherlock finds a `end` date, it will call this function with the corresponding date object.  


## License

MIT © [Jack Hanford](http://jackhanford.com)
