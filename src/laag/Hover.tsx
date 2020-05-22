import React from 'react'
import { useToggleLayer, useHover } from 'react-laag'
import { ResizeObserver } from '@juggle/resize-observer'

export default () => {
  const triggerRef = React.useRef<HTMLDivElement>(null)

  const [element, toggleLayerProps] = useToggleLayer(
    ({ layerProps, isOpen }) =>
      isOpen && (
        <div
          ref={layerProps.ref}
          style={{ ...layerProps.style, padding: 10, background: 'teal', borderRadius: 5 }}
        >
          Hello world
        </div>
      ),
    { ResizeObserver }
  )

  const hoverProps = useHover({
    delayEnter: 300,
    delayLeave: 200,
    onShow: () => toggleLayerProps.openFromRef(triggerRef),
    onHide: () => toggleLayerProps.close(),
  })

  return (
    <>
      {element}
      <div ref={triggerRef} {...hoverProps}>
        hover me!
      </div>
    </>
  )
}
