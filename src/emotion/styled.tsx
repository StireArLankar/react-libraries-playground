import styled, { CreateStyled } from '@emotion/styled/macro'

export type Theme = {
  color: {
    primary: string
    positive: string
    negative: string
  }
}

export default styled as CreateStyled<Theme>
