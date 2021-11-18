const fakeEventsData = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          {
            eventName: 'Potluck for Friends',
            eventTime: '6:30p',
            eventLocation: 'My House',
            eventID: 1,
            foodItems: [
              {
                item: '',
                guest: '',
              }
            ],
            eventHost: '',
            eventGuests: []
          },
          {
            eventName: 'Potluck for Enemies',
            eventTime: '6:66p',
            eventLocation: 'Underground',
            eventID: 2,
            foodItems: [
              {
                item: '',
                guest: '',
              }
            ],
            eventHost: '',
            eventGuests: []
          }
        ]
      )
    }, 300)
  })
}

export default fakeEventsData