# 5. JS / TS

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
    - npm init -y → json 파일 생성

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

- 참조형 데이터 ↔ 원시형 데이터
    - 객체, 배열, 함수
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

 1. 문자

- 코드

    ```jsx
    // 1. indexOf
    const string = "Hi I'm Park"
    const lastName = "Park" //-> if not return -1
    console.log(string.indexOf(lastName))
    // in python
    // string_ = "Hi I'm Park"
    // lastName = "Park"
    // print(string_.index(lastName)), 여러 자료형
    // print(string_.find(lastName)), 문자열만

    // 2. length
    let str = '0123'
    console.log(str.length)

    // 3. slice
    console.log(str.slice(0,3))
    // str[0:3]

    // 4. replace
    console.log(str.replace('012', '4567'))

    // 5. match
    str = 'thesecon@gmail.com'
    console.log(str.match(/.+(?=@)/))

    // 6. trim
    str = '   sdfdsfdf s '
    console.log(str.trim())
    ```

2. 숫자

- 코드

    ```jsx
    // JS 숫자
    const pi = 3.141592
    console.log(typeof pi.toFixed(2))
    console.log(parseInt(pi))
    console.log(parseFloat(pi))
    // s = 3.141592
    // s1 = '{:.2f}'.format(s)
    // s2 = round(s, 2)

    // 1. Math.abs()
    // 2. Math.min(), Math.max()
    // 3. Math.ceil(), Math.floor()
    // 4. Math.round(), Math.random()
    ```

3. 배열

- 코드

    ```jsx
    // JS 배열(Array)
    // 1. find
    a = [1,2,3,4,7,13,15];
    console.log(a.indexOf(7))
    console.log(a.find(element => element > 10));
    // 조건을 만족하는 첫번째 요소 반환

    // 2 -> .contcat()
    const b = ['apple', 'banana']
    console.log(a.concat(b))
    // -> 원본 수정 안 됨

    // 3 -> .foreach()
    b.forEach(function (element, index, array) {
      console.log(element, index, array)
    })
    // b.forEach((element, index, array) => {
    //   console.log(element, index, array)
    // })

    // 4 -> .map()
    const c = b.map(function (element, index) {
      // return `${element}, ${index}`
      return {
        id: index,
        name: element
      }
    })
    console.log(c);
    // map(func, Object) in python

    // 5 -> .filter()
    let numbers = [1,2,3,4]
    let fruits = ['Apple', 'Banana']
    // const s1 = numbers.map(number => {
    //   return number < 3
    // })
    const s2 = numbers.filter(number => number < 3
    )
    console.log(s2)

    // => map과 filter는 원본에 영향 X

    // 6 -> .find()   .findIndex()
    const t1 = fruits.find(fruit => {
      return /^B/.test(fruit)
    })
    // fruit 요소가 하나씩 들어가서 .test() 함수로
    // true가 반환되는 요소(Banana)를 리턴

    const t2 = fruits.findIndex( fruit => /^B/.test(fruit) )
    // true가 반환되는 idx를 리턴

    // 7 -> .inclues()
    const d1 = fruits.includes('Banana')
    console.log(d1)

    // 8 -> .push() .unshift()
    // 원본 수정됨 !
    numbers = [1,2,3,4]
    fruits = ['Apple', 'Banana']

    numbers.push(5)
    numbers.unshift(2)
    console.log(numbers)

    // 9 -> .reverse()
    // 원본 수정됨 !
    console.log(numbers.reverse())
    console.log(numbers)

    // 10 -> .splice(2, 1, 99)
    // 원본 수정됨 !
    console.log(numbers.splice(2, 1, 99)) // return 3
    // (idx, n) -> idx부터 n번째까지 숫자 삭제 및 반환
    // del numbers[2:3] in python
    // numbers.insert(2, 99) in python
    console.log(numbers)

    // 11 -> .join() 
    // 문자열로 만듦
    const array = [1,2,3,4,5]

    console.log(array.join(' '))
    // print(''.join(a))

    // 12 -> .reduce((acc,current,idx,array),init value)
    // init value 설정 안하면 배열의 0번째 인수가 init value로 들어감
    const a = [1,2,3,4]
    // console.log(a.reduce((acc,val) => {
    //   console.log(acc, val)
    //   return acc+val
    // }))

    const alpha = ['a', 'b', 'c', 'd', 'e']

    const counts = alpha.reduce((acc, cur) => {
      if (acc[cur]) {
        acc[cur] +=1
      } else {
        acc[cur] = 1
      }
      return acc
    }, {})

    // console.log(counts)
    ```

4. 객체

