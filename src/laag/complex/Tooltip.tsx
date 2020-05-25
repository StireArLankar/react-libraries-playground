import React, { forwardRef } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from '@emotion/styled/macro'

const TooltipBase = styled(animated.div)`
  background-color: #333;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  line-height: 1.15;
  border-radius: 3px;
`

export default forwardRef<any, any>(({ style, className, isOpen, children }, ref) => {
  const transitions = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: `scale(0.9)`,
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: `scale(0.9)`,
    },
    config: {
      tension: 800,
      friction: 60,
    },
  })

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <TooltipBase ref={ref} key={key} style={{ ...props, ...style }} className={className}>
              {children}
            </TooltipBase>
          )
      )}
    </>
  )
})
