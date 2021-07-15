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

// 4. 