import { scryptSync, randomBytes, timingSafeEqual, hash } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString("hex");
  const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");
  return `${sal}:${senhaHasheada}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHashComSal(senha).split(":");
  }

  autentica(nome, senha) {
    if(nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      console.log(testeHash);
      const hashReal = Buffer.from(this.hash, 'hex');
      console.log(hashReal);
      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);
      console.log(hashesCorrespondem);
      if (hashesCorrespondem) {
        console.log("Usuário autenticado com sucesso!");
        return true;
      } 
    }
    console.log("Usuário ou senha incorretos");
  }
}

const user = new Usuario("thomaz", "thomaz123");

console.log(user);

//teste de sucesso
user.autentica("thomaz","thomaz123");

//teste de falha
user.autentica("thomaz","thomaz");