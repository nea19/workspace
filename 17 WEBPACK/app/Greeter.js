// Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "我是要输出的东西";
//     return greet;
// };



// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };


// React化
//Greeter,js
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
