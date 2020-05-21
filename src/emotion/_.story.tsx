import { radios } from '@storybook/addon-knobs'
import React from 'react'
import Component from '.'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'
import Button, { Color } from './Theme'
import ButtonV1 from './Theme copy'

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

export const themeExample = () => (
  <ButtonV1 color={radios('color', Color, Color.primary)}>Hello world</ButtonV1>
)

export const nestedSelector = () => (
  <Button color={radios('color', Color, Color.primary)}>Hello world</Button>
)
