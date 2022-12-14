function Check() {
    // id , pw,pw2, name, tel, email 변수
    const idCheck = document.getElementById("signup-id");
    const pwCheck = document.getElementById('signup-pw');
    const pwCheck2 = document.getElementById('signup-pw2');
    const nameCheck = document.getElementById("signup-name");
    const telCheck = document.getElementById("signup-tel");
    const emailCheck = document.getElementById("signup-email");


    // 데이터 정규화 변수
    var id = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var pass = RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var email = RegExp(/^[A-Za-z0-9_.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var named = RegExp(/^[가-힣]+$/);
    var tel = RegExp(/^[0-9]{3,4}[0-9]{4}$/g);


    //아이디 공백 확인
    if (idCheck.value == "") {
        alert("아이디 입력해주세요");
        idCheck.focus();
        return false;
    }
    //아이디 유효성검사
    if (!id.test(idCheck.value)) {
        alert("형식에 맞게 입력해주세요");
        idCheck.value = "";
        idCheck.focus();
        return false;
    }

    //비밀번호 공백 확인
    if (pwCheck.value == "") {
        alert("패스워드 입력해주세요");
        passCheck.focus();
        return false;
    }

    //아이디 비밀번호 같음 확인
    if (idCheck.value == pwCheck.value) {
        alert("아이디와 비밀번호가 같습니다");
        pwCheck.value = "";
        pwCheck.focus();
        return false;
    }

    //비밀번호 유효성검사
    if (!pass.test(pwCheck.value)) {
        alert("형식에 맞게 입력해주세요");
        pwCheck.value = "";
        pwCheck.focus();
        return false;
    }

    //비밀번호 확인란 공백 확인
    if (pwCheck2.value == "") {
        alert("패스워드 확인란을 입력해주세요");
        pwCheck2.focus();
        return false;
    }
    //비밀번호 서로확인
    if (pwCheck.value != pwCheck2.value) {
        alert("비밀번호가 상이합니다");
        pwCheck.value = "";
        pwCheck2.value = "";
        pwCheck.focus();
        return false;
    }

    //이메일 공백 확인
    if (emailCheck.value == "") {
        alert("이메일을 입력해주세요");
        emailCheck.focus();
        return false;
    }

    //이메일 유효성 검사
    if (!email.test(emailCheck.value)) {
        alert("이메일형식에 맞게 입력해주세요")
        emailCheck.value = "";
        emailCheck.focus();
        return false;
    }

    //이름 공백 검사
    if (nameCheck.value == "") {
        alert("이름을 입력해주세요");
        nameCheck.focus();
        return false;
    }

    //이름 유효성 검사
    if (!named.test(nameCheck.value)) {
        alert("이름형식에 맞게 입력해주세요")
        nameCheck.value = "";
        nameCheck.focus();
        return false;
    }
    //전화 공백 검사
    if (telCheck.value == "") {
        alert("이름을 입력해주세요");
        telCheck.focus();
        return false;
    }

    //전화 유효성 검사
    if (!tel.test(telCheck.value)) {
        alert("이름형식에 맞게 입력해주세요")
        telCheck.value = "";
        telCheck.focus();
        return false;
    }


}

// 전화번호, 이메일의 value값을 합치는 작업
function combine_values() {

}

//확인 버튼 눌렀을 시
function confirm() {
    // if(!confirm_check()){
    //     alert('내용을 정확히 입력해 주세요');
    //     return;
    // }
    //각 값들을 합치는 작업
    //combine_values();
    //서버로 전송함
    const registerForm = document.forms.namedItem('signup-form');
    registerForm.action = '/users/register';
    registerForm.method = 'post';
    registerForm.submit();
}

// //이벤트 달기
// [...inputTags].forEach(inputTag => {
//     // inputTag.addEventListener('keydown', e => {
//     //         event_handler(e);
//     //     }
//     // );
//     // inputTag.addEventListener('keyup', e => {
//     //         event_handler(e);
//     //     }
//     // );
//     inputTag.addEventListener('change', e => {
//             event_handler(e);
//         }
//     );
//
// });
const btn2 = document.getElementById('btn2');
btn2.onclick = () => {
    Check();
}

