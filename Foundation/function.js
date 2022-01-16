function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given
  //이런식으로 default 값을 줄 수 있음. 


  function sayHi() {
    alert( "Hello" );
  }


  // 함수 표현식으로 함수 만들기
  let sayHi = function() {
    alert( "Hello" );
  };

  //자바스크립트에서 함수는 값입니다. 따라서 함수를 값처럼 취급할 수 있습니다. 위 코드에선 함수 소스 코드가 문자형으로 바뀌어 출력되었습니다.


  function sayHi() {   // (1) 함수 생성
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) 함수 복사
  
  func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
  sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


  // 콜백함수 //

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "동의하셨습니다." );
  }
  
  function showCancel() {
    alert( "취소 버튼을 누르셨습니다." );
  }
  
  // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
  ask("동의하십니까?", showOk, showCancel);



  //  콜백함수 아래처럼 줄여쓰기 가능 //
  function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);