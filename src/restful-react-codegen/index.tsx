import React from 'react'
import { useFindPetsByStatus } from './requests'
import { RestfulProvider } from 'restful-react'
import { Button } from '@material-ui/core'

export default () => {
  return (
    <RestfulProvider base='http://petstore.swagger.io/v2'>
      <Temp />
    </RestfulProvider>
  )
}

const Temp = () => {
  const { data, loading, error, refetch } = useFindPetsByStatus({
    queryParams: { status: ['sold'] },
    queryParamStringifyOptions: { arrayFormat: 'repeat' },
  })

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <Button onClick={() => refetch()} variant='contained' color='primary'>
          Refetch
        </Button>
      </div>
    )
  }

  if (loading || !data) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ width: 50, height: 50, background: 'red', borderRadius: '50%' }} />
      </div>
    )
  }

  const renderData = () =>
    data.map((item) => (
      <pre
        key={item.id}
        style={{
          maxWidth: '90vw',
          overflow: 'auto',
          borderBottom: '2px solid black',
          width: '100%',
        }}
      >
        {JSON.stringify(item, null, 2)}
      </pre>
    ))

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'flex-start' }}>
      {renderData()}
    </div>
  )
}
