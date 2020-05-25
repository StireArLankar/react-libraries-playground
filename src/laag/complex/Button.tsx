import React, { forwardRef } from 'react'
import styled from '@emotion/styled/macro'
import { PRIMARY, PRIMARY_2, BUTTON_SIZE } from './constants'
import { Add } from '@styled-icons/material/Add'

const ButtonBase = styled.button<{ isOpen?: boolean }>`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  color: white;
  border: none;
  background-color: ${(p) => (p.isOpen ? PRIMARY_2 : PRIMARY)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  transform: scale(${(p) => (p.isOpen ? 1.03 : 1)});
  will-change: transform;
  &&:hover {
    background-color: ${PRIMARY_2};
    transform: scale(1.03);
  }
  & svg {
    transition: 0.25s ease-in-out;
    will-change: transform;
    transform: rotate(${(p) => (p.isOpen ? 45 : 0)}deg);
  }
`

interface Props {
  style?: React.CSSProperties
  className?: string
  isOpen?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default forwardRef<any, Props>(({ style, className, isOpen, onClick }, ref) => (
  <ButtonBase ref={ref} style={style} className={className} isOpen={isOpen} onClick={onClick}>
    <Add size={28} />
  </ButtonBase>
))
