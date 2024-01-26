// import 키워드를 이용한 모듈의 사용
// import { flr, getFlrs } from './4_export1.js';
// console.log(flr);
// console.log(getFlrs(2));
// console.log(getFlrs(4));

import * as flowers from './4_export1.js';
console.log(flowers);
console.log(flowers.flr);
console.log(flowers.getFlrs(1));

import {animal, showAnimals} from './4_export2.js';
console.log(animal);
showAnimals();

import sayHi from './5_exportdefault.js';
sayHi();