function checkReg() {
    if (validateLogin() && validateEmail() && validatePasswd()) {
        alert(true);
        return true;
    } else {
        return false;
    }
}

function validateLogin(){
    var exp = /^[а-яёa-z0-9_]{3,16}$/i;
    if (exp.test(document.getElementById("reg-login").value)) {
        return true;
    } else {
        alert("Error name");
    }
}

function validateEmail(){
    var exp = /^\S{1,}@\S{2,}\.\S{2,}$/i;
    if (exp.test(document.getElementById("reg-email").value)) {
        return true;
    } else {
        alert("Error email");
    }
}

function validatePasswd(){
    var exp = /^[а-яёa-z0-9]{8}$/i;
    if (exp.test(document.getElementById("reg-passwd").value)) {
        return true;
    } else {
        alert("Error passwd");
    }
}

function checkLog() {

}