const roomContainerDiv =  document.getElementById('room-container');

window.onload = () => {
    get_all_rooms();
}

//넣어줄 방의 정보를 가져오는 함수
function add_room_information(){
    const roomInputs = [...document.getElementById('room-adding-container')
        .getElementsByTagName('input')];
    return {
        roomNo: roomInputs[0].value,
        roomPrice: roomInputs[1].value,
        roomSize: roomInputs[2].value,
        roomImageFile: roomInputs[3].value
    };
}

//방 정보를 POST하는 함수 (새 방을 생성)
function post_room(){
    const roomInfo = add_room_information();
    const request = new XMLHttpRequest();
    request.open('POST', '/room');
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify(roomInfo));
    //POST 요청이 정상적으로 완료되었을 경우, 모든 방 정보를 재 로드한다
    request.onload = () => {
        get_all_rooms();
    }
}

//모든 방 정보를 GET으로 가져오는 함수
function get_all_rooms(){
    const request = new XMLHttpRequest();
    request.open('GET', '/room');
    request.send();
    request.onload = () => {
        if(request.status === 200){
            make_room_info(JSON.parse(request.response));
        }
    }
}

//모든 방 정보를 생성하는 함수
function make_room_info(roomsObj){
    //div내부를 한번 싹 비운다
    roomContainerDiv.innerHTML = '';

    for(room of roomsObj){
        let isEmptyText = room.reserveVO === null ? '비었음' :'예약중';   //예약상태
        const roomNo = room.roomVO.roomNo;          //방번호 (호실)
        const roomPrice = room.roomVO.roomPrice;    //방가격
        const roomSize = room.roomVO.roomSize;      //방크기

        const roomInfoHTML =
            '<div class="room-info-container">' +
            '<div class="room-condition">\n' +
            '            <span>' + isEmptyText + '</span>\n' +
            '            <div>\n' +
            '                <input type="button" value="숨기기">\n' +
            '                <input type="button" value="X">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="room-infomation">\n' +
            '            <span>방번호:' + roomNo + '</span>\n' +
            '            <img width="200" src="/images/' + roomNo + '.webp">\n' +
            '            <span>인원수(최대): ' + roomSize + '명</span>\n' +
            '            <span>가격:' + roomPrice + '원</span>\n' +
            '        </div>' +
            ' </div> '

        roomContainerDiv.insertAdjacentHTML('beforebegin', roomInfoHTML);
    }
}









