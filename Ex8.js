let password = prompt("Enter password: ");

function isStrongPassword(password) {
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)){
        alert("Weak password");
        return false;
    }
    alert("Strong");
    return true;
    
}

isStrongPassword(password);
