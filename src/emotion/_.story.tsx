import React from 'react'
import Component from '.'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'

export default {
  title: 'Emoticon',
  component: Component,
  decorators: [
    withCenteredStyle({
      width: '100%',
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

export const example = () => <Component />
