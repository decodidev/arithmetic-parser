export function parse(exp) {  
  let stack = []
  let current = []
  let str = ''
  let strNum = false

  for (let char of exp) {
    switch (char) {
      case '(':
        str && current.push(str)
        str = ''
        strNum = false
        current.push([])
        stack.push(current)
        current = current[current.length - 1]
        break
      case ')':
        str && current.push(str)
        str = ''
        strNum = false
        current = stack.pop() ?? [current]
        break
      case '+':
      case '-':
      case '*':
      case '/':
        str && current.push(str)
        str = ''
        strNum = false
        current.push(char)
        break
      case ' ':
        str && current.push(str)
        str = ''
        strNum = false
        break
      case '9':
      case '8':
      case '7':
      case '6':
      case '5':
      case '4':
      case '3':
      case '3':
      case '2':
      case '1':
      case '0':
      case '.':
        str = str + char
        strNum = true
        break
      default:
        if (strNum) {
          str && current.push(str)
          current.push('*')
          str = ''
          strNum = false
        } 
        str = str + char
        break
    }
  }
  str && current.push(str)
  stack.push(current)

  return stack[0]
}
