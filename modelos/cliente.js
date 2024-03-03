export default class Cliente {
    #codigo;
    #nome;
    #email;
    #telefone;
    #rg;
    #cpf;
    #endereco;

    constructor(codigo = 0, nome = "", email = "", telefone = "", rg = "", cpf = "", endereco = "") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
        this.#rg = rg;
        this.#cpf = cpf;
        this.#endereco = endereco;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    get rg() {
        return this.#rg;
    }

    set rg(novoRg) {
        this.#rg = novoRg;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    //como armazenar os clientes no banco de dados?

    gravar(){}

    atualizar(){}
    
    excluir(){}
    
    carregar(){}
    
    consultar(termoDePesquisa){}


}




