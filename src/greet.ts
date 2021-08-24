function greet(person: string, date?: Date) {
  console.log(`Hello ${person}, today is ${date?.toDateString() ?? 'UNKNOWN_DATE'}`)
}

//  if want to secondary parameter as optional, add '?' (as optional property) in 2nd parameter name
greet('brendan')

//  Date() => string: TypeError
// greet('brendan', Date())

greet('Maddison', new Date())