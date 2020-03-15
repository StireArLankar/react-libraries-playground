import axios from 'axios'

export class Ajax {
  static echo(data: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error('error'))
        }
      })
    })
  }

  static async get() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}

describe('Ajax.echo', () => {
  test('should return value async', async () => {
    const res = await Ajax.echo('some data')
    expect(res).toBe('some data')
  })

  test('should return value with promise', () => {
    return Ajax.echo('some data').then((data) => {
      expect(data).toBe('some data')
    })
  })

  test('should catch error', async () => {
    try {
      await Ajax.echo('')
    } catch (err) {
      expect(err.message).toBe('error')
    }
  })

  test('should catch error with promise', () => {
    return Ajax.echo(null).catch((err) => expect(err).toBeInstanceOf(Error))
  })
})

jest.mock('axios')

describe('Ajax get', () => {
  let response: any
  let todos: any

  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }]

    response = {
      data: {
        todos,
      },
    }
  })

  test('should return data from backend', async () => {
    ;(axios.get as any).mockReturnValue(response)

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos)
    })
  })
})
