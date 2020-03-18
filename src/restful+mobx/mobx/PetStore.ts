import { observable, action } from 'mobx'
import { Pet } from '../restful/requests'
import { GetDataError } from 'restful-react'

class PetStore {
  @observable
  order: Pet | null = null

  @observable
  loading = true

  @observable
  error: GetDataError<void> | null = null

  @action
  set = ({
    order,
    loading,
    error,
  }: {
    order: Pet | null
    loading: boolean
    error: GetDataError<void> | null
  }) => {
    this.order = order
    this.loading = loading
    this.error = error
  }

  @action
  nothing = () => console.log('nothing')
}

export const createPetStore = () => new PetStore()

export type TPetStore = ReturnType<typeof createPetStore>
