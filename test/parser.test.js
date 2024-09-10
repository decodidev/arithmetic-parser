import 'chai/register-should.js'
import { readFile } from 'fs/promises'
import { parse } from '../src/parser.js'

const getTests = async (name) => JSON.parse(
  await readFile(new URL(`./${name}.test.json`, import.meta.url))
)

const parserTests = await getTests('parser')

describe('Parser', function () {
  describe('parse', function () {

    parserTests.forEach(({ expression, expected }) => {

      it(`Test "${expression}"`, function () {
        const result = parse(expression)
        result.should.be.eql(expected)
      })
        
    })
    
  })
})