import React from 'react'
import { css as csss, cx, keyframes } from 'emotion/macro'
import styled from '@emotion/styled/macro'

const Button = styled.button<{ primary?: boolean; width: number }>`
  color: ${(props) => (props.primary ? 'hotpink' : 'turquoise')};
  display: grid;
  border: 2px solid black;
  width: ${(props) => props.width}px;
`

type ImageProps = {
  src: string
  width: number
}

const Image0 = styled('div')<ImageProps>`
  width: ${(props) => props.width}px;
  background: url(${(props) => props.src}) center center;
  background-size: contain;
  color: black;
`

const color = 'darkgreen'
const isDanger = true

const container = csss({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 100px)',
  width: '100%',
  gridGap: 20,
})

const cs1 = csss`
  background-color: hotpink;
  &:hover {
    color: ${color};
  }
`

const cs2 = csss({
  backgroundColor: 'hotpink',
  '&:hover': {
    color,
  },
})

const cs3 = csss([
  {
    backgroundColor: 'hotpink',
    '&:hover': {
      color,
    },
  },
  isDanger && {
    color: 'red',
  },
])

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const cs4 = csss`
  width: 96px;
  height: ${96}px;
  border-radius: 50%;
  animation: ${bounce} 1s ease infinite;
  transform-origin:center bottom;
`

export default () => {
  return (
    <div className={container}>
      <div className={cs1}>test</div>
      <div className={cs2}>test2</div>
      <div className={cx(cs3, cs4)}>test3</div>
      <div>
        <Button primary width={50}>
          hotpink
        </Button>
      </div>
      <div>
        <Button width={100}>turquoise</Button>
      </div>
      <Image0 src='https://picsum.photos/200' width={100} />
    </div>
  )
}
