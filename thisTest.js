'use strict';

function App(name){
  this.name = name;
}

function changeName(newName){
  console.log('get argument: ', arguments);
  this.name = newName;
  console.log('set name: ',this.name)
}

let a = new App('name');
//具体
changeName.call(a, 'new name');
//列表形式 类似Array
changeName.apply(a, ['new name 2', 'sfme']);
