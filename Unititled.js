function result (a, b){
    return a + b;
}
console.log(result(5, 20));

var arr = [1, 'Igor', 3.2, 'f', ['ggggg']];
for (var i = 0; i < arr.length; i++){

    console.log(arr[i]);
}

arr.forEach(function(element){
console.log(element);
})
    
let students = [
    {
        firstName: 'Ivan',
        lastName:  'Aleksienko',
        ratting:   '75'
    },
    {
        firstName: 'Nazar',
        lastName:  'Bochnak',
        ratting: '90'
    },
   
    {
        firstName: 'Nazar',
        lastName:  'Koshitsky',
        ratting: '90',
    },

    {
        firstName: 'Tetyana',
        lastName:  'Romanyuk',
        ratting: '90',
    },

    {
        firstName: 'Tetyana',
        lastName:  'Palianytsa',
        ratting: '92',
    },
    {
        firstName: 'Igor',
        lastName:  'Mandzyuk',
        ratting: '89',
    },
    {
        firstName: 'Ivan',
        lastName:  'Melnichuk',
        ratting: '78',
    },
    {
        firstName: 'Petro',
        lastName:  'Podminohin',
        ratting: '76',
    },
    {
        firstName: 'Oleg',
        lastName:  'Batun',
        ratting: '60',
    },
    {
        firstName: 'Bohdan',
        lastName:  'Timchishin',
        ratting: '79',
    },
]

const sortObj = (arr, prop) => {
    let compare = (a, b) => a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : -1; //Сортування.
    arr.sort(compare);
}


    const compare = (arr, key, callback) => arr.reduce((prev, curr) => 
    (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const rateMin = compare(students, 'ratting', (a, b) => a < b); 
    const rateMax = compare(students, 'ratting', (a, b) => a > b); 

    
    function ah () { //
    let sum=0;
    for (const key in students){
        sum += +students[key].ratting;
         
       };
    let avg = Math.ceil(sum/students.length);
    return avg.toString();
    }



            function rate (){ 
                for (const key in students) {
                 let value;
                  value = Math.round(((rateMax/students[key].ratting)*100)-100);
                  students[key].rate = value; 
                    }
                }

sortObj(students, 'firstName'); 
 console.log(students); 
 console.log('\n')
 sortObj(students, 'lastName'); 
 console.log(students);
 console.log('\n')
 sortObj(students, 'ratting');
 console.log(students);
 
 console.log('\n');


 console.log('Максимальне, мінімальне та середне значення'+'\n'+`Min value: ${rateMin}, max value: ${rateMax}`); 
 console.log(students.find(x => x.ratting === ah()));     //Ah value
 console.log(students.find(x => x.ratting === rateMin));   //Min ratting
 console.log(students.find(x => x.ratting === rateMax));   //Max ratting
            
            rate();
    console.log('\n'+'Додавання поля rate: ')
   console.log(students);
