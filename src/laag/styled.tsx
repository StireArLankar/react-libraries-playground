import styled from '@emotion/styled/macro'

export const SBox = styled('div')<{}>`
  width: 150px;
  height: 100px;
  background-color: #e7f5ff;
  border-width: 1px;
  border-color: #d8d6d9;
  transition: opacity 250ms, transform 250ms;
  opacity: 0;
  transform: scale(0.5);
  display: grid;
  place-items: center;
`
