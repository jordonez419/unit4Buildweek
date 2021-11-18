const fakeUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          {
            username: 'Amanda',
            password: 'password',
            isOrganizer: true
          },
          {
            username: 'Adan',
            password: 'password',
            isOrganizer: false
          }
        ]
      )
    }, 300)
  })
}

export default fakeUserData