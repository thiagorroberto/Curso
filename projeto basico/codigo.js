function enviar(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    console.log(usuario);
    console.log(senha);
    var tagP = document.getElementById('resultado');

    if((usuario === 'thiago') && (senha === '123')){
        
        tagP.innerHTML = 'Logado com sucesso!'
    }
    else {
        tagP.innerHTML = 'Usuario ou senha incorreto.'
    }
    
}



const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    console.log(inputEmail.value)

}

window.onload = init;