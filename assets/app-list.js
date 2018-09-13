import AddUserToGroup from '~/components/descriptions/AddUserToGroup'

export default [
  {
    name: 'uc4_addUserToGroup',
    version: '',
    description: AddUserToGroup,
    to: '/addusertogroup',
    external: [
      { name: 'git', icon: 'fab fa-github', url: 'https://github.com/Zoterek/uc4_addUserToGroup', tooltip: 'github' },
      { name: 'jar', icon: 'fas fa-file-download', url: 'https://github.com/Zoterek/uc4_addUserToGroup/releases/download/v1.0.0/uc4_addUserToGroup-1.0.0.zip', tooltip: '.zip' }
    ]
  }
]
