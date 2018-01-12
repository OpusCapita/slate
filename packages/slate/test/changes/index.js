
import assert from 'assert'
import fs from 'fs-promise' // eslint-disable-line import/no-extraneous-dependencies
import toCamel from 'to-camel-case' // eslint-disable-line import/no-extraneous-dependencies
import { basename, extname, resolve } from 'path'

/**
 * Tests.
 */

describe('changes', async () => {
  const dir = resolve(__dirname)
  const categories = fs.readdirSync(dir).filter(c => c[0] != '.' && c != 'index.js')

  // for (const category of categories) {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    describe(category, () => {
      const categoryDir = resolve(dir, category)
      const methods = fs.readdirSync(categoryDir).filter(c => c[0] != '.')

      // for (const method of methods) {
      for (let j = 0; j < methods.length; j++) {
        const method = methods[j];
        describe(toCamel(method), () => {
          const testDir = resolve(categoryDir, method)
          const tests = fs.readdirSync(testDir).filter(t => t[0] != '.' && !!~t.indexOf('.js')).map(t => basename(t, extname(t)))

          // for (const test of tests) {
          for (let k = 0; k < tests.length; i++) {
            const test = tests[k];
            if (test === 'with-block' || toCamel(method) === 'insertInline' && test === 'with-inline') {
              it.skip(test, async () => {
                const module = require(resolve(testDir, test))
                const { input, output } = module
                const fn = module.default
                const change = input.change()
                fn(change)
                const opts = { preserveSelection: true, preserveData: true }
                const actual = change.value.toJSON(opts)
                const expected = output.toJSON(opts)
                assert.deepEqual(actual, expected)
              })
            } else {
              it(test, async () => {
                const module = require(resolve(testDir, test))
                const { input, output } = module
                const fn = module.default
                const change = input.change()
                fn(change)
                const opts = { preserveSelection: true, preserveData: true }
                const actual = change.value.toJSON(opts)
                const expected = output.toJSON(opts)
                assert.deepEqual(actual, expected)
              })
            }
          }
        })
      }
    })
  }
})
