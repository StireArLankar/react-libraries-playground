import React from 'react'
import { ToggleLayer, Arrow, Transition } from 'react-laag'
import { SBox } from './styled'
import { ResizeObserver } from '@juggle/resize-observer'

export default () => {
  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
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
      )}
      placement={{
        autoAdjust: true,
        triggerOffset: 10,
      }}
    >
      {({ triggerRef, toggle }) => (
        <button ref={triggerRef} className='toggle-btn' onClick={toggle}>
          Toggle
        </button>
      )}
    </ToggleLayer>
  )
}
