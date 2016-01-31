"use strict";

import {uppercaseFn} from "./sub/submod";

export function myHelloFunction(who : string = "world") : string{
    return `Hello ${who}!`;
}

export function myUCHelloFunction(who : string = "world") : string{
    let ucStr = uppercaseFn(who); 
    return `Hello ${ucStr}!`;
}
