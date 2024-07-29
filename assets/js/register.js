const registerForm = document.getElementById("register");
const buttonRegister = document.getElementById("submit__register");

function showRegister() {
    registerForm.style.left = "0";
    document.getElementById("login").style.left = "-200%";
    registerForm.classList.add("animate__bounceInLeft");
}
document.getElementById("regiter__button").addEventListener("click", showRegister);

function closeRegister() {
    document.getElementById("register").style.left = "-200%";
    registerForm.classList.remove("animate__bounceInLeft");
}

// Verificação de preenchimento dos dados
function verifyRegister(e) {
    var emailR = document.getElementById("email__register").value;
    var passR = document.getElementById("password__register").value;
    var passC = document.getElementById("password__confirm").value;
    var submit = false;
    if(emailR == ""){
        alert("Digite um e-mail.");
    }else if(emailR.indexOf("@")== -1 || emailR.indexOf(".")== -1){
        alert("Digite um e-mail válido.");
    }else if(passR == ""){
        alert("Digite uma senha.");
    }else if(passC == ""){
        alert("Confirme sua senha.");
    }else if(passC !== passR){
        alert("As senhas precisam ser iguais.");
    }else{
        alert("Cadastro realizado com sucesso!");
        localStorage.setItem("user", emailR);
        localStorage.setItem("pass", passR);
        submit = true;
    }
    if(submit === false) {
        e.preventDefault();
    }
}
document.getElementById("submit__register").addEventListener("click", verifyRegister);

// Animações form cadastro
function showLabelMailR() {
    var labelMail = document.getElementById("label__email__r");
    var inputMail = document.getElementById("email__register");
    labelMail.style.display = "block";
    labelMail.classList.add("animate__fadeInUp");
    inputMail.classList.add("animate__fadeInDown");
    inputMail.classList.remove("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "");
    buttonRegister.style.display = "block";
    buttonRegister.classList.add("animate__fadeInUp");
}

function hideLabelMailR() {
    var labelMail = document.getElementById("label__email__r");
    var inputMail = document.getElementById("email__register");
    labelMail.style.display = "none";
    labelMail.classList.remove("animate__fadeInUp");
    inputMail.classList.remove("animate__fadeInDown");
    inputMail.classList.add("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "Informe seu e-mail...");
}

function showLabelPassR() {
    var labelPass = document.getElementById("label__pass__r");
    var inputPass = document.getElementById("password__register");
    labelPass.style.display = "block";
    labelPass.classList.add("animate__fadeInUp");
    inputPass.classList.add("animate__fadeInDown");
    inputPass.classList.remove("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "");
}

function hideLabelPassR() {
    var labelPass = document.getElementById("label__pass__r");
    var inputPass = document.getElementById("password__register");
    labelPass.style.display = "none";
    labelPass.classList.remove("animate__fadeInUp");
    inputPass.classList.remove("animate__fadeInDown");
    inputPass.classList.add("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "Informe sua senha...");
}

function showLabelPassRc() {
    var labelPassR = document.getElementById("label__pass__rc");
    var inputPassR = document.getElementById("password__confirm");
    labelPassR.style.display = "block";
    labelPassR.classList.add("animate__fadeInUp");
    inputPassR.classList.add("animate__fadeInDown");
    inputPassR.classList.remove("animate__fadeInUp");
    inputPassR.setAttribute("placeholder", "");
}

function hideLabelPassRc() {
    var labelPassR = document.getElementById("label__pass__rc");
    var inputPassR = document.getElementById("password__confirm");
    labelPassR.style.display = "none";
    labelPassR.classList.remove("animate__fadeInUp");
    inputPassR.classList.remove("animate__fadeInDown");
    inputPassR.classList.add("animate__fadeInUp");
    inputPassR.setAttribute("placeholder", "Informe sua senha...");
}

// Fecha formulário ao clicar no background
window.addEventListener('mouseup',function(backRegister){
    if(backRegister.target == registerForm && backRegister.target.parentNode != registerForm){
        closeRegister();
    }
}); 