import { expectArraysClose } from "_@tensorflow_tfjs-core@0.8.4@@tensorflow/tfjs-core/dist/test_util";

it(`can’t use done() with async functions.`, () => {
    async function name(params: Number) {

    }
    expect(name).toBeInstanceOf(Function)
    expect(name(0).then).toBeInstanceOf(Function)
    expect(name.done).toBeUndefined()
    function* gen() {
    }
    var g = gen(); // "Generator { }"
    expect(g.next().done).toBe(true);

    // expect(g.next().done).toBe(false);      // "Object { value: 1, done: false }"
    // expect(g.next().done).toBe(false);      // "Object { value: 2, done: false }"
    // expect(g.next().done).toBe(false);      // "Object { value: 3, done: false }"
});
it(`Remove duplicate values from JS Array`, () => {
    Array.prototype.unique = function () {
        const set = new Set(this);
        expect(set).toEqual(new Set([1, 3, 2]))
        return Array.from(set);
    }
    expect([1, 3, 3, 2].unique()).toEqual([1, 3, 2])
});
it(`A closure is the combination of a function and the lexical environment within which that function was declared. `, () => {
    var name = 'global'
    function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() { // displayName() is the inner function, a closure
            return (name); // use variable declared in the parent function    
        }
        expect(displayName()).toBe('Mozilla');
    }
    init();
    function makeAdder(x) {
        return function (y) {
            return x + y;
        };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    expect(add5(2)).toBe(7);  // 7
    expect(add10(2)).toBe(12);
});
it(`use closures to define public functions that can access private functions and variables. Using closures in this way is known as the module pattern`, () => {
    var counter = (function () {
        var privateCounter = 0;
        function changeBy(val) {
            privateCounter += val;
        }
        return {
            increment: function () {
                changeBy(1);
            },
            decrement: function () {
                changeBy(-1);
            },
            value: function () {
                return privateCounter;
            }
        };
    })();

    expect(counter.value()).toBe(0); // logs 0
    counter.increment();
    counter.increment();
    expect(counter.value()).toBe(2); // logs 2
    counter.decrement();
    expect(counter.value()).toBe(1);
});
it(`Closure Scope Chain
For every closure we have three scopes:-

Local Scope ( Own scope)
Outer Functions Scope
Global Scope`, () => {
        // global scope
        var e = 10;
        function sum(a) {
            return function (b) {
                return function (c) {
                    // outer functions scope
                    return function (d) {
                        // local scope
                        return a + b + c + d + e;
                    }
                }
            }
        }

        expect(sum(1)(2)(3)(4)).toBe(20);

        // We can also write without anonymous functions:

        // global scope
        var e = 10;
    });
