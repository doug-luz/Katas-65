// comece a criar a sua função add na linha abaixo
function add(a,b){

return a+b
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
let mult = 0
let c = b
    if(b<0){
        b=-b
    }
    for(let i=1;i<=b;i++){
    mult = mult + add(a,0)
    }
    if(c<0){
    mult=-mult
    }
return mult
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(a,b){

exp = a
if(b===0){
    return 1
}
for(let i=1;i<b;i++){
   
    exp = multiply(exp,a)

}
return exp
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a){

let fact = a

for(i=a;i>=2;i--){

    fact = multiply(fact,(i-1))

}
return fact

}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){

let soma = 0
let indice = 1
let fibo = 0

for(let i=0;i<n;i++){
    soma = add(fibo,indice)
    fibo = indice
    indice = soma

}
return fibo
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
