import React from 'react'
import { CssBaseline } from '@material-ui/core'

export const withCenteredStyle = (style = {}) => (storyfn: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <CssBaseline />
      <div
        style={{
          width: 300,
          display: 'flex',
          justifyContent: 'center',
          ...style,
        }}
      >
        {storyfn()}
      </div>
    </div>
  )
}
