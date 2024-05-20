const findTheOldest = function(people) {
    let oldestAge = 0
    let oldestPerson 

    for (person of people){
        if (!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear()
        }
        let newAge = person.yearOfDeath - person.yearOfBirth
        if (newAge > oldestAge){
            oldestAge = newAge
            oldestPerson = person
        }
    }
    return oldestPerson

};

// Do not edit below this line
module.exports = findTheOldest;
