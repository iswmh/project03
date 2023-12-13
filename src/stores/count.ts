import { defineStore } from 'pinia'

const useCountStore = defineStore('countstore', {
  state: () => ({
    count: 10
  }),
  getters: {
    doublecount: (state) => {
      return state.count * 2
    }
  },
  actions: {
    addcount() {
      this.count++
    }
  }
})

export default useCountStore
