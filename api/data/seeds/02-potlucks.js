exports.seed = async function (knex) {
    // await knex('potlucks').truncate()
    await knex('potlucks').insert([
        {
            eventName: 'Thanksgiving',
            eventDescription: 'give thanks',
            locationAddress: '123 main st',
            locationStreet: 'main st',
            locationUnit: 'Unit 1',
            locationState: 'Massachussets',
            locationCity: 'Plimith',
            locationCountry: 'USA',
            locationPostcode: '12345'
        },

        {
            eventName: 'Xmas',
            eventDescription: 'Santas coming',
            locationAddress: '2323 Winter way',
            locationStreet: 'Chill st',
            locationUnit: 'Unit 2',
            locationState: 'Alaska',
            locationCity: 'North Pole?',
            locationCountry: 'USA',
            locationPostcode: '32132'
        },

        {
            eventName: 'Halloween',
            eventDescription: 'Spooky season',
            locationAddress: '771 Spooky Road',
            locationStreet: 'Elm Street',
            locationUnit: 'Unit 3',
            locationState: 'California',
            locationCity: 'Spook City',
            locationCountry: 'USA',
            locationPostcode: '654654'
        },

        {
            eventName: 'St Patricks Day',
            eventDescription: 'drink up boy',
            locationAddress: '3218312 Incoherent dr',
            locationStreet: 'blur st',
            locationUnit: 'Unit 4',
            locationState: 'Illinois',
            locationCity: 'Chicago',
            locationCountry: 'USA',
            locationPostcode: '60640'
        },

    ])
}