// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  // escreva seu código aqui

 if (idade < 12) {
    return "criança";
  } else if (idade <= 17) {
    return "adolescente";
  } else {
    return "adulto";
  }
    
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  // escreva seu código aqui
  
  const desconto = preco * percentual /100;
  const subtração = preco - desconto;
    return('Valor final é ', subtração);
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  // escreva seu código aqui
  if (nota <= 39) {
    return('reprovado');
  } else if (nota >= 40, nota < 60) {
    return('recuperação');
  } else {
    return('aprovado');
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  // escreva seu código aqui
  let pares = 0;
  for(const numero of numeros) {
    if (numero % 2 === 0) {
      pares += numero;
    }
  }
  return pares;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  // escreva seu código aqui

    let contador = 0;

  for (const caractere of texto) {
    if (caractere === letra) {
      contador++;
    }
  }

  return contador;
}