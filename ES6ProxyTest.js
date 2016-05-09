'use strict';

const calc = (x, y) => x + y;
let x = new Proxy(calc, {
    get: (target, name) => target.name || 'name',
    apply: (target, thisArg, argumentsList) => {
      console.log(target, thisArg, argumentsList)
      return target.apply(null, argumentsList)
    }
  }
);
console.log(x.a)
console.log(x(3, 4))