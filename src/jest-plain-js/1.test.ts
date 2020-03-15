export const sum = (a: number, b: number) => a + b

const nativeNull = () => null

describe('Sum function', () => {
  test('test', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(0.1, 0)).toBe(0.1)
    expect(sum(1, 1)).toBe(2)
    expect(sum(1, 3)).toEqual(4)
  })

  test('should return value', () => {
    expect(sum(1, 1)).toBeGreaterThan(1)
    expect(sum(1, 1)).toBeGreaterThanOrEqual(2)
  })

  test('should sum floats correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Null function', () => {
  test('test', () => {
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
  })
})
