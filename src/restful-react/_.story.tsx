import React from 'react'
import Component from '.'
import ErrorComponent from './error'

import FetchStory from './FetchStory'

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

const mockData: Posts[] = [
  {
    userId: 1,
    id: 1,
    title: 'mockTitle',
    body: 'mockBody',
  },
]

export default {
  title: 'Restful React',
  component: Component,
}

export const example = () => <Component />
export const errorExample = () => <ErrorComponent />
export const mockExample = () => {
  return (
    <FetchStory
      silent
      throttle={2000}
      mocks={[
        {
          matcher: 'https://jsonplaceholder.typicode.com/posts',
          response: {
            body: JSON.stringify(mockData),
          },
          method: 'GET',
        },
      ]}
    >
      <Component />
    </FetchStory>
  )
}
export const mockErrorExample = () => {
  return (
    <FetchStory
      silent
      throttle={2000}
      mocks={[
        {
          matcher: 'https://jsonplaceholder.typicode.com/posts',
          response: {
            status: 404,
          },
          method: 'GET',
        },
      ]}
    >
      <Component />
    </FetchStory>
  )
}
