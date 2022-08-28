const actor = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['apu', 'razz', 'shihab', 'salam'],
    movies: [{ name: 'no 1', year: 2015 }, { name: 'king khan', year: 2017 }],
    act: function () {
        console.log('action acting')
    },
    car: {
        brand: 'tesla',
        tk: 5000000,
        made: 2022,
        manufacturar: {
            name: 'tesla',
            ceo: 'Elon Mask',
            ceo: 'usa'
        }
    }

}

// console.log(student.car);
console.log(actor.act);
actor.act();

