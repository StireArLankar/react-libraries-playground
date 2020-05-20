import React from 'react'
import StoreProvider from './mobx/context'
import '../App.css'
import { Sibling, Temp, NonRender } from './restful/temp'
import { RestfulProvider } from 'restful-react'

export default ({ id }: any) => {
  return (
    <RestfulProvider base='https://petstore.swagger.io/v2'>
      <StoreProvider>
        <div className='App'>
          <header className='App-header'>
            <NonRender />
            <Sibling />
            <Temp petId={id} />
          </header>
        </div>
      </StoreProvider>
    </RestfulProvider>
  )
}
