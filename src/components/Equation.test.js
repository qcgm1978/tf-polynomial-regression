import React from 'react';
// import { renderToString } from 'react-dom/server'

import Equation from './Equation'
it(`the polynomial `, () => {
    const data = [0.18406738340854645, 0.7433285117149353, 0.15797726809978485, 0.7718952894210815];
    const ele = <Equation a={data[0]} b={data[1]} c={data[2]} d={data[3]} />
    expect(ele).toBeInstanceOf(Object)
});