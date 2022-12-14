const confirmCheck = {id: false, pw: false, pw_re: false, name: false, tel:false, email: false};
const inputID = document.getElementById('register-input-id');
const inputPW = document.getElementById('register-input-pw');
const inputPW_RE = document.getElementById('register-input-pw-re');
const inputName = document.getElementById('register-input-name');
const inputTel = document.getElementById('register-input-tel');
const inputEmail = document.getElementById('register-input-email');
//선택하는 Select값들
const registerSelectEmail = document.getElementById('register-select-email');
const registerSelectTel = document.getElementById('register-select-tel');
//모든 input값들
const inputTags = document.getElementsByTagName('input');
const [backBtn, confirmBtn] = [...document.getElementById('register-buttons').children];

//돌아가기 버튼 눌렀을 시
function back(){

}

//확인 버튼 눌렀을 시
function confirm(){
    // if(!confirm_check()){
    //     alert('내용을 정확히 입력해 주세요');
    //     return;
    // }
    //각 값들을 합치는 작업
    combine_values();
    //서버로 전송함
    const registerForm = document.forms.namedItem('register-form');
    registerForm.action = '/users/register';
    registerForm.method = 'post';
    registerForm.submit();
}

//전화번호, 이메일의 value값을 합치는 작업
function combine_values(){
    //전화번호 합치는 작업
    const inputTelHidden = inputTel.nextElementSibling.nextElementSibling;
    const inputEmailHidden = inputEmail.nextElementSibling.nextElementSibling;
    //hidden 값 가져오기
    const telSelectValue = registerSelectTel.firstElementChild.value;
    const emailSelectValue = registerSelectEmail.firstElementChild.value;
    //전화번호 합치기
    inputTelHidden.value = telSelectValue + inputTel.value;
    //이메일은 직접입력인지 확인하고 합치기
    if(emailSelectValue === '') {
        inputEmailHidden.value = inputEmail.value;
    }
    else{
        inputEmailHidden.value = inputEmail.value + emailSelectValue;
    }
}

function confirm_check(){
    console.log(confirmCheck);
    for (const key in confirmCheck) {
        if(!confirmCheck[key]){
            return false;
        }
    }
    return true;
}

function checkID(s){
    s = String(s); //나중에 지울용
    const trimString = 'ID에 띄어쓰기는 포함 될 수 없습니다';
    const AlphaLenString = 'ID는 영문 + 숫자 조합의 6-10자여야합니다';
    const necessaryString = '필수 정보입니다';
    //확인되지 않았음
    inputID.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', false);
    confirmCheck.id = false;

    //공백이 포함되어 있는가
    if(RegExp(/[ ]/g).test(s)){
        inputID.nextElementSibling.textContent = trimString;
    }
    // 입력하지 않았을 경우
    else if(s.length === 0){
        inputID.nextElementSibling.textContent = necessaryString;
    }
    //영문과 숫자가 포함되어 있지 않을 경우
    else if(!RegExp(/(?=(.*[0-9].*)+)(?=(.*[a-zA-Z].*)+)/g).test(s)){
        inputID.nextElementSibling.textContent = AlphaLenString;
    }
    else if(s.length < 6 || s.length > 10){
        inputID.nextElementSibling.textContent = AlphaLenString;
    }
    //확인되었음
    else{
        confirmCheck.id = true;
        inputID.nextElementSibling.textContent = '';
        //아이콘 색 바꾸기
        inputID.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', true);
    }
}

//비밀번호 체크
function check_password(s){
    const reg = RegExp(/(?=(.*[0-9].*)+)(?=(.*[a-z].*)+)(?=(.*[A-Z].*)+)(?=(.*[!@#$%^&*_+].*)+)/g);
    if(!reg.test(s) || s.length < 8 || s.length > 15){
        confirmCheck.pw = false;
        inputPW.nextElementSibling.textContent = '8-15자의 영문 대소문자, 숫자와 특수문자 조합';
        inputPW.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', false);
    }
    else{
        confirmCheck.pw = true;
        inputPW.nextElementSibling.textContent = '';
        inputPW.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', true);
    }
}

//패스워드 재입력 체크
function check_re_password(){
    if(inputPW_RE.value !== inputPW.value){
        confirmCheck.id = false;
        inputPW_RE.nextElementSibling.textContent = '비밀번호가 일치하지 않습니다';
        inputPW_RE.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', false);
    }
    else{
        confirmCheck.pw = true;
        inputPW_RE.nextElementSibling.textContent = '';
        inputPW_RE.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', true);
    }
}

//휴대폰 번호 체크
function check_tel(s){
    const reg = RegExp(/^[0-9]{3,4}[0-9]{4}$/g);
    if(!reg.test(s)){
        confirmCheck.tel = false;
        inputTel.nextElementSibling.textContent = '전화번호를 정확히 입력해 주세요';
        inputTel.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', false);
    }
    else{
        confirmCheck.tel = true;
        inputTel.nextElementSibling.textContent = '';
        inputTel.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', true);
    }
}

function check_name(s){
    const reg = RegExp(/[!@#$%^&*_+0-9]/g);
    inputName.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', false);
    confirmCheck.name = false;
    if(reg.test(s)){
        inputName.nextElementSibling.textContent = '이름이 이상합니다';
    }
    else if(s.length === 0){
        inputName.nextElementSibling.textContent = '필수 정보입니다';
    }
    else{
        confirmCheck.name = true;
        inputName.nextElementSibling.textContent = '';
        inputName.parentElement.nextElementSibling.firstElementChild.setAttribute('confirm', true);
    }
}

function check_email(s){
    const reg = RegExp(/^[a-zA-Z]{1}[a-zA-Z0-9.\-_]+@[a-z0-9]{1}[a-z0-9\-]+[a-z0-9]{1}\.(([a-z]{1}[a-z.]+[a-z]{1})|([a-z]+))$/g);
    if(registerSelectEmail.value === '직접입력' && !reg.test(s)) {
        confirmCheck.email = false;
        inputEmail.nextElementSibling.textContent = '이메일 주소를 다시 확인해주세요';
    }
    else{
        confirmCheck.email = true;
        inputEmail.nextElementSibling.textContent = '';
    }
}

//이벤트 발생할 시 같은 동작
function event_handler(e){
    const targetValue = e.target.value;
    switch (e.target){
        case inputID:
            checkID(targetValue);
            break;
        case inputPW:
            check_password(targetValue);
        case inputPW_RE:
            check_re_password();
            break;
        case inputName:
            check_name(targetValue);
            break;
        case inputTel:
            check_tel(targetValue);
            break;
        case inputEmail:
            check_email(targetValue);
            break;
    }
}

//이벤트 달기
[...inputTags].forEach( inputTag => {
    // inputTag.addEventListener('keydown', e => {
    //         event_handler(e);
    //     }
    // );
    // inputTag.addEventListener('keyup', e => {
    //         event_handler(e);
    //     }
    // );
    inputTag.addEventListener('change', e => {
            event_handler(e);
        }
    );
});

//이메일 직접입력말고 다른걸로 바꿀 시
registerSelectEmail.addEventListener('change', e => {
    check_email(e.targetValue);
});

confirmBtn.addEventListener('click', e => {
    confirm();
});
backBtn.addEventListener('click', e => {
    back();
});