import { describe, expect, it } from 'vitest'

import { foo } from '../src/foo.js'

describe('index.ts', () => {
  it('returns bar', () => {
    expect(foo()).toBe('bar')
  })
})
