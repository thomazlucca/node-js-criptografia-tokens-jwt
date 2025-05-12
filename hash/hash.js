import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("uma String Qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }
    console.log("Usuário ou senha incorretos");
    return false;
  }
}

const user = new Usuario ("thomaz","thomaz123");

console.log(user);

//caso de sucesso
console.log(user.autentica("thomaz","thomaz123"));

//caso de fracasso
console.log(user.autentica("thomaz","thomaz"));
console.log(user.autentica("thom","thomaz123"));