it(`the functions assigned to onfocus are closures; they consist of the function definition and the captured environment from the setupHelp function's scope. Three closures have been created by the loop, but each one shares the same single lexical environment, which has a variable with changing values (item.help). The value of item.help is determined when the onfocus callbacks are executed.`, () => {
    function showHelp(help) {
        return help;
    }

    function makeHelpCallback(help) {
        return function () {
            return showHelp(help);
        };
    }

    function setupHelp(declareVariableKeyword) {
        var helpText = [
            { 'id': 'email', 'help': 'Your e-mail address' },
            { 'id': 'name', 'help': 'Your full name' },
            { 'id': 'age', 'help': 'Your age (you must be over 16)' }
        ], obj = {};

        if (declareVariableKeyword === 'var') {
            for (var i = 0; i < helpText.length; i++) {
                var item = helpText[i];
                obj[item.id] = {}
                obj[item.id].onfocus = () => showHelp(item.help);
            }
        } else {
            for (let i = 0; i < helpText.length; i++) {
                var item = helpText[i];
                obj[item.id] = {}
                obj[item.id].onfocus = () => showHelp(item.help);
            }
        }
        return obj;
    }

    const onfocus = setupHelp('var');
    expect(onfocus['email'].onfocus()).toEqual('Your age (you must be over 16)');
    const onfocus1 = setupHelp('var');

    expect(onfocus1['name'].onfocus()).toEqual('Your age (you must be over 16)');

});
it(`duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]`, () => {
    const duplicate = (arr, num) => arr.join('').repeat(num).split('').map(n => Number(n))
    expect(duplicate([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
    const duplicate1 = (arr) => arr.concat(arr)
    expect(duplicate1([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
});
it(`coding questions`, () => {
    var foo = 10 + '20';
    expect(foo).toBe('1020')
    expect(0.1 + 0.2).toEqual(0.30000000000000004)
    expect(+(0.1 + 0.2).toFixed(1)).toEqual(0.3)
});
it(`The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already`, () => {
    expect(+3).toBe(3)    // 3
    expect(+ '3').toBe(3)   // 3
    expect(+ true).toBe(1) // 1
    expect(+ false).toBe(0)// 0
    expect(+ null).toBe(0) // 0
    function foo(val) { return val }
    expect(+foo('0')).toBe(0)
    expect("i'm a lasagna hog".split("").reverse().join("")).toBe(`goh angasal a m'i`);
    window.foo1 || (window.foo1 = "bar");
    expect(foo1).toBe('bar');
    var foo2 = "Hello";
    (function () {
        var bar = " World";
        expect(foo2 + bar).toBe('Hello World');
    })();
    expect(() => foo2 + bar).toThrow();
});
it(`add(2, 5); // 7
add(2)(5); // 7`, () => {
        let add = (num1, num2) => num1 + num2
        expect(add(2, 5)).toBe(7)
        add = (num) => (num1) => num + num1;
        expect(add(2)(5)).toBe(7)
    });
it(``, (done) => {
    var foo = { n: 1 };
    var bar = foo;
    foo.x = foo = { n: 2 };
    expect(foo.x).toBeUndefined();
    let str = ''
    str = ('one');
    setTimeout(function () {
        str = ('two');
    }, 0);
    str = ('three');
    expect(str).toBe('three')
    setTimeout(() => {
        expect(str).toBe('two');
        done();
    }, 100)
});
it(``, () => {
    const doSomething = () => new Promise((resolve) => {
        resolve()
    });
    const doSomethingElse = () => { }
    const doSomethingElse1 = () => () => { }

    doSomething().then(function () {
        return doSomethingElse();
    });

    doSomething().then(function () {
        doSomethingElse();
    });

    doSomething().then(doSomethingElse1());

    doSomething().then(doSomethingElse);
});
it(`.forEach loop and a .map() loop`, () => {
    const a = [1, 2, 3];
    const doubled = a.map(num => {
        return num * 2;
    });
    expect(doubled).toEqual([2, 4, 6])
});
it(`Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.`, () => {
    let threeArr = [], fiveArr = [], threeFiveArr = []
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            threeFiveArr.push(i)
        }
        if (i % 3 === 0) {
            threeArr.push(i)
        }
        if (i % 5 === 0) {
            fiveArr.push(i)
        }
    }
    expect(threeArr.length).toEqual(Math.ceil(100 / 3))
    expect(fiveArr.length).toEqual(100 / 5 + 1)
    expect(threeFiveArr.length).toEqual(Math.ceil(100 / 15))
});
it(`destructuring an object or an array`, () => {
    // Variable assignment.
    const foo = ['one', 'two', 'three'];

    const [one, two, three] = foo;
    expect(one).toBe('one'); // "one"
    expect(two).toBe('two'); // "two"
    expect(three).toBe('three'); // "three"
    // Swapping variables
    let a = 1;
    let b = 3;

    [a, b] = [b, a];
    expect(a).toBe(3); // 3
    expect(b).toBe(1);
});
it(`ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects`, () => {
    function putDookieInAnyArray(arr) {
        return [...arr, 'dookie'];
    }

    const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]
    expect(result).toEqual(['I', 'really', "don't", 'like', 'dookie'])
    const person = {
        name: 'Todd',
        age: 29,
    };

    const copyOfTodd = { ...person, others: true };
    expect(copyOfTodd).toEqual({
        name: 'Todd',
        age: 29,
        others: true
    })
});
it(`ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data`, () => {
    function addFiveToABunchOfNumbers(...numbers) {
        return numbers.map(x => x + 5);
    }

    const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]
    expect(result).toEqual([9, 10, 11, 12, 13, 14, 15])
    const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]
    expect(rest).toEqual([3, 4])
    const { e, f, ...others } = {
        e: 1,
        f: 2,
        g: 3,
        h: 4,
    };
    expect(others).toEqual({
        g: 3,
        h: 4

    })
});
it(`Verify a prime number: A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers`, () => {
    const isPrimeNum = (num) => {
        if (num <= 1) {
            return false;
        }
        const middle = Math.ceil(Math.sqrt(num));
        let ret = true;
        for (let i = 2; i < middle; i++) {
            if (num % i) {
                continue
            } else {
                return false;
            }
        }
        return true;
    }
    expect(isPrimeNum(10)).toBeFalsy()
    expect(isPrimeNum(5)).toBeTruthy()
    expect(isPrimeNum(6)).toBeFalsy()
    expect(isPrimeNum(2)).toBeTruthy()
    expect(isPrimeNum(1)).toBeFalsy()
});
it(`Find all prime factors of a number`, () => {
    const getPrimeNumFactors = (num) => {
        if (num <= 1) {
            return false;
        }
        const middle = Math.floor((num / 2));
        let ret = [];
        for (let i = 2; i <= middle; i++) {
            if (num % i) {
                continue
            } else {
                ret.push(i);
            }
        }
        return ret;
    }
    expect(getPrimeNumFactors(10)).toEqual([2, 5])
    expect(getPrimeNumFactors(25)).toEqual([5])
    expect(getPrimeNumFactors(30)).toEqual([2, 3, 5, 6, 10, 15])

});
it(`Get nth Fibonacci number`, () => {
    const getNthOfFibonacci = n => {
        if (n < 1) {
            throw ('no such index')
        }
        let arr = [0, 1]
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
        return arr.slice(-1)[0]
    }
    expect(getNthOfFibonacci(3)).toEqual(1)
    expect(getNthOfFibonacci(4)).toEqual(2)
    expect(getNthOfFibonacci(5)).toEqual(3)
    expect(getNthOfFibonacci(6)).toEqual(5)
    expect(getNthOfFibonacci(7)).toEqual(8)
    expect(getNthOfFibonacci(8)).toEqual(13)
    expect(getNthOfFibonacci(1)).toEqual(1)
    expect(getNthOfFibonacci(2)).toEqual(1)
    expect(() => getNthOfFibonacci(0)).toThrow()


});