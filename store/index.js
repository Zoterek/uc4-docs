export const state = () => ({
  title: '',
  app: null,
  step: 0
})

// addUserToGroup Module TODO in the future has to be renamed, moved to a separate file and loaded dynamically
const userData = {
  namespaced: true,
  state: {
    client: 0,
    users: '',
    groups: ''
  },
  mutations: {
    updateClient: (state, value) => {
      state.client = value
    },
    updateUsers: (state, value) => {
      state.users = value
    },
    updateGroups: (state, value) => {
      state.groups = value
    }
  },
  getters: {
    input: (state) => {
      return {
        client: state.client,
        users: state.users.trim().split('\n'),
        groups: state.groups.trim().split('\n')
      }
    }
  }
}

export const modules = {
  userData: userData
}



export const mutations = {
  updateTitle(state, title) {
    // Sets the title name and replaces first letter of words longer than 2 letters to upper case
    state.title = title.toLowerCase().replace(/(\w{3,})/g, e => e[0].toUpperCase() + e.substring(1))
  },
  updateApp(state, value) {
    state.app = value
  },
  updateStep(state, value) {
    state.step = value
  }
}
