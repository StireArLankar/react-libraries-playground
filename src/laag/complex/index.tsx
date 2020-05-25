import React from 'react'
import { ToggleLayer } from 'react-laag'
import ResizeObserver from 'resize-observer-polyfill'

import { ITEM_SIZE, MARGIN_RIGHT } from './constants'

import { Image } from '@styled-icons/boxicons-regular/Image'
import { PlayCircle as Video } from '@styled-icons/boxicons-regular/PlayCircle'
import { Music } from '@styled-icons/boxicons-solid/Music'
import { File } from '@styled-icons/boxicons-regular/File'
import { LocationOn as Location } from '@styled-icons/material/LocationOn'
import { Code } from '@styled-icons/boxicons-regular/Code'

import Button from './Button'
import Menu from './Menu'
import ScrollBox from './ScrollBox'

const items = [
  { Icon: Image, value: 'image', label: 'Image' },
  { Icon: Video, value: 'video', label: 'Video' },
  { Icon: Music, value: 'music', label: 'Music' },
  { Icon: File, value: 'file', label: 'File' },
  { Icon: Location, value: 'location', label: 'Location' },
  { Icon: Code, value: 'code', label: 'Code' },
]

export default () => (
  <ScrollBox>
    <div>
      <ToggleLayer
        ResizeObserver={ResizeObserver}
        placement={{
          anchor: 'CENTER',
          autoAdjust: true,
          snapToAnchor: true,
          triggerOffset: 12,
          possibleAnchors: ['TOP_CENTER', 'BOTTOM_CENTER', 'LEFT_CENTER', 'RIGHT_CENTER'],
          layerDimensions: (layerSide) => ({
            width: layerSide === 'center' ? 160 : (ITEM_SIZE + MARGIN_RIGHT) * 6,
            height: layerSide === 'center' ? 140 : ITEM_SIZE,
          }),
        }}
        renderLayer={({ isOpen, layerProps, close, layerSide }) => (
          <Menu close={close} layerSide={layerSide} isOpen={isOpen} items={items} {...layerProps} />
        )}
      >
        {({ triggerRef, toggle, isOpen }) => (
          <Button ref={triggerRef} onClick={toggle} isOpen={isOpen} />
        )}
      </ToggleLayer>
    </div>
  </ScrollBox>
)
