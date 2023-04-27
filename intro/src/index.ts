let message: string = 'Hello world';
console.log(message);

let n: number = 1;
let s: string = 'HW';
let b: boolean = false;

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = 24n;

let regexp: RegExp = new RegExp('ab+c');
let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

class Queue<T>{
    private data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

let array2: number[] = [1, 2, 3];
array2 = [2, 3, 4];

let tuple: [number, string] = [0, '2'];
tuple = [2, '4'];

type Point = { x: number, y: number };
let center: Point = {
    x: 0,
    y: 0
};
let unit: Point = {
    x: 1,
    y: 1
};

const point: Point = { x: 1, y: 0 };
point.x = 123;
point.y = 456;

function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log('Log:', message);
}

function sum(...values: any[]): number {
    return values.reduce((previous, current) => {
        return add(previous, current);
    });
}

log('1');
sum(1, 2);
sum(1, 2, 3);

type Add = (a: number, b: number) => number;

let addFunc: Add;
addFunc = function (a: number, b: number): number {
    return a + b;
}

type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-asfef23' };
let product: Product = { id: '123' };

user = product;
product = user;

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };
let p2d: Point2D = { x: 0, y: 0 };
let p3d: Point3D = { x: 0, y: 0, z: 0 };

p2d = p3d;
function takesPoint2D(point: Point2D) { };
takesPoint2D(p3d);

class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInM: number): void {
        console.log(`${this.name} moved ${distanceInM}m.`);
    }
}

let cat = new Animal('cat');
cat.move(10);

class Bird extends Animal {
    fly(distanceInM: number) {
        console.log(`${this.name} flew ${distanceInM}m.`);
    }
}

let bird = new Bird('bird');
bird.fly(20);

const numberQ = new Queue<number>();
numberQ.push(123);
numberQ.push(456);
console.log(numberQ.pop()?.toPrecision(1));

let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 'hello';
exampleAny.trim();

exampleUnknown = 'hello';
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
let trimed = (exampleUnknown as string).trim();

let numStr = '1337';
let num = +numStr;

import { isPalindrome } from './utils';
console.log(isPalindrome('madam'));

console.log('Logged in user:', process.env.USER);

import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello world');