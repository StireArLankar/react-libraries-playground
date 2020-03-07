import React from 'react'
import Component from '.'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'

export default {
  title: 'Mobx2',
  component: Component,
  decorators: [withCenteredStyle({ display: 'block', width: '100%' })],
}

export const example = () => <Component />
