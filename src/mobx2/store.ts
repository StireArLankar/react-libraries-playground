import { observable, computed, action } from 'mobx'

class Store {
  @observable
  __cities: string[] = []

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

export const createStore = () => {
  const store = {
    __cities: observable.array<string>([]),
    query: observable.box(''),
    setQuery(query: string) {
      store.query.set(query.toLowerCase())
    },
    pushCity(city: string) {
      store.__cities.push(city)
    },
    get cities() {
      return this.__cities.slice()
    },
    get filteredCities() {
      return this.__cities.filter((city) => city.toLowerCase().includes(store.query.get()))
    },
  }

  return new Store()
  // return store
}

export type TStore = ReturnType<typeof createStore>
