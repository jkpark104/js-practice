# JS / TS

# 1. JavaScript

## ■ Node.js

- 크롬 V8 JS 엔진으로 빌드된 JS 런타임(프로그래밍 언어가 동작하는 환경)

### 1. NVM (Node Version Manager)

- nvm install 버전 ← 설치
- nvm use 버전 ← 사용 버전 지정

### 2. NPM (Node Package Manager)

- 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리
- npm install XXX -D → 개발용 의존성 패키지 (개발할 때만 필요함을 의미)
- npm install XXX → 일반 의존성 설치 (실제 웹에서 필요할 수 있음을 의미)

### 3. Parcel Bundler

- 번들 → 프로젝트 개발에 필요한 모듈(패키지)을 하나로 묶어내는 작업
- parcel index.html → 개발용 서버를 염 | npm run dev
- parcel build index.html → 코드 난독화, 압축 | npm run build

### 4. 유의적 버전 (Semantic Versioning, SemVer)

- Major.Minor.Patch
- 기존 버전과 호환되지 않는 새로운 버전/기존 버전과 호환되는 새로운 기능이 추가된 버전/기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
- ^Major.Minor.Patch → 메이저 버전 안에서 가장 최신 버전으로 업데이트 가능

## ■ ECMA Script (ES)

- 표준화된 스크립트 프로그래밍 언어

## ■ 표기법

1. dash-case(kebab-case) → html, css
2. snake_case → html, css
3. camelCase → js
4. ParcelCase → js

## ■ 데이터 타입

- String, Number, Boolean, Undefined, Null
    - 코드

        ```jsx
        // String (문자 데이터)
        let myName = "HEROYPY";
        let email = 'thesecon@gmail.com';
        let hello = `Hello ${myName}?!`; // 보간법

        // Undefined, 값이 할당되지 않은 상태
        let undef;
        let obj = {abc:123};

        console.log(undef); //undef
        console.log(obj.abc); //123
        console.log(obj.xyz); //undef

        // Null, 값이 의도적으로 비어있음을 의미
        let empty = null;
        ```

- Object, Array
    - 코드

        ```jsx
        // Object(객체 데이터), 여러 데이터를 Key:Value 형태로 저장
        let user = {
          name:'Heropy',
          age: 85,
          isValid: true,
          getName: function() {        //method로서 객체 안에 함수 표현 가능
            return this.name;
          }
          // getName() {       
          //   return this.name;
          // }
        };
        ```

## ■ 데이터 타입 확인

- 코드

    ```jsx
    // 데이터 타입 확인
    import getType from './getType'
    // 경로 정확히 명시 ./ 없을 시 node_modules 폴더에서 찾음

    console.log(typeof 'hello world!');
    console.log(typeof 123);
    // typeof obj -> type(obj)

    console.log(getType({}));
    console.log(getType(false));
    console.log(getType(null));
    // -------------------------------- main.js

    // -------------------------------- getType.js
    export default function getType(data) {
      return Object.prototype.toString.call(data).slice(8, -1)
      // slice -> list[8:-1]
    }
    ```

## ■ 형 변환

- 코드

    ```jsx

    // 형 변환
    // Truthy (참 같은 값)
    // true, {}, [], 1, 2, 'false', -12, '3.14', ...
    // Python에서는 if {}, if [] 빈 객체는 false로 인식

    // Falsy(거짓 같은 값)
    // false, '', null, undefined, 0, -0, NaN

    if ({}) {
      console.log(123)
    }
    ```

## ■ 예약어

- 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
    - this, if, break, ...

## ■ 함수

- 선언 방식

    ```jsx
    function helloFunc() {               //기명 함수 → 함수 선언
      console.log(1234);
    	return 1234;
    }

    let world = function() {             //익명 함수 → 함수 표현
      console.log('World!~');
    }

    function sum() {
      console.log(arguments)
    }
    // def sum(*arg) in python
    sum(1, 2)
    ```

- 화살표 함수

    ```jsx
    // 화살표 함수 vs 일반 함수
    // () => {} vs function () {}

    const double = function (x) {
      return x * 2
    }
    console.log(double(7))

    const doubleArrow = (x) => {
      return x * 2
    }
    // doubleArrow = lambda x: x * 2 in python

    const a = x => ({
      name: 'heropy'
    })
    // Object 데이터 생성
    ```

