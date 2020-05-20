import React from 'react'
import Component from '.'
import { number } from '@storybook/addon-knobs'
import FetchStory from '../restful-react/FetchStory'

export default {
  title: 'Restful React + Mobx',
  component: Component,
}

const mockData = {
  id: 5,
  category: { id: 5, name: 'MOCK NAME' },
  name: 'MOCK',
  photoUrls: ['MOCK URL'],
  tags: [{ id: 5, name: 'MOCK NAME' }],
  status: 'available',
}

export const example = () => {
  const id = Math.min(number('id', 5), 5)

  return <Component id={id} />
}

export const mockExample = () => {
  const id = Math.min(number('id', 5), 5)

  return (
    <FetchStory
      silent
      throttle={2000}
      mocks={[
        {
          matcher: 'https://petstore.swagger.io/v2/pet/5',
          response: {
            body: JSON.stringify(mockData),
          },
          method: 'GET',
        },
      ]}
    >
      <Component id={id} />
    </FetchStory>
  )
}

export const mockError = () => {
  const id = Math.min(number('id', 5), 5)

  return (
    <FetchStory
      silent
      throttle={2000}
      mocks={[
        {
          matcher: 'https://petstore.swagger.io/v2/pet/5',
          response: {
            status: 404,
          },
          method: 'GET',
        },
      ]}
    >
      <Component id={id} />
    </FetchStory>
  )
}
