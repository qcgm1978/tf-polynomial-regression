import * as tf from '@tensorflow/tfjs';
import { generateData } from '../tensorflow/data';
it(`data.js`, () => {
    const trueCoefficients = { a: -.8, b: -.2, c: .9, d: .5 };
    const { trainXs, trainYs, testXs, testYs } = generateData(trueCoefficients);
    expect(trainXs.dataSync().length).toEqual(trainXs.size)
});
it(`tf.tidy (nameOrFn, fn?, gradMode?) function source
Executes the provided function f and after it is executed, cleans up all intermediate tensors allocated by f except those returned by f`, () => {
        // y = 2 ^ 2 + 1
        const y = tf.tidy(() => {
            // a, b, and one will be cleaned up when the tidy ends.
            const one = tf.scalar(1);
            const a = tf.scalar(2);
            const b = a.square();

            expect(tf.memory().numTensors).toBe(7);

            // The value returned inside the tidy function will return
            // through the tidy, in this case to the variable y.
            return b.add(one);
        });

        expect(tf.memory().numTensors).toBe(5);
        const trueCoefficients = { a: -.8, b: -.2, c: .9, d: .5 };
        const { trainXs, trainYs, testXs, testYs } = generateData(trueCoefficients);
        expect(trainXs.constructor.name).toBe('Tensor')
    });