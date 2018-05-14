import * as tf from '@tensorflow/tfjs';
import { generateData } from '../tensorflow/data';
it(`tf.scalar (value, dtype?) function source
Creates rank-0 tf.Tensor (scalar) with the provided value and dtype.`, () => {
        expect(tf.scalar(3.14).dataSync()).toEqual(new Float32Array([3.140000104904175]))
    });
it(`The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order.`, () => {

});
it(`data.js`, () => {
    const trueCoefficients = { a: -.8, b: -.2, c: .9, d: .5 };
    const { trainXs, trainYs, testXs, testYs } = generateData(trueCoefficients);
    expect(trainXs.dataSync().length).toEqual(trainXs.size)
});
it(`tf.tidy (nameOrFn, fn?, gradMode?) function source
Executes the provided function f and after it is executed, cleans up all intermediate tensors allocated by f except those returned by f`, () => {

        const y = tf.tidy(() => {
            // a, b, and one will be cleaned up when the tidy ends.
            const one = tf.scalar(1);
            const a = tf.scalar(2);
            const b = a.square();

            expect(tf.memory().numTensors).toBeGreaterThan(7);

            // The value returned inside the tidy function will return
            // through the tidy, in this case to the variable y.
            return b.add(one);
        });

        expect(tf.memory().numTensors).toBeGreaterThan(5);
        const trueCoefficients = { a: -.8, b: -.2, c: .9, d: .5 };
        const { trainXs, trainYs, testXs, testYs } = generateData(trueCoefficients);
        expect(trainXs.constructor.name).toBe('Tensor')
        expect(trainXs.size).toBe(100)
    });
it(`The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.`, () => {
    var a, b, rest;
    [a, b] = [10, 20];
    expect(a).toEqual(10);
    expect(b).toEqual(20);

    [a, b, ...rest] = [10, 20, 30, 40, 50];
    expect(a).toEqual(10);
    expect(b).toEqual(20);
    expect(rest).toEqual([30, 40, 50]);

    ({ a, b } = { a: 10, b: 20 });
    expect(a).toEqual(10);
    expect(b).toEqual(20);



    ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
    expect(a).toEqual(10);
    expect(b).toEqual(20);
    expect(rest).toEqual({ c: 30, d: 40 });
});