import AddUserToGroup from '~/components/descriptions/AddUserToGroup'

export default [
  {
    name: 'uc4_addUserToGroup',
    version: '',
    description: AddUserToGroup,
    to: '/addusertogroup',
    external: [
      { name: 'git', icon: 'fab fa-github', url: '', tooltip: 'github' },
      { name: 'jar', icon: 'fas fa-file-download', url: '', tooltip: '.jar' }
    ]
  }
]
