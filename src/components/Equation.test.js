import React from 'react';
import { renderToString } from 'react-dom/server'

import Equation from './Equation'
it(`the polynomial `, () => {
    const data = [0.18406738340854645, 0.7433285117149353, 0.15797726809978485, 0.7718952894210815];
    const ele = <Equation a={data[0]} b={data[1]} c={data[2]} d={data[3]} />
    expect(ele).toBeInstanceOf(Object);
    expect(renderToString(ele)).toEqual(
        expect.stringContaining(`<span>y = </span><span>0.184x<sup>3</sup></span><span> + </span><span>0.743x<sup>2</sup></span><span> + </span><span>0.158x</span><span> + </span><span>0.772</span></div>`),
    );
});