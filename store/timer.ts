import { Timer } from '~/models/timer'

export const state = () => ({
  list: []
})

export const mutations = {
  add (state: any, timer: Timer) {
    state.list.push({
      timer,
      done: false
    })
  },
  remove (state: any, timer: Timer) {
    state.list.splice(state.list.indexOf(timer), 1)
  }
}
