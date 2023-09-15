import entrada from 'readline-sync';

console.log('\n');

console.log('HISTORICO DE SALARIOS DE 2010 A 2020');

console.log('\n');

console.log('1 - Verificar os salários de 2010 à 2020.');
console.log('2 - Verificar a inflação de 2010 à 2020.');
console.log('3 - Vizualizar calculo de difereça entre salários.');

console.log('\n');

let opcao = entrada.question('Escolha a opcao desejada: ');

console.log('\n');

let salariosMinimos = [
    { ano: 2010, salario: 510.00},
    { ano: 2011, salario: 545.00},
    { ano: 2012, salario: 622.00},
    { ano: 2013, salario: 678.00},
    { ano: 2014, salario: 724.00},
    { ano: 2015, salario: 788.00},
    { ano: 2016, salario: 880.00},
    { ano: 2017, salario: 937.00},
    { ano: 2018, salario: 954.00},
    { ano: 2019, salario: 998.00},
    { ano: 2020, salario: 1045.00},
];

let inflacao = [
    { ano: 2010, inflacao: 5.91},
    { ano: 2011, inflacao: 6.50},
    { ano: 2012, inflacao: 5.84},
    { ano: 2013, inflacao: 5.91},
    { ano: 2014, inflacao: 6.41},
    { ano: 2015, inflacao: 10.67},
    { ano: 2016, inflacao: 6.29},
    { ano: 2017, inflacao: 2.95},
    { ano: 2018, inflacao: 3.75},
    { ano: 2019, inflacao: 4.31},
    { ano: 2020, inflacao: 4.52},
];

if( opcao == 1 ){
    for( let i = 0; i < salariosMinimos.length; i++ ){

        let ano = salariosMinimos[i].ano;
        let salario = salariosMinimos[i].salario;

        console.log('Ano'.padEnd(30,'-') + ano);
        console.log('Salário'.padEnd(30, '-') + salario.toFixed(2).replace('.',','));

        console.log('\n');
    };
};

if( opcao == 2 ){
    for( let i = 0; i < inflacao.length; i++ ){

        let ano = inflacao[i].ano;
        let taxaInflacao = inflacao[i].inflacao;

        console.log('Ano'.padEnd(30,'-') + ano);
        console.log('Inflação'.padEnd(30, '-') + taxaInflacao.toFixed(2).replace('.',',') + '%');

        console.log('\n');
    };
};

if( opcao == 3 ){
    for(let i = 0; i < salariosMinimos.length; i++ ){

        let ano = salariosMinimos[i].ano;
        let salario = salariosMinimos[i].salario;
        let taxaInflacao = inflacao[i].inflacao;

        console.log('Ano'.padEnd(30,'-') + ano);
        console.log('Salário'.padEnd(30, '-') + salario.toFixed(2).replace('.',','));

        if( i > 0 ){
            let salarioAnterior = salariosMinimos[i - 1].salario;

            let diferenca = salario - salarioAnterior;
            let crescimento = (diferenca / salarioAnterior) * 100;
            console.log('Crescimento'.padEnd(30,'-') + crescimento.toFixed(2).replace('.',',') + '%');
        }
        
        console.log('Inflação'.padEnd(30, '-') + taxaInflacao.toFixed(2).replace('.',',') + '%');

        console.log('\n')
    }
}

if( opcao != 3 && opcao != 2 && opcao != 1 ){

    console.log('ESCOLHA UMA OPCAO VALIDA!!!');
    
    console.log('\n');
};