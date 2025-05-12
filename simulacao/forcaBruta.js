import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }
  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      //  console.log("Usuário autenticado com sucesso!");
      return true;
    }
    //console.log("Usuário ou senha incorretos");
    return false;
  }
}

const user = new Usuario("thomaz", "1234");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (user.autentica("thomaz", senhaTeste.toString())) {
    console.log(`A senha é: ${senhaTeste}`);
  }
}
