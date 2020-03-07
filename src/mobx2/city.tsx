import React from 'react'
import { useRootData } from './hook'

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li>{city}</li>
      ))}
    </ul>
  )
}

export const FullCityList = () => {
  const cities = useRootData((store) => store.cities)

  console.count('FullCityList')

  return <CityView cities={cities} />
}

export const CityList = () => {
  const cities = useRootData((store) => store.filteredCities)

  console.count('CityList')

  return <CityView cities={cities} />
}

export default CityList
