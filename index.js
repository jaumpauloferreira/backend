//todas as linhas desse programa são executadas de forma síncrona
//em outras palavras, de forma sequencial

import Cliente from "./modelos/Cliente.js";

const cliente = new Cliente(
  3,
  "12",
  "a1b2c3d4",
  "João Paulo Ferreira da Silva",
  "joaopaulofio@hotmail.com",
  "(14)99898.4400",
  "42.454.789-7",
  "333.456.789-45",
  "Rua: José Pedro N25"
);

//nos métodos assíncronos é preciso manipular as promessas (Promises)
//Então, em algum momento o método trará uma resposta e o nosso programa
//não saberá quando isso irá acontecer.

/*cliente.gravar().then(() =>{
    console.log("Cliente gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});*/

/*cliente.atualizar().then(() =>{
    console.log("Cliente atualizado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});*/

/*cliente.excluir().then(() =>{
    console.log("Cliente excluído com sucesso!");
}).catch((erro) => {
    console.log(erro);
});*/

const clienteQQ = new Cliente();

clienteQQ
  .consultar(3)
  .then((listaClientes) => {
    console.log("Clientes encontrados:");
    for (const cliente of listaClientes) {
      console.log(cliente.toJSON());
    }
  })
  .catch((erro) => {
    console.log("Não foi possível consultar o cliente", erro);
  });
