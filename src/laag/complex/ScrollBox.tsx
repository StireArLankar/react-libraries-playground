import React, { useRef, useEffect, cloneElement } from 'react'
import styled from '@emotion/styled/macro'

const WIDTH = 500
const HEIGHT = 380
const SCROLL_SIZE = 2000

const ScrollBoxBase = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: auto;
  background-color: #f9fafb;
  margin-top: 32px;
`

export default ({ children }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const childRef = useRef<any>(null)

  useEffect(() => {
    const element = scrollRef.current
    const child = childRef.current

    const childBox = child ? child.getBoundingClientRect() : { width: 200, height: 50 }

    if (element) {
      element.scrollLeft = SCROLL_SIZE / 2 - WIDTH / 2 + childBox.width / 2
      element.scrollTop = SCROLL_SIZE / 2 - HEIGHT / 2 + childBox.height / 2
    }
  }, [])

  return (
    <ScrollBoxBase ref={scrollRef}>
      {cloneElement(children, {
        style: {
          position: 'relative',
          left: SCROLL_SIZE / 2,
          top: SCROLL_SIZE / 2,
          ...children.props.style,
        },
        ref: childRef,
      })}
      <div style={{ width: SCROLL_SIZE, height: SCROLL_SIZE }} />
    </ScrollBoxBase>
  )
}
