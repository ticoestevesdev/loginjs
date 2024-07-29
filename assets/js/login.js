const loginForm = document.getElementById("login");
const buttonLogin = document.getElementById("submit__login");
const registerMail = localStorage.getItem("user");
const registerPass = localStorage.getItem("pass");
function showLogin() {
    loginForm.style.left = "0";
    document.getElementById("register").style.left = "-200%";
    loginForm.classList.add("animate__bounceInLeft");
}
document.getElementById("login__button").addEventListener("click", showLogin);

function closeLogin() {
    document.getElementById("login").style.left = "-200%";
    loginForm.classList.remove("animate__bounceInLeft");
}

function checkLogin(e) {
    var emailLogin = document.getElementById("email__login").value;
    var passLogin = document.getElementById("password__login").value;
    var submit = false;
    if(emailLogin == ""){
        alert("Digite seu e-mail.");
    }else if(emailLogin.indexOf("@")== -1 || emailLogin.indexOf(".")== -1){
        alert("Digite um e-mail válido.");
    }else if(passLogin == "") {
        alert("Digite sua senha.");
    }else if(emailLogin === registerMail && passLogin === registerPass){
        alert("Login realizado com sucesso!");
        submit = true;
    }else{
        alert("Usuário ou senha não encontrados.");
    }
    if(submit === false){
        e.preventDefault();
    }
}
document.getElementById("submit__login").addEventListener("click", checkLogin);

// Animações form login
function showLabelMail() {
    var labelMail = document.getElementById("label__email");
    var inputMail = document.getElementById("email__login");
    labelMail.style.display = "block";
    labelMail.classList.add("animate__fadeInUp");
    inputMail.classList.add("animate__fadeInDown");
    inputMail.classList.remove("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "");
    buttonLogin.style.display = "block";
    buttonLogin.classList.add("animate__fadeInUp");
}

function hideLabelMail() {
    var labelMail = document.getElementById("label__email");
    var inputMail = document.getElementById("email__login");
    labelMail.style.display = "none";
    labelMail.classList.remove("animate__fadeInUp");
    inputMail.classList.remove("animate__fadeInDown");
    inputMail.classList.add("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "Informe seu e-mail...");
}

function showLabelPass() {
    var labelPass = document.getElementById("label__pass");
    var inputPass = document.getElementById("password__login");
    labelPass.style.display = "block";
    labelPass.classList.add("animate__fadeInUp");
    inputPass.classList.add("animate__fadeInDown");
    inputPass.classList.remove("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "");
}

function hideLabelPass() {
    var labelPass = document.getElementById("label__pass");
    var inputPass = document.getElementById("password__login");
    labelPass.style.display = "none";
    labelPass.classList.remove("animate__fadeInUp");
    inputPass.classList.remove("animate__fadeInDown");
    inputPass.classList.add("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "Informe sua senha...");
}

// Fecha formulário ao clicar no background
window.addEventListener('mouseup',function(backLogin){
    if(backLogin.target == loginForm && backLogin.target.parentNode != loginForm){
        closeLogin();
    }
}); 