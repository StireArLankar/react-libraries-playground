import React from 'react'
import Component from '.'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'

export default {
  title: 'Redux toolkit',
  component: Component,
  decorators: [withCenteredStyle({})],
}

export const example = () => <Component />
