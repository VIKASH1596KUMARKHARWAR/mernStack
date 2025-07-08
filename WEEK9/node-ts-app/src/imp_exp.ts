// const express = require("express") // can be used to or 
import express from 'express'


// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

// main.ts
import { add } from "./math"

add(1, 2)

// 2. Default exports
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

// calculator.ts 

import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));

