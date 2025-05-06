import { schema } from './schema'
const integrationList = require('./integration-list.json')

describe('integration-list.json', () => {
  it('complies with schema', () => {
    const validationResult = schema.validate(integrationList)
    expect(validationResult.error).toBe(undefined)
  })
})
