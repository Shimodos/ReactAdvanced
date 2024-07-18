import { testFunction } from './test';

testFunction(42);
console.log(testFunction(42));

document.body.innerHTML = `<div>${testFunction(42)}</div>`;
