const form = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const listaRespostas= {
        "nome" : e.target.elements["nome"].value,
        "email" : e.target.elements["email"].value,
        "assunto" : e.target.elements["assunto"].value,
        "mensagem" : e.target.elements["mensagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './index.html';
})

form.forEach((campo)=>{
    campo.addEventListener('blur', ()=>verificaCampo(campo))
    campo.addEventListener('invalid', evento => evento.preventDefault())

})

const erros= [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagemError = 
{
    nome: 
    {
        valueMissing: "Preencha o campo com seu nome",
        patternMismatch: "Preencha um nome válido",
        tooShort: "Preencha um nome válido"
    },
    email:
    {
        valueMissing: "Preencha o campo com seu email",
        typeMismatch:"Preencha um email válido"
    },
    assunto:
    {
        valueMissing:"Preencha o campo com o assunto"
    }
}


function verificaCampo(campo)
{
    let mensagem="";
    erros.forEach(error =>
    {
        if(campo.validity[error]){
            mensagem = mensagemError[campo.name][error]
            console.log(mensagem)
        }
    })
    const mensagemErrado = campo.parentNode.querySelector('.mensagem-erro');
    const valorInput = campo.checkValidity();

    if(!valorInput){
        mensagemErrado.textContent = mensagem;
    } else{
        mensagemErrado.textContent = " ";
    }
}