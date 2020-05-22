import React from 'react'
import { useToggleLayer, anchor, Arrow, Transition, useBreakpoint } from 'react-laag'
import styled from '@emotion/styled/macro'
import { ResizeObserver } from '@juggle/resize-observer'

const SBox = styled('div')<{}>`
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

export default () => {
  const [element, { isOpen, close, openFromMouseEvent }] = useToggleLayer(
    // render the layer
    ({ layerProps, isOpen, arrowStyle, layerSide }) => (
      <Transition isOpen={isOpen}>
        {(isOpen, onTransitionEnd) => (
          <SBox
            ref={layerProps.ref}
            onTransitionEnd={onTransitionEnd}
            style={{
              ...layerProps.style,
              opacity: isOpen ? 1 : 0,
              transform: `scale(${isOpen ? 1 : 0.5})`,
            }}
          >
            Layer{' '}
            <Arrow
              style={arrowStyle}
              layerSide={layerSide}
              backgroundColor='#e7f5ff'
              borderWidth={1}
              borderColor='#d8d6d9'
              roundness={0.5}
            />
          </SBox>
        )}
      </Transition>
    ),
    {
      placement: { anchor: anchor.BOTTOM_CENTER, triggerOffset: 10, autoAdjust: true },
      closeOnOutsideClick: true,
      ResizeObserver,
    }
  )

  const isMobile = window.matchMedia && useBreakpoint(480)

  console.log(isMobile, element)

  const toggle = isOpen ? close : openFromMouseEvent

  return (
    <div>
      {element}
      <div onClick={toggle} style={{ userSelect: 'none' }}>
        Click me!
      </div>
    </div>
  )
}
