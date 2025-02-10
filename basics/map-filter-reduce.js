// .map
// 	- Mapear item por item do array;
// 	- O novo array pode ser alterado o que quiser em relação ao original;
// 	- Tem acesso a 3 dados
// 		- Item por item
// 		- Posição atual
// 		- Array completo


const numeros = [1, 2, 3, 4, 5]
const dobro = numeros.map(numero => numero * 2)
const dobro2 = numeros.map((numero, index, arrayCompleto) => {
    console.log(numero)
    console.log(index)
    console.log(arrayCompleto)
})

const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1, },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.00, temDesconto: true, quantidade: 5 },
    { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];

const novosProdutos = produtos.map(produto => {
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
})

console.log(novosProdutos)

// .reduce
// - (Reduzir o array a um único valor)
// - Reduz um array inteiro a um ÚNICO valor
// - Você tem acesso a 4 dados
// - Acumulador
// - Valor Atual
// - Posição Atual
// - Array Completo

const numeros2 = [1, 2, 3, 4, 5]
const soma = numeros.reduce((acumulador, atual) => {
    let total = acumulador + atual
    return total
}, 10) // O número representa o valor que o acumulador inicia, lembrando que pode ser zero (0)

console.log(soma)

const totalVendas = produtos.reduce((acumulador, produto) => {

    return acumulador + (produto.preco * produto.quantidade)
}, 0)

console.log(
    totalVendas.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }),
)

// .filter
// - Filtrar itens de um array com base em uma condição;
// - Retorna um novo array contendo apenas os itens que atendem à condição;
// - O tamanho do novo array pode ser menor ou igual ao original (não modifica o array original);
// - Tem acesso a 3 dados:
// - Item por item (valor atual);
// - Posição atual (índice);
// - Array completo.

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros3.filter(numero => {
    return numero % 2 === 0
})

console.log(`Numeros pares: ${pares}`)

const promocao = produtos.filter(produto => produto.temDesconto)
const promocaoInverso = produtos.filter(produto => !produto.temDesconto)

// Unindo .map, .filter e .reduce
// Adicionar +10 em cada produto
// Filtrar só os em promoção
// Saber qual é o faturamento se vendermos todos em promoção

const faturamentoTotal = produtos.map(produto => {
    return {
        ...produto, quantidade: produto.quantidade + 10 // O '...' preenche tudo que o produto contém, só precisamos adicionar o que queremos alterar 'quatidade: produto.quantidade + 10'.
    }
}).filter(produto => produto.temDesconto).reduce((acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)

console.log(
    faturamentoTotal.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }),
)