- IIFE

    ```jsx
    // 즉시실행함수
    // Immediately-Invoked Function Expression

    const a = 7
    function double() {
      console.log(a * 2)
    }
    double();

    (function () {
      console.log(a * 2)
    })(); // <- 소괄호 밖

    (function () {
      console.log(a * 2)
    }()); // <- 소괄호 안
    ```

- 호이스팅

    ```jsx
    // 호이스팅
    // 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

    const a = 7

    double()
    function double() {
      console.log(a * 2)
    }
    // 함수 선언으로 호이스팅 발생

    // const double = function () {
    //   console.log(a * 2)
    // }
    // 함수 표현에서는 호이스팅 X
    ```

- 타이머 함수

    ```jsx
    // 타이머 함수
    // setTimeout(함수, 시간) : 일정 시간 후 함수 실행
    // setInterval(함수, 시간) : 시간 간격마다 함수 실행
    // clearTimeout() : 설정된 TimeOUT 함수 종료
    // clearInterval(): 설정된 Interval 함수 종료

    setTimeout(function () {
      console.log('Park')
    }, 3000)

    const timer = setInterval(() => {
      console.log('Park')
    }, 3000)

    const h1El = document.querySelector('h1')
    h1El.addEventListener('click', () => {
      clearInterval(timer)
    })
    ```

- 콜백

    ```jsx
    // 콜백(Callback)
    // 함수의 인수로 사용되는 함수
    // 실행위치를 보장하는 용도로 활용함

    function timeout(cb) {
      setTimeout(() => {
        console.log('Park')
        cb()
      }, 3000)
    }

    timeout(() => {
      console.log('Done!')
    })
    ```

## ■ 조건문 + 삼항 연산자

- 코드

    ```jsx
    let isShow = true;

    if (isShow) {
      console.log('Show!');
    } else {
      console.log('Hide?');
    }

    // switch
    const a = Math.floor(Math.random() * 10)

    switch(a) {
      case 0:
        console.log('a is 0')
        break
      case 2:
        console.log('a is 2')
        break
      case 4:
        console.log('a is 4')
        break
      default:
        console.log('rest...')
    }

    // 삼항 연산자 
    console.log(a ? '참' : '거짓')
    // '참' if a == True else '거짓' in python
    ```

## ■ 반복문 For

- 코드

    ```jsx
    for (let i = 0; i < 3; i += 1) {
      console.log(i)
    }

    // DOM
    const ulEl = document.querySelector('ul')

    for (let i = 0; i < 3; i += 1) {
      const li = document.createElement('li')
      li.textContent = `list-${i + 1}`
      li.addEventListener('click', function () {
        console.log(li.textContent)
      })
      ulEl.appendChild(li)
    }
    ```

## ■ 유효범위

- 코드

    ```jsx
    // 변수 유효범위
    // var, let, const

    function scope() {
      if (true) {
        console.log(a)
        const a = 123
      }
    }

    // var -> 함수 레벨의 유효 범위 -> 의도하지 않음 범위에서 변수 할당 될 수 있음 -> 메모리 누수
    // let, const -> 블록 레벨의 유효범위

    // if True: 
    // a = 3
    // print(a) works in python

    scope()
    ```

## ■ 클래스

- 선언방식

    ```jsx
    // 클래스 
    // 프로토타입을 이용해 생성자 함수로 인스턴스를 만드는 것

    // 특정 기호만을 사용해 데이터를 만드는 방식 : 리터럴 방식
    const heropy = {
      firstName: 'Heropy', //속성(Property)
      lastName: 'Park', // 속성(Property)
      getFullName: function() {
        return `${this.firstName} ${this.lastName}`
        // return `${heropy.firstName} ${heropy.lastName}`
      } // Method  (속성+메소드=멤버)
    }
    // console.log(heropy.getFullName())
    // => 반복해서 사용할 때 클래스를 사용

    // -------------------------------------------
    function User(first, last) {
      this.firstName = first
      this.lastName = last
      // this.getFullName = () => {
      //   return `${this.firstName} ${this.lastName}`
      // } => 메모리를 계속 할당해야 해서 비효율 => 프로토 타입 사용
    }
    User.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    const heropy2 = new User('Heropy', 'Park')
    const amy= new User('Amy', 'Park')
    const neo = new User('Neo', 'Park')
    console.log(heropy2.getFullName())
    ```

