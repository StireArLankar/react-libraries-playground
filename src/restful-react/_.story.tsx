import React from 'react'
import Component from '.'
import ErrorComponent from './error'

export default {
  title: 'Restful React',
  component: Component,
}

export const example = () => <Component />
export const errorExample = () => <ErrorComponent />
