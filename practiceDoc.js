let people = [
    {name: 'Ally', age: 20, state: 'NY', hair:'blonde', occupation:'farmer'},
    {name: 'Mike', age: 21, state: 'NJ', hair:'white', occupation:'student'},
    {name: 'Steve', age: 22, state: 'CA', hair:'red', occupation:'librarian'},
    {name: 'Pete', age: 23, state: 'CO', hair:'blue', occupation:'teacher'},
    {name: 'Sally', age: 44, state: 'OH', hair:'brown', occupation:'student'},
    {name: 'Samantha', age: 55, state: 'HI', hair:'grey', occupation:'developer'},
    {name: 'Katie', age: 76, state: 'TN', hair:'white', occupation:'athlete'},
    {name: 'Skylar', age: 47, state: 'NY', hair:'red', occupation:'athlete'},
    {name: 'Jessie', age: 38, state: 'CO', hair:'blonde', occupation:'farmer'},
    {name: 'Tom', age: 19, state: 'CO', hair:'orange', occupation:'farmer'},
    {name: 'Clark', age: 30, state: 'HI', hair:'blonde', occupation:'farmer'},
]
//Old:
let arrOfAges = []
let howOldLoop = function(arr){
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        arrOfAges.push(`${person.name} is ${person.age} years old`);
    }
    return arrOfAges;
}
//New:
let howOld = people.map(person => `${person.name} is ${person.age} years old`);

// console.log(howOld, howOldLoop(people));

let cars = [
    {name: 'Porche', founded: '1931', from: 'Stuttgart, Germany'},
    {name: 'Ferrari', founded: '1947', from: 'Maranello, Italy'},
    {name: 'Ford', founded: '1903', from: 'Detroit, MI'},
    {name: 'Jeep', founded: '1941', from: 'Ohio'},
    {name: 'Land Rover', founded: '1978', from: 'British'},
    {name: 'Audi', founded: '1909', from: 'Zwickau, Germany'},
    {name: 'BMW', founded: '1916', from: 'Munich, Germany'},
    {name: 'Jaguar', founded: '4, 1922', from: 'Blackpool, United Kingdom'},
    {name: 'Mini', founded: '1960', from: 'Britain'},
    {name: 'Subaru', founded: '1953', from: 'Japan'},
    {name: 'Volkswagen', founded: '1937', from: 'Berlin, Germany'},
];

let candy = [
    {name: 'Twix', price: '$1.00'},
    {name: 'Mars', price: '$2.00'},
    {name: 'Milkyway', price: '$1.50'},
    {name: 'Bounty', price: '$2.50'},
    {name: 'KitKat', price: '$1.25'},
];




