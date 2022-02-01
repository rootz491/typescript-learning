"use strict";
class App {
    onInit(el) {
        if (el) {
            setInterval(function () {
                el.innerHTML = generateRandomIds({
                    symbol: '#',
                    length: 7
                });
            }, 1000);
        }
    }
}
App.id = 'app';
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
function main(ComponentClass) {
    const app = document.getElementById(ComponentClass.id);
    const component = new ComponentClass();
    component.onInit(app);
}
main(App);
// using function with multiple params
console.log(generateRandomIds('$', 7));
// using function with single param (object)
console.log(generateRandomIds({
    symbol: '#',
    length: 10
}));
