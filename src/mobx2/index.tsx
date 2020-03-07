import React from 'react'
import Search from './search'
import CityList, { FullCityList } from './city'
import StoreProvider from './context'
import '../App.css'
import { Add } from './add'

const App = () => (
  <StoreProvider>
    <div className='App'>
      <header className='App-header'>
        <Search />
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <CityList />
          <div style={{ width: 20 }} />
          <FullCityList />
        </div>
        <Add />
      </header>
    </div>
  </StoreProvider>
)

export default App
