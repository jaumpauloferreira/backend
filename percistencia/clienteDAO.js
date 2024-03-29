import conectar from "./conexao.js"; //não esquecer de colocar a extensão .js no final
import Cliente from "../modelos/Cliente.js";
export default class ClienteDAO {
  async gravar(Cliente) {
    if (cliente instanceof Cliente) {
      const conexao = await conectar();
      const sql = `INSERT INTO cliente (id, codigo, nome, email, telefone, rg, cpf, endereco)
            values (?, ?, ?, ?, ?, ?, ?, ?)`;
      const parametros = [
        cliente.id,
        cliente.codigo,
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.rg,
        cliente.cpf,
        cliente.endereco,
      ];
      const [resultados, campos] = await conexao.execute(sql, parametros);
      //funcionalidade oferecida pela biblioteca mysql2
      cliente.codigo = resultados.insertId; //recupero o id gerado pelo banco de dados
    }
  }

  async atualizar(cliente) {
    if (cliente instanceof cliente) {
      const conexao = await conectar();
      const sql = `UPDATE cliente SET id = ?, codigo = ?, nome = ?. email = ?, telefone = ?, rg = ?,
                         cpf = ?, endereco = ? HERE codigo = ?`;
      const parametros = [
        cliente.id,
        cliente.codigo,
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.rg,
        cliente.cpf,
        cliente.endereco,
      ];

      await conexao.execute(sql, parametros);
    }
  }

  async excluir(cliente) {
    if (cliente instanceof cliente) {
      const conexao = await conectar();
      const sql = `DELETE FROM cliente WHERE codigo = ?`;
      const parametros = [cliente.codigo];
      await conexao.execute(sql, parametros);
    }
  }

  async consultar(termoDePesquisa) {
    if (termoDePesquisa === undefined) {
      termoDePesquisa = "";
    }
    let sql = "";
    if (isNaN(termoDePesquisa)) {
      //termo de pesquisa não é um número
      sql = `SELECT = FROM cliente WHERE nome LIKE '%?%`;
    } else {
      sql = `SELECT = FROM cliente WHERE codigo = ?`;
    }

    const conexao = await conectar();
    const [registros] = await conexao.execute(sql, [termoDePesquisa]);
    let listaCliente = [];
    for (const registro of registros) {
      const cliente = new cliente(
        registro.id,
        registro.codigo,
        registro.nome,
        registro.email,
        registro.telefone,
        registro.rg,
        registro.cpf,
        registro.endereco
      );
      listaCliente.push(cliente);
    }
    return listaCliente;
  }
}
