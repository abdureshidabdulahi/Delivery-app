 

let array = [
    {
        name:'abdu',
        age:12,
        school:'ayer amba'
    },
    {
        name:'samiir',
        age:23,
        school:'bale'
    }
]

for(let key of array){
    console.log(key)
    for(let n in key){
        console.log(key[n])
    }
}