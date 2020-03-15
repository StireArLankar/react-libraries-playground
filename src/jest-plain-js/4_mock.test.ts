export const map = <T>(arr: T[], cb: (item: T, index?: number) => any) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]))
  }

  return result
}

describe('Map', () => {
  let array: any[]
  let fn = jest.fn((x) => x ** 2)

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn((x) => x ** 2)
    map(array, fn)
  })

  test('should call callback', () => {
    expect(fn).toBeCalled()
  })

  test('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })

  test('should fn work', () => {
    fn.mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue(400)

    expect(fn(1)).toBe(100)
    expect(fn(1)).toBe(200)
    expect(fn(1)).toBe(400)
    expect(fn(1)).toBe(400)
  })

  test('should return array', () => {
    expect(map(array, Math.floor)).toBeInstanceOf(Array)
  })
})
