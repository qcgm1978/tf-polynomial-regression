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
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
