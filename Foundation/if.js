//그냥 if
let password = prompt('password ?' , '****');
let access ;
if(password = 'password'){
    access =true;
}
else {
    access =false;
}

//if ? 문으로 만들어보기  (다중 if)
let age = prompt('나이가 몇이세요 ', 27);
let message =  (age > 20) ? '성인':
(age > 13) ? '청소년' :
(age > 0) ? '애기' :
'값을 잘못 입력하셨습니다' ;
 

//조건부 연산ㅅ자 

let cal = 3+5 == 8 ? true : false;