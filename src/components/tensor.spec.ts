import * as tf from '@tensorflow/tfjs';
import { generateData } from '../tensorflow/data';
import { expectArraysClose } from '_@tensorflow_tfjs-core@0.8.4@@tensorflow/tfjs-core/dist/test_util';
it(`tf.randomUniform (shape, minval?, maxval?, dtype?) function source
Creates a tf.Tensor with values sampled from a uniform distribution. Returns: tf.Tensor`, () => {
        const data = tf.randomUniform([2, 2]), data1 = tf.tensor([2, 2]), data2 = tf.tensor([2, 2], [2])
        expect(data.shape).toEqual([2, 2])
        expect(data1.shape).toEqual([2])
        expect(data2.shape).toEqual([2])
        expect(data.data()).toBeInstanceOf(Promise)
        expect(data.data()).toBeInstanceOf(Object)
        expect(data.dataSync()).toBeInstanceOf(Float32Array)
        expect(data.dataSync()[0]).toBeGreaterThan(0.001)
        expect(data.dataSync()[0]).toBeLessThan(1)
    });
it(`tf.tensor (values, shape?, dtype?) function source
Creates a tf.Tensor with the provided values, shape and dtype.`, () => {
        const data1 = tf.tensor([1, 2, 3, 4]);
        // Pass an array of values to create a vector.
        expect(data1.rankType).toEqual('1')
        expect(data1.dataSync()).toEqual(new Float32Array([1, 2, 3, 4]))
        // Pass a nested array of values to make a matrix or a higher
        // dimensional tensor.
        expect(tf.tensor([[1, 2], [3, 4]]).rankType).toEqual('2')
        // Pass a flat array and specify a shape yourself.
        expect(tf.tensor([1, 2, 3, 4], [2, 2]).rankType).toEqual('2')
    });
it(`The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.`, (done) => {
    let myFirstPromise = new Promise((resolve, reject) => {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code. 
        // In reality, you will probably be using something like XHR or an HTML5 API.
        setTimeout(function () {
            resolve("Success!"); // Yay! Everything went well!
            done()
        }, 250);
    });
    expect(myFirstPromise).toBeInstanceOf(Promise);
    expect(myFirstPromise.then).toBeInstanceOf(Function)
    myFirstPromise.then((successMessage) => {
        // successMessage is whatever we passed in the resolve(...) function above.
        // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
        expect("Yay! " + successMessage).toBe("Yay! Success!");
        done()
    });
});
describe(`tf.scalar (value, dtype?) function source
Creates rank-0 tf.Tensor (scalar) with the provided value and dtype.`, () => {
        expect(tf.scalar(3.14).dataSync()).toEqual(new Float32Array([3.140000104904175]));
        it(`dtype ('float32'|'int32'|'bool') The data type. Optional`, () => {
            const three = tf.scalar(3, 'int32');
            expect(three.dtype).toEqual('int32');
            expect(three.dataSync()).toEqual(new Int32Array([3]));
            expect(three.dataSync().BYTES_PER_ELEMENT).toEqual(4)
        });
        it(`The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order.`, () => {
            // From a length
            var int32 = new Int32Array(2);
            int32[0] = 42;
            expect(int32[0]).toEqual(42);
            expect(int32.length).toEqual(2);
            expect(int32.BYTES_PER_ELEMENT).toEqual(4);

            // From an array
            var arr = new Int32Array([21, 31]);
            expect(arr[1]).toEqual(31);

            // From another TypedArray
            var x = new Int32Array([21, 31]);
            var y = new Int32Array(x);
            expect(y[0]).toEqual(21);

            // From an ArrayBuffer
            var buffer = new ArrayBuffer(16);
            var z = new Int32Array(buffer, 0, 4);
            expect(z).toEqual(new Int32Array([0, 0, 0, 0]))
            // From an iterable 
            var iterable = function* () { yield* [1, 2, 3]; }();
            var int32 = new Int32Array(iterable);
            expect(int32).toEqual(new Int32Array([1, 2, 3]))
        });
        it(`Returns: tf.Scalar`, () => {
            expect(tf.scalar(0)).toBeInstanceOf(Object)
        });
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