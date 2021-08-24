type Gender = 'M' | 'F' | 'Others' | 'Unknown'

interface Person {
  name: string
  birthday?: Date
  gender: Gender
}

class Character implements Person {
  name: string
  birthday: Date
  gender: Gender

  constructor(params: Person) {
    this.name = params.name
    this.birthday = new Date()
    this.gender = params.gender
  }

  get age() {
    const now = new Date()
    const birthday = this.birthday
    return now.getFullYear() - birthday.getFullYear()
  }

}

function test(): Person {
  //  TypeError: value of 'gender' is not allowed 'Test'
  // const child = new Child({ name: 'John', gender: 'Test' })
  const char = new Character({ name: 'John', gender: 'Unknown' })

  return char
}

console.log(test())