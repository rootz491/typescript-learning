"use strict";
function generateRandomIds(param, length) {
    if (typeof param === 'string') {
        return param + Math.random().toString(36)
            .substr(2, length);
    }
    else {
        return param.symbol + Math.random().toString(36)
            .substr(2, param.length);
    }
}
function main() {
    const app = document.querySelector('#app');
    if (app) {
        setInterval(function () {
            app.innerHTML = generateRandomIds({
                symbol: '#',
                length: 7
            });
        }, 1000);
    }
}
main();
// using function with multiple params
console.log(generateRandomIds('$', 7));
// using function with single param (object)
console.log(generateRandomIds({
    symbol: '#',
    length: 10
}));