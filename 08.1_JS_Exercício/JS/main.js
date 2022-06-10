var login_cadastrado = "Ander";
var senha_cadastrada = "1234";
var contador = 0;

do {
    var login_informado = prompt("Informe o login cadastrado");
    var senha_informada = prompt("Informe sua senha");

    if (login_cadastrado == login_informado && senha_cadastrada == senha_informada){
        alert("Bem vindo ao sistema " + login_informado);
        window.location.href=('https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/e8eca98bafc3b95932d68ac8f882ec3abf43d598b0153a5c4e3f1cbd3c717b45_1.jpg');
        break;
    } else {
      alert("usuário ou senha incorreto");
    }
}
while (++contador < 3) {
  if (contador => 3) {
    alert('Limite de tentativas alcançado. Usuário bloqueado');
    };
};
