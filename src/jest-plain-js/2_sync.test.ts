export class Lodash {
  compact(arr: any[]) {
    return arr.filter(Boolean)
  }

  groupBy<T extends any>(array: T[], prop: ((arg: T) => string | number) | string) {
    return array.reduce((acc, cur) => {
      const key = typeof prop === 'function' ? prop(cur) : cur[prop]
      if (acc[key]) {
        acc[key].push(cur)
      } else {
        acc[key] = [cur]
      }
      return acc
    }, {} as Record<string, T[]>)
  }
}

let _ = new Lodash()

describe('Lodash.compact', () => {
  let arr: any[]

  afterAll(() => {
    _ = new Lodash()
  })

  beforeEach(() => {
    arr = [false, null, undefined, 0, '', 42, true, 'hello']
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeNull()
  })

  test('should NOT contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(null)
    expect(_.compact(arr)).not.toContain(undefined)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
  })

  test('should remove falsy values from array', () => {
    const res = [42, true, 'hello']
    expect(_.compact(arr)).toEqual(res)
  })
})

describe('Lodash.groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeNull()
  })

  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(res)
  })

  test('should group array items by length', () => {
    const arr = ['one', 'two', 'three']
    const res = {
      5: ['three'],
      3: ['one', 'two'],
    }
    expect(_.groupBy(arr, 'length')).toEqual(res)
  })

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})
