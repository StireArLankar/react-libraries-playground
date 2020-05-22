import React from 'react'
import Component from '.'
import Hover from './Hover'
import RenderProps from './RenderProps'
import { withCenteredStyle } from '../_storybook/withCenteredStyle'

export default {
  title: 'React Laag',
  component: Component,
  decorators: [
    withCenteredStyle({
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      height: '100%',
    }),
  ],
}

export const example = () => <Component />

export const hoverExample = () => <Hover />
export const renderPropsExample = () => <RenderProps />
