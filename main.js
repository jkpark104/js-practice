// JS 데이터

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