"use strict";
/*
export type validSymbol = '#' | '$';

export interface GenerateConfig {
    symbol: validSymbol
    length: number
}

// Function Overloading
export function generateRandomIds(symbol: validSymbol, length: number): string
export function generateRandomIds(options: GenerateConfig): string
export function generateRandomIds(param: GenerateConfig | validSymbol, length?: number): string {
    if (typeof param === 'string') {
        return param + Math.random().toString(36)
            .substr(2, length)
    } else {
        return param.symbol + Math.random().toString(36)
            .substr(2, param.length)
    }
}
*/ 