- this

    ```jsx
    // this
    // 일반 함수는 호출 위치에 따라 this 정의
    // 화살 함수는 자신이 선언된 함수 범위에서 this 정의

    const heropy = {
      name: 'heropy',
      normal: function() { //normal 메소드가 호출돼 이 위치에서 this 정의
        console.log(this.name)
      },
      arrow: () => {
        console.log(this.name) // arrow 메소드가 선언된 함수 범위에서 this 정의
      }
    }
    heropy.normal() 
    heropy.arrow()

    const amy = {
      name: 'Amy',
      normal: heropy.normal,
      arrow: heropy.arrow
    }
    amy.normal()
    amy.arrow()

    const timer = {
      name: 'Heropy!!',
      timeout: function () {
        setTimeout(function () {
          console.log(this.name) // 이 위치에서 this 정의
        }, 1000)
      },
      timeout_: function () {
        setTimeout(() => {
          console.log(this.name)
        }, 1000)
      },
      timeout__: () => {
        setTimeout(() => {
          console.log(this.name)
        }, 1000)
      },
      timeout___: () => {
        setTimeout(function () {
          console.log(this.name)
        }, 1000)
      }
    }
    timer.timeout()
    timer.timeout_()
    timer.timeout__()
    timer.timeout___()
    ```

    - 
- ES6 Classes

    ```jsx
    // ES6 Classes
    class User {
      constructor(first, last) {
        this.firstName = first
        this.lastName = last
      }
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      }
    }
    const heropy2 = new User('Heropy', 'Park')
    const amy = new User('Amy', 'Park')
    const neo = new User('Neo', 'Park')
    console.log(heropy2.getFullName())

    // ----------------------------------------------------------------------------
    // 상속(확장)

    class Vehicle {
      constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
      }
    }
    const myVehicle = new Vehicle('운송수단', 2)

    class Bicycle extends Vehicle {
      constructor(name, wheel) {
        super(name, wheel)
      }
    }
    const myBicycle = new Bicycle('세발', 3)
    console.log(myBicycle)

    class Car extends Vehicle {
      constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license
      }
    }
    const myCar = new Car('운송수단', 2, '2종')
    console.log(myCar)
    ```

## ■ DOM API

- Document Object Model, Application Programming Interface
    - JS로 HTML을 제어하는 도구(명령)
- 코드

    ```jsx
    //1. HTML 요소(Element) 가장 먼저 찾은 1개 검색/찾기
    const boxEl = document.querySelector('.box');

    //2. 핸들러(Handler, 실행할 함수)
    boxEl.addEventListener('click', function() {
      console.log('Click~!');
    });

    //3. 요소의 클래스 정보 객체 활용!
    boxEl.classList.add('active');
    let isContains = boxEl.classList.contains('active');
    boxEl.classList.remove('active');

    //4. HTML 요소(Element) 모두 검색/찾기
    const boxEls = document.querySelectorAll('.box');

    //5. 찾은 요소들 반복해서 함수 실행
    // 익명 함수를 인수로 추가
    // 첫번째 매개변수(boxEl) : 반복 중인 요소
    // 두번째 매개변수(index) : 반복 중인 번호
    boxEls.forEach(function(boxEl, index) {
      boxEl.classList.add(`order-${index+1}`);
      console.log(index, boxEl);
    });

    //6. Getter, 값을 얻는 용도
    const boxEl = document.querySelector('.box');
    console.log(boxEl.textContent);

    //7. Setter, 값을 지정하는 용도
    boxEl.textContent = 'HEROPY?!';
    console.log(boxEl.textContent)
    ```

## ■ Method Chaining

- 코드

    ```jsx
    const a = 'Hello~';
    const b= a.split('').reverse().join(''); //메소드 체이닝
    console.log(a);
    console.log(b);
    ```