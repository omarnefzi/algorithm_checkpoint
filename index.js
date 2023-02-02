
// I) First Task :

let sentence ='Omar love coding too much.'

// 

let chartNum=/[^\W]/g

console.log(`The number of words in the sentence without the space and the point is ${sentence .match(chartNum).length}`)

// The number of vowels

let vowelsNum=/[oiaeu]/ig
console.log(`the number of vowels is ${sentence.match(vowelsNum).length}`)


// _______________________________________##___________________________________________//


// II) Second Task:

let set1= [3, 1, 7, 9]
let set2= [2, 4, 1, 9, 3]
let distinct = []
let allSet=[...set1,...set2]

// 1) result with loop

let sum=[]
for(let i=0;i<allSet.length;i++){
    for(let j=0;j<allSet.length;j++){
        if(allSet[i]==allSet[j] && i!=j){
            break;
        }else if(j==allSet.length-1){
            sum.push(allSet[i])
        }
    }

}
let result=sum.reduce((acc,cur)=> acc+cur)

console.log(` the sum of all distinct elements is ${result}`)

// 2) result with higher order function


allSet.map((d) => {
    return distinct.includes(d)? distinct = distinct.filter((a) => a!=d): distinct.push(d)
})
let finalResult=distinct.reduce((acc,cur)=> acc+cur)
console.log(` the sum of all distinct elements is ${finalResult}`) 