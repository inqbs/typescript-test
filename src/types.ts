/* type */

// 1. type of parameter in function
function greet2(name: String) {
  console.log(`Hello, ${name.toUpperCase()}!!`)
}

//  TypeError
// greet(41)

// 2. type of return in function
//  it is omittable
function getFavoriteNumber()/* : number */ {
  return Math.random() * 65536
}

//  TypeError
// let hoge:string = getFavoriteNumber()
const hoge: number = getFavoriteNumber()

//  3. type in arrow function
const words = ['a', 'b', 'c', 'd', 'e']
//  TypeError in .map()
// const joinedWords = words.map(it=>it.toUppercase()).join(':')
const joinedWords = words.map(it => it.toUpperCase()).join(':')

/* union types */

// 1. union type
function unionPrint(id: number | string) {
  //  TypeError: number.toUpperCase is not exist
  // console.log(`id is ${id.toUpperCase()}`);

  //  toLocaleString is exist both type (number, string)
  console.log(`id is ${id.toLocaleString()}`);

  //  typescript can inference type on if/switch
  switch (typeof id) {
    case 'string':
      id.toUpperCase()
      break
    case 'number':
      //  TypeError
      // id.toUpperCase()
      break
  }
}


