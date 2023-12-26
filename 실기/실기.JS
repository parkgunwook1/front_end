function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

    if (!passwordPattern.test(password)) {
        document.getElementById("passwordMessage").innerText = "영문자 대/소문자, 특수문자, 숫자를 포함한 8 ~ 32자여야 합니다.";
        return false;
    } else {
        document.getElementById("passwordMessage").innerText = "";
        return true;
    }
}
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    if (username === "" || password === "" || confirmPassword === "" || email === "" || address === "") {
        document.getElementById("errorMessage").innerText = "필수 입력 항목입니다.";
        return false;
    } else {
        document.getElementById("errorMessage").innerText = "";
        return true;
    }
}