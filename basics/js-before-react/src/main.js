import * as math from "../lib/math";
import { PI, soma, soma as sominha, sub } from "../lib/math";

//%%%%% Nullish Coalescing Operator %%%%%
// document.body.innerHTML = 'Sua idade é: ' + (null ?? ' Não informado');

//%%%%% Objetos %%%%%

// const user = {
//   name: 'Italo',
//   idade: 27,
//   address: {
//     street: 'Rua test',
//     number: 176,
//   },
// };

//%%%%% Métodos de objetos %%%%%
// document.body.innerText = ('name' in user)
// document.body.innerText = Object.keys(user)
// document.body.innerText = Object.values(user)
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user))

//%%%%% Desestruturação %%%%%
// const { idade, address } = user
// const { idade: age, address: rua, nickname = 'Guasti' } = user

// document.body.innerText = JSON.stringify(address)
// document.body.innerText = JSON.stringify({ idade, address })
// document.body.innerText = JSON.stringify({ age, rua, nickname })

//%%%%% Desestruturação em functions %%%%%
// function mostraIdade({ idade }) {
//   return idade;
// }

// document.body.innerText = mostraIdade(user)

//%%%%% Rest operator %%%%%
// const { name, ...rest } = user;
// document.body.innerText = JSON.stringify(rest)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const first = array[0];
// const second = array[1];
// const [first, second, ...rest] = array;
// const [first, , third, ...rest] = array;
// document.body.innerText = JSON.stringify({ first, third, rest })

//%%%%% Short Syntax %%%%%
// const name = 'Italo';
// const agee = 27;

// const iam = {
//   name: name,
//   age: age,
// };
// const iam = {
//   name,
//   agee,
// };

// document.body.innerText = JSON.stringify(iam)

//%%%%% Optional Chaining %%%%%
// const user = {
//   name: 'Italo',
//   idade: 27,
//   address: {
//     street: 'Rua test',
//     number: 176,
//     zip: {
//       code: '35400111',
//       city: 'Townsview',
//     },
//     showFullAddress() {
//       return 'ok';
//     }
//   },
// };

// document.body.innerText = user.address?.zip?.code ?? 'Não informado';
// document.body.innerText = user.address?.showFullAddress?.()

// const key = 'street';
// document.body.innerText = user.address?.[key]

//%%%%% Métodos de array %%%%%
// const array = [1, 2, 3, 4, 5];

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach(item => {
//   document.body.innerText += item;
// })

// const novoArray = array.map(item => {
//   if (item % 2 == 0) {
//     return item * 10;
//   }

//   return item;
// })

// document.body.innerText = JSON.stringify(novoArray)

//%%%%% map, filter, every, some, find, findIndex, reduce %%%%% 
// filter
// const array = [1, 2, 3, 4, 5];
// const novoArray = array
//   .filter(item => item % 2 == 0)
//   .map(item => item * 10)

// every
// const todosItensSaoNumeros = array.every(item => typeof item === 'number');
// document.body.innerText = JSON.stringify(todosItensSaoNumeros)

// some
// const array = [1, 2, 3, 4, 5, 'fleig'];
// const peloMenosUmItemNaoEhNumero = array.some(item => typeof item !== 'number');
// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEhNumero)

// find 
//Encontra o primeiro item que satisfaz a condição
// const par = array.find(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(par)
//findIndex 
//É a mesma coisa do find porém retorna o índice do valor
// const par = array.findIndex(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(par)

//reduce
// const array = [1, 2, 3, 4, 5];
// const soma = array.reduce((acc, item) => {
//     document.body.innerText += acc + ',' + item + '|'
//     return acc + item
// }, 0)
// document.body.innerText = JSON.stringify(soma)

// Template Literals
// const name = null;
// const message = `Bem-vindo, ${name ?? 'visitante'}`;
// document.body.innerText = message

// Promises
// .then/.catch
// fetch('https://api.github.com/users/italoguasti')
// .then(response => {
//     return response.json();
// })
// .then(body => {
//     console.log(body)
// })
// .catch(error => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('finally: print')
// })

// Função async se torna uma promise
async function fetchDataGithub() {
    try {
        const response = await fetch('https://api.github.com/users/italoguasti');
        const body = await response.json();

        console.log(body);
        return body.name;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('finally: print')
    }
}

fetchDataGithub();
fetchDataGithub().then(name => {
    console.log(name);
});

// Import functions
console.log(soma(1, 2))
console.log(sub(2, 2))
console.log(PI)
console.log(math.soma(42, 12))
console.log(math.sub(2, 2))
console.log(sominha(1, 2))
