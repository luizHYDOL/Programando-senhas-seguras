function diminuiTamanho(){
if (tamanhoSenha > 1){
// tamanhoSenha = tamanhoSenha-1;
tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho(){
if (tamanhoSenha < 20){
// tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}