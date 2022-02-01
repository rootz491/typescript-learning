

##  fundamentals

*   Strictly Typed
*   Rename symbols 
    *   e.g. `foo` to `bar` by right-clicking on `foo` and selecting `Rename Symbol`)

*   string literal types
    *   so bascially, `var symbol: '#' = '#';` is same as `const symbol = '#';` 

    *   `var symbol: string = '#';` only allows 

*   allow only specific values as a type
    *   e.g. `var symbol: '#' | '$' = '#';` is only allowed to be '#' or '$' 

*   **Type Aliases**: instead of `var symbol: '#' | '$' =  '#';` everytime, you can use:
    ```ts
    type Symbol = '#' | '$';
    var symbol: Symbol = '#';
    ```


### return type: void vs never

```ts
function alert() {
    alert('hello');
}
```

Above function will return **void** because it's not returning anything but it's coming to the end of the function.

```ts
function alert(): void {
    alert('hello');
}
```

This means the same,  
i.e. esplicitly saying that the function will return **void**.

```ts
function listen(): never {
    while (true) {
        // do something
        xyz();
    }
}
```

Above function never reaches the end of the function, it's returning **never**.


*conclusion*:  
**void** is when the function just doesn't return anything, **never** is when the function never reaches the end of the function. 

## null vs undefined

```ts
const app = document.querySelector('#app');
app.innerHTML = generateRandomIds('#', 7);
```

Here typescript generates error because it's not sure if the `app` is null or object.

so we can use `if` statement to check if the `app` is null or not.

```ts
const app = document.querySelector('#app');
if (app) {
    app.innerHTML = generateRandomIds('#', 7);
}
```

now if the `app` is null, it will not generate error.

```ts
function sqrt(num: number): number {
    if (num < 0) {
        throw new Error('Invalid input');
    }
    return num * num;
}
```

above function is just checking if the `number` is negative or not. and doing operation acc. to it!

what if we don't pass the `number`?

```ts
function sqrt(num?: number): number {
    num = num || 0; //  if num is undefined, set it to 0
    if (num < 0) {
        throw new Error('Invalid input');
    }
    return num * num;
}
```

Here `num?` is used to say that the `num` is optional OR it can **undefined** too which means, haven't passed it.

```ts
function sqrt(num: number = 0): number {
    if (num < 0) {
        throw new Error('Invalid input');
    }
    return num * num;
}
```

Above is another method to do the same thing. if `num` is **undefined**, fall back to default value **0**.


### interface & types 

https://www.typescriptlang.org/docs/handbook/2/objects.html


### type parameters

suppose there's a identity function which retirns the same type of the input.

```ts
function identity(arg) {
    return arg;
}
```

But suppose we want to add a type parameter to the function.

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

Now we are explicity saying that the `T` is the type of the input & we want to return same type for return value.

call it as:
```ts
identity("hello");
identity<number>(1);
```

both are valid!


### 