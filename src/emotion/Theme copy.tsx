import styled, { Theme } from './styled'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'

export enum Color {
  negative = 'negative',
  positive = 'positive',
  primary = 'primary',
}

type ButtonProps = {
  color?: Color
}

const Button = styled('button')<ButtonProps>`
  padding: 20px;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case Color.negative:
        return theme.color.negative
      case Color.positive:
        return theme.color.positive
      default:
        return theme.color.primary
    }
  }};
  font-size: 20px;
  border-radius: 3px;
  position: relative;
`

const theme: Theme = {
  color: {
    negative: 'red',
    positive: 'green',
    primary: 'blue',
  },
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color: Color
}

export default ({ children, ...props }: Props) => (
  <ThemeProvider theme={theme}>
    <Button {...props}>{children}</Button>
  </ThemeProvider>
)
