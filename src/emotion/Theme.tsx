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

const Snap = styled('span')<{}>``

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
  & > ${Snap} {
    position: absolute;
    background: linear-gradient(red 0%, blue 100%);
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  & > span {
    opacity: 0.4;
  }
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
    <Button {...props}>
      {children}
      <Snap />
    </Button>
  </ThemeProvider>
)
