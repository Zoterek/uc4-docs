export const state = () => ({
  title: '',
  app: null,
  step: 0,
  userInput: {
    client: 0,
    users: '',
    groups: ''
  }
})

export const mutations = {
  updateTitle(state, title) {
    state.title = title.toLowerCase().replace(/(\w{3,})/g, e => e[0].toUpperCase() + e.substring(1))
  },
  updateApp(state, value) {
    state.app = value
  },
  updateClient(state, value) {
    state.userInput.client = value
  },
  updateUsers(state, value) {
    state.userInput.users = value
  },
  updateGroups(state, value) {
    state.userInput.groups = value
  },
  updateStep(state, value) {
    state.step = value
  }
}
