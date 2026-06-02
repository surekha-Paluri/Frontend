// A generator is a function that can yield multiple values over time instead of returning just one.

function* generatorExample() {
  console.log("Start");
  yield 1;   // pauses here
  console.log("Middle");
  yield 2;   // pauses here
  console.log("End");
  return 3;  // finishes
}

const gen = generatorExample();

console.log(gen.next()); // { value: 1, done: false }
//console.log(gen.next()); // { value: 2, done: false }
//console.log(gen.next()); // { value: 3, done: true }
