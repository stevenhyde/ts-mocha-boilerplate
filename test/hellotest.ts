/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import {uppercaseFn} from "../src/sub/submod";
import {myHelloFunction, myUCHelloFunction} from "../src/mymodule";

import chai = require("chai");
let expect = chai.expect;

describe("Hello func", () => {
    it("Should say Hello world! if empty parameter is passed", () => {
        let greet = myHelloFunction();
        expect(greet).to.equal("Hello world!");
    });
    
    it("Should say Hello Charlie! if 'Charlie' is passed as a parameter", () => {
        let greet = myHelloFunction("Charlie");
        expect(greet).to.equal("Hello Charlie!");
    });
    
    it("Should say 'Hello friend!' if 'friend' is passed as a parameter", () => {
        let greet = myHelloFunction("friend");
        expect(greet).to.equal("Hello friend!");
    });
    
    it("Should say Hello WORLD! if empty parameter is passed", () => {
        let greet = myUCHelloFunction();
        expect(greet).to.equal("Hello WORLD!");
    });
    
    it("Should say Hello Charlie! if 'Charlie' is passed as a parameter", () => {
        let greet = myUCHelloFunction("Charlie");
        expect(greet).to.equal("Hello CHARLIE!");
    });
    
    it("Should say 'Hello friend!' if 'friend' is passed as a parameter", () => {
        let greet = myUCHelloFunction("friend");
        expect(greet).to.equal("Hello FRIEND!");
    });
} );