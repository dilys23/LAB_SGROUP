// const a = [12, 3, 4, 5, 6];
// a.forEach(myFn) 
// function myFn(para){
//     console.log('haha')
// }

// mainFunction()
// {
// }


Array.prototype.map2 = function(callback)
{
    // var arrayLength = this.length;
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i)
    {
       var result =  callback(this[i], i);
       output.push(result);
    //    console.log('result: ', result);

    }
    // console.log(this);
    return output;
}
var courses = 
[
    'React', 
    'Java', 
    'NodeJS'
];

// courses.map(function(courses) {
//     console.log(courses);
// });

// var htmls = courses.map(function(course) 
// {
//     return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));

var htmls = courses.map2(function(course){
    // console.log(index, course);
    return `<h2>${course}</h2>`;

});

console.log(htmls.join(''));

// forEach, reduce, find, filter
