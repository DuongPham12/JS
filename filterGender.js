/**
 * Give a list of students, filter out non-female 
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

function filterOutFemales(members) {
    // your code here!
    var output = members.filter(function(i) {
        if (i.gender !== 'female')
            return i.name
    })
    console.log(output)


}
filterOutFemales(members)