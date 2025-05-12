import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem = "Demonstração do curso";

const chave = randomBytes(32);
//console.log(chave);
const vi = randomBytes(16);
//console.log(vi);

const cifra = createCipheriv("aes256", chave, vi);
//console.log(cifra);

const mensagemCifrada =
  cifra.update(mensagem, "utf-8", "hex") + cifra.final("hex");

console.log(mensagemCifrada);

//transmissão ----------- chave, vi, mensagem

//decifrar a mensagem

const decifra = createDecipheriv("aes256", chave, vi);
const mensagemDecifrada = decifra.update(mensagemCifrada, "hex", "utf-8") + decifra.final("utf-8");
console.log(mensagemDecifrada);