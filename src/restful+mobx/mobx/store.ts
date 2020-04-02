import { observable, computed, action } from 'mobx'

class Store {
  @observable
  __cities: string[] = ['Amsterdam', 'London', 'Moscow']

  @observable
  query = ''

  @computed
  get cities() {
    return this.__cities.slice()
  }

  @computed
  get filteredCities() {
    return this.cities.filter((city) => city.toLowerCase().includes(this.query))
  }

  @action
  setQuery = (str: string) => {
    this.query = str.toLowerCase()
  }

  @action
  pushCity = (city: string) => {
    this.__cities.push(city)
  }
}

export const createStore = () => new Store()

export type TStore = ReturnType<typeof createStore>
