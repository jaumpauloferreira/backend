import conectar from "./conexao.js"; //não esquecer de colocar a extensão .js no final
import cliente from "../modelos/cliente.js";
export default class clienteDAO{

   async gravar(cliente){
        if (cliente instanceof cliente){
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
            cliente.endereco
        ];
        const [resultados, campos] = await conexao.execute(sql, parametros);
        //funcionalidade oferecida pela biblioteca mysql2
        cliente.codigo = resultados.insertId; //recupero o id gerado pelo banco de dados
            
        }
    
    }

    async atualizar(cliente){
        if (cliente instanceof cliente){
            const conexao = await conectar();
            const sql = `UPDATE cliente SET id = ?, codigo = ?, nome = ?. email = ?, telefone = ?, rg = ?,
            cpf = ?, endereco = ?`
        }
    }
    excluir(cliente){

    }

    consultar(termoDePesquisa){
        
    }
}