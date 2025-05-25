import { schema } from './schema'
const integrationList = require('./integration-list.json')

describe('integration-list.json', () => {
  it('complies with schema', async () => {
    const result = await schema.safeParse(integrationList)
    expect(result.success).toBe(true)
  })
})
