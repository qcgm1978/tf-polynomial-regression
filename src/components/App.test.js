import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it(`https://en.wikipedia.org/wiki/Bernoulli_process`, () => {
  let num = parseInt('101010', 2);
  expect(num).toBe(42)
  num = parseInt('10011011', 2)
  expect(num).toBe(155)
  num = Number(0o10011011.toString())
  expect(num).toBe(2101769)
});
it(`src/index.js is the JavaScript entry point.`, () => {
  expect(App).toBeInstanceOf(Function)
  const app = new App()
  expect(app.state).toBeDefined()
  it(`Static method calls are made directly on the class and are not callable on instances of the class. Static methods are often used to create utility functions.`, () => {

    expect(app.resetState).toBeDefined()
  });
  expect(app.state).toBeInstanceOf(Object)
  expect(app.state.a).toEqual({ "dataId": {}, "dtype": "float32", "id": 28, "isDisposed": false, "name": "0", "rankType": "0", "shape": [], "size": 1, "strides": [], "trainable": true })
  expect(app.state.a.dataSync()[0]).toBeLessThan(1)
});
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
