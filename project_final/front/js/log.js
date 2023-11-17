$(document).ready(function(){
    // 회원가입 버튼 클릭 이벤트
    $("#signupBtn").click(function(){
        var signupUsername = $("#signupUsername").val();
        var signupPassword = $("#signupPassword").val();

        // 새로운 회원 정보를 생성하여 로컬 스토리지에 저장
        saveSignupInfo(signupUsername, signupPassword);
    });

    // 로그인 버튼 클릭 이벤트
    $("#loginBtn").click(function(){
        var loginUsername = $("#loginUsername").val();
        var loginPassword = $("#loginPassword").val();

        // 로그인 함수 호출
        login(loginUsername, loginPassword);
    });
});

// 회원가입 정보를 로컬 스토리지에 저장하는 함수
function saveSignupInfo(username, password) {
    var existingInfo = localStorage.getItem("signupInfo");
    var signupInfo = [];

    if (existingInfo) {
        signupInfo = JSON.parse(existingInfo);
    }

    signupInfo.push({
        username: username,
        password: password
    });

    localStorage.setItem("signupInfo", JSON.stringify(signupInfo));

    alert("회원가입이 완료되었습니다.");
}


// 로그인 함수
function login(username, password) {
    var existingInfo = localStorage.getItem("signupInfo");
    var signupInfo = [];

    if (existingInfo) {
        signupInfo = JSON.parse(existingInfo);
    }

    // 입력한 아이디와 비밀번호와 일치하는 회원 정보 확인
    var user = signupInfo.find(function(user){
        return user.username === username && user.password === password;
    });

    if (user) {
        alert("로그인 성공!");
    } else {
        alert("로그인 실패. 아이디 또는 비밀번호를 확인하세요.");
    }
}