- 코드

    ```jsx
    // JS Object
    // Static Method : Parameters를 필요치 않음
    // 특정 인스턴스와 연결 돼 있지 않음

    let target = { a: 1, b: 2}
    let source = { b: 4, c: 5}

    // 1. assign(a,b) b를 a에 병합하고 a를 반환
    let returnedTarget = Object.assign(target, source)

    console.log(target == returnedTarget)

    const a1 = {k:123}
    const a2 = {k:123}
    console.log(a1===a2)
    // console.log(a1==a2) -> false -> why?

    // 2. assign({}, a, b) a, b를 합쳐 새로운 객체 생성

    // 3. keys
    console.log(Object.keys(target))
    let values = Object.keys(target).map(key => target[key])
    console.log(values)
    // values 리턴

    // cf. --->
    const a = [1,2,3,4]

    const o1 = Object.entries(a)
    const o2 = Object.values(a)
    const o3 = Object.keys(a)
    console.log(o1, o2)
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

## ■ 연산자

1. 산술 연산자 :  + / - / ++
2. 대입 연산자 : = / += / *=
3. 논리 연산자 :  ! → && → ||  
4. 비교 연산자 : === / > / <

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
    // 중괄호가 겹치므로 객체를 반환하고 싶을 땐
    // 바깥을 소괄호로 감쌈
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

- 호이스팅 (hoisting)

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

## ■ 유효범위 (Scope)

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

    //----------------------
    const value = 'hello'
    // global scope

    function myFunc() {
      console.log(value)
    }

    function otherFunc()  {
      const value = 'bye'
      // function scope
      console.log(value)
      if (true) {
        const value = 'nono'
        // block scope
        console.log(value)
      }
    }

    myFunc()
    otherFunc()

    console.log(value)
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
    // => 프로토 타입을 통해 만들어지는 생성자는 메모리에 한번만 저장되고 
    // new라는 생성자를 통해 언제든지 사용할 수 있음
    // 객체가 생성될 때 같은 참조 주소값을 넣어 주는 것 같음
    const heropy2 = new User('Heropy', 'Park')
    const amy= new User('Amy', 'Park')
    const neo = new User('Neo', 'Park')
    console.log(heropy2.getFullName())
    ```

- 상속

    ```jsx
    function Animal(type, name, sound) {
      this.type = type
      this.name = name
      this.sound = sound
    }

    Animal.prototype.say = function() {
      console.log(this.sound)
    }

    function Dog(name, sound) {
      Animal.call(this, '개', name, sound)
    }

    function Cat(name, sound) {
      Animal.call(this, '고양이', name, sound)
    }

    Dog.prototype = Animal.prototype
    Cat.prototype = Animal.prototype
    ```

- this (1)

    ```jsx
    // this
    // 일반 함수는 호출 위치에 따라 this 정의
    // 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

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

- this (2)

    ```jsx
    const cat = {
      name : '야옹이',
      1: 'hi',
      say: () => {
        console.log(this.name)
      // say() {
      //   console.log(this.name)
      // }
    	// 화살표와 일반함수일 때 차이점
      }
    }

    const dog = {
      name : '멍멍이'
    }
    dog.say = cat.say
    cat.say()
    dog.say()
    ```

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
    	// 자동으로 프로토타입으로 설정됨
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

## ■ 기타 문법

1. 구조 분해 할당
    - 코드

        ```jsx
        // 4. 구조 분해 할당 (Destructuring assignment)
        //    =비구조화 할당

        let user = {
          name: 'Heropy',
          age: 85,
          email: 'thesecon@gmail.com'
        }

        const {name:heropy, age, email, address = 'Korea '} = user
        // name의 value 값을 heropy 변수에 저장, address의 기본값 = 'korea'
        console.log(heropy, age, email, address)

        user = ['Heropy', 85, 'thesecon@gmail.com']
        const [,b2,b3,b4 = 'Korea'] = user
        console.log(b2,b3,b4)

        // 4-1. 비구조화 할당 예시
        const deepObject = {
          state: {
            information: {
              name: 'velopert',
              languages: ['korean', 'english']
            }
          },
          value: 5
        }

        const {
          state: {
            information: {
              name,languages: [,firstLang]
            }
          },
          value
        } = deepObject

        console.log(name)
        // console.log(languages)
        console.log(firstLang)
        ```

2. 전개 연산자
    - 코드

        ```jsx
        // 전개 연산자 (Spread)
        let fruits = ['Apple', 'Banana']
        // console.log(...fruits)
        // a = [1,2,3] -> print(*a) in python
        // *args ≒ ...args <- rest parameters

        function toObject(a, b) {
          return {
            a: a,
            b // <- argument와 변수의 이름이 같아 축약형 가능
          }
        }
        // console.log(toObject(...fruits))

        //2-1. 전개 연산자 예시
        const slime = {
          name: '슬라임'
        }

        const cuteSlime = {
          ...slime,
          attribute: 'cute'
        }

        const slime_copy = slime
        // console.log(slime)
        // console.log(cuteSlime === slime)
        // console.log(slime === slime_copy)

        //2-2. 전개 연산자 예시 -> Rest

        const a = [ 1,2,3,4,5,6]

        const [b, ...c] = a
        // rest는 가장 뒤에 나와야 함
        // 파이썬은 순서 적용됨

        // console.log(b)
        // console.log(c)
        ```

3. Template Literal

    ```jsx
    const name = 'park'
    console.log(`Hello ${name}`)
    ```

## ■ 데이터 불변성

- 원시 데이터 : String / Number / Boolean / undefined / null
    - Value가 일치하면 같은 데이터
- 참조형 데이터 : Object / Array / Function

    ```jsx
    // 데이터 불변성(Immutability)
    // 참조형 데이터

    let a = { k: 1 }
    let b = { k: 1 }
    // console.log(a, b, a === b)
    a.k = 7
    b = a
    // console.log(a, b, a === b)
    a.k = 2
    // console.log(a, b, a === b)
    let c = b
    // console.log(a, b, c, a === c)
    a.k = 9
    // console.log(a, b, c, a === c)
    ```

## ■ 얕은복사 / 깊은복사

```jsx
import _ from 'lodash'

