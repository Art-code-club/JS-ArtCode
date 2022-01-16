let user = new Object();
let user = {};

// [ ]를 쓰면 객체 안에 들어있는 프러퍼티가 호출이 된다 .
let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
  
  // 변수로 접근
  alert( user[key] ); // John (프롬프트 창에 "name"을 입력한 경우)



  /// properties 를 사용 하여 객체를 잘 써보기

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};

// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5;


//이것도 가능함.
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


let user = { name: "John", age: 30 };

alert( "age" in user ); // user.age가 존재하므로 true가 출력됩니다.
alert( "blabla" in user ); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.