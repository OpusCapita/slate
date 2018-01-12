
/**
 * Polyfills.
 */

import 'babel-polyfill' // eslint-disable-line import/no-extraneous-dependencies

/**
 * Dependencies.
 */

import Html from '..'
import assert from 'assert'
import fs from 'fs'
import parse5 from 'parse5' // eslint-disable-line import/no-extraneous-dependencies
import { Value, resetKeyGenerator } from 'slate'
import { basename, extname, resolve } from 'path'

/**
 * Reset Slate's internal key generator state before each text.
 */

beforeEach(() => {
  resetKeyGenerator()
})

/**
 * Tests.
 */

describe('slate-html-serializer', () => {
  describe('deserialize()', () => {
    const dir = resolve(__dirname, './deserialize')
    const tests = fs.readdirSync(dir).filter(t => t[0] != '.').map(t => basename(t, extname(t)))

    // for (const test of tests) {
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      it(test, async () => {
        const module = require(resolve(dir, test))
        const { input, output, config, options } = module
        const html = new Html({ parseHtml: parse5.parseFragment, ...config })
        const value = html.deserialize(input, options)
        const actual = Value.isValue(value) ? value.toJSON() : value
        const expected = Value.isValue(output) ? output.toJSON() : output
        assert.deepEqual(actual, expected)
      })
    }
  })

  describe('serialize()', () => {
    const dir = resolve(__dirname, './serialize')
    const tests = fs.readdirSync(dir).filter(t => t[0] != '.').map(t => basename(t, extname(t)))

    // for (const test of tests) {
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      it(test, async () => {
        const module = require(resolve(dir, test))
        const { input, output, rules, options } = module
        const html = new Html({ rules, parseHtml: parse5.parseFragment })
        const string = html.serialize(input, options)
        const actual = string
        const expected = output
        assert.deepEqual(actual, expected)
      })
    }
  })
})