let user = {
  name: 'Heropy',
  age: 85,
  email: ['tehsecon@gmail.com']
}
// 참조 데이터 변수 할당
let copyUser = user
// console.log(copyUser === user)

// 얕은 복사(1)
copyUser = Object.assign({}, user)
// console.log(copyUser === user)

// 얕은 복사(2)
copyUser = {...user}
// console.log(copyUser === user)
user.email.push('neo@zillinks.com')
// console.log(copyUser)
// 안에 있는 참조 데이터의 주소값은 변하지 않음

// 깊은 복사
copyUser = _.cloneDeep(user)
user.email.push('jkrang104@gmail.com')
// console.log(copyUser, user)
```

## ■ Getter / Setter

- 코드

    ```jsx
    // 1. GETTER
    const a = {
    n1 : 1,
    n2 : 2,
    get cc() {
        return a.n1 + a.n2
      }
    }

    a.n2 = 3

    // console.log(a.cc)
    // 특정 값을 조회하려 할 때 (호출 X)

    // 2. SETTER
    const dog = {
      _name : '멍멍이',
      set name(value) {
        // parameters 설정해줘야 함
        this._name = value
      }
    }

    dog.name = '뭉뭉이'
    // = 함수일 때 dog.name(뭉뭉이)

    console.log(dog._name)
    ```

## ■ 단축 평가 논리 계산법

- 코드

    ```jsx
    const dog = {
      name: '멍멍이'
    }

    function getName(animal) {
      return animal && animal.name
      // animal과 annimal.name이 truthy한 객체인지 확인
    }

    // console.log(getName(dog))

    console.log(true && 'hello') // => 'hello'
    console.log('hello' && true) // => true
    console.log('hello' && 'bye') // => 'bye'
    console.log('hello' || false) // => 'hello'
    console.log('gone' || 'hihi') // => 'gone'
    console.log(true || 'hihi') // => true
    console.log(false || 'hihi') // => 'hihi'
    ```

## ■ 가져오기 / 내보내기

- 내보내기
    1. Default export
    2. Named export
- 코드

    ```jsx
    import { printHi, tmp as heropy } from './printHi'
    // 여러개 꺼내올 수 있음, alias 가능
    // import * as R from './printHi'

    export default function () {
      console.log('hi')
    } // default 함수 내보내기 import 함수이름 from '경로'
      // 하나의 내보내기만 할 수 있음 (Named Export는 상관 없음)

    // printHi()
    console.log(heropy)
    ```

## ■ Lodash

- 코드

    ```jsx
    import _ from 'lodash'

    // 1. 고유화
    let userA = [ 
      { userId: '1', name: 'HEROPY'},
      { userId: '2', name: 'Neo'}
    ]

    let userB = [ 
      { userId: '1', name: 'HEROPY'},
      { userId: '3', name: 'Amy'}
    ]

    let userC = userA.concat(userB)
    // console.log(userC)
    // console.log(_.uniqBy(userC, 'userId'))
    // -> 하나의 배열 데이터에서 고유화
    let userD = _.unionBy(userA, userB, 'userId')
    // console.log(userD)
    // -> 여러개의 배열 데이터에서 합친 뒤 고유화

    // 2. find / findIndex / remove 
    let users = [
      { userId: '1', name: 'HEROPY' },
      { userId: '2', name: 'Neo' },
      { userId: '3', name: 'Amy' },
      { userId: '4', name: 'Evan' },
      { userId: '5', name: 'Lewis' }
    ]

    let foundUser = _.find(users, { name: 'Amy' })
    // console.log(foundUser)
    let foundUserIndex = _.findIndex(users, { name: 'Amy'})
    // console.log(foundUserIndex)

    _.remove(users, { name: 'HEROPY' })
    ```

## ■ JSON

- JavaScript Object Notation
- "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위한 개방형 표준 포맷
- 비동기 브라우저/서버 통신(AJAX)을 위해 (XML 대체)
    - 큰 따옴표만 사용 → 키를 따옴표로 묶어줘야 함
    - undefined를 제외한 데이터 타입 사용 可
- 코드

    ```jsx
    // JSON 파일 불러오기
    import myData from './myData.json'

    // console.log(myData)

    // JSON 파일로 만들기
    const user = {
      name: 'HEROPY',
      age: 85,
      eamils: [
        'thesecon@gmail.com',
        'neo@zillinks.com'
      ]
    }

    const str = JSON.stringify(user)
    // console.log(typeof str)
    const obj = JSON.parse(str)
    // console.log(typeof obj)
    ```

- OMDb API 예제 cf. omdbapi.com
    - 코드

        ```jsx
        import axios from 'axios'

        function fetchMovies() {
          axios
          .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
          .then(res => {
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
          })
        }

        fetchMovies()
        ```

## ■ Storage

1. localStorage → 반영구적
    - 코드

        ```jsx
        // localStorage.setItem('myCat', 'Tom')
        // -> 문자 데이터 형태로 set

        // let cat = localStorage.getItem('myCat')
        // 데이터 읽어오기
        // localStorage.removeItem('myCat')

        // -------------------------------------------
        const user = {
          name: 'HEROPY',
          age: 85,
          eamils: [
            'thesecon@gmail.com',
            'neo@zillinks.com'
          ]
        }

        // localStorage.setItem('user', JSON.stringify(user))
        const obj = JSON.parse(localStorage.getItem('user'))
        obj.age = 22
        localStorage.setItem('user', JSON.stringify(obj))
        ```

2. sessionStorage → 페이지를 닫을 때 데이터 사라짐

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

## ■ 정규표현식 (Regular Expression, Regex)

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)
- 메소드
    - test → 일치 여부 반환
    - match → 일치하는 문자열 반환
    - search → 일치하는 문자열의 인덱스 반환
    - replace → 대체된 문자열 반환
- 플래그
    - g → 모든 문자 일치 (global)
    - i → 영어 대소문자 구분 않고 일치 (ignore case)
    - m → 여러 줄 일치 (multi line) → 멀티라인에 대해 검색
- 패턴
    - ^ab → 줄 시작에 있는 ab와 일치
    - ab& → 줄 끝에 있는 ab와 일치
    - `\.` → 임의의 한 문자와 일치
    - a|b → a 또는 b와 일치
    - ab? → b가 없거나 b와 일치
    - {3} → 3개 연속 일치
    - {3,} → 3개 이상 연속 일치
    - {3,5} → 3개 이상 5개 이하 연속 일치
    - [abc] → a 도는 b 또는 c
    - [a-z] / [A-Z] / [0-9] / [가-힣]
    - \w → 대소영문 + 숫자 + _ ← 63개
    - \b → `~\w` 문자경계
    - \d → 숫자
    - \s → 공백에 일치
    - (?=) → 앞 쪽 일치 부분 검색
    - (?≤) → 뒤 쪽 일치 부분 검색

```jsx
// 생성자 함수 방식
// new RegExp("표현", "옵션")
let regexp1 = new RegExp("^abc")
let regexp2 = new RegExp("^abc", "gi")

// 리터럴 방식
// /표현/옵션
regexp1 = /^abc/
regexp2 = /^abc/gi
// gi -> 일치하는 모든 문자 g & 대소문자 구분 안 함 i
// python에서는 re.findall과 re.search를 씀
let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// let regxp = new RegExp('the', 'gi')
let regxp = /the/gi
// console.log(str.match(regxp))

regxp = /fox/gi
// console.log(regxp.test(str))
// console.log(str.replace(regxp, 'AAA'))
// test, replace method

// 플래그
regexp = /\.$/gim
// console.log(str.match(regexp))

// 패턴(표현)
regexp = /^t/gm
// console.log(str.match(regexp))

regexp = /https?/g
// console.log(str.match(regexp))

// console.log(str.match(/\b\w{2,3}\b/g))
// \w -> 숫자를 포함 영어 알파벳
// \b \w \b ~(숫자를 포함 영어 알파벳) 경계 안의 단어

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// 소문자 f로 시작하는 모든 영단어

// console.log(
//   str.match(/.{1,}(?=@)/g)
// )
// 앞 쪽 일치

console.log(
  str.match(/(?<=@).{1,}/g)
)
// 뒷 쪽 일치
```