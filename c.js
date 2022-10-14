//Q-1) Write a program to pass spread operator as argument and rest operator as parameter of a function

function oper (...b) { //Rest operator
  let a = [7,8,9]
  
  c = b.sort()
  arr = [...a,...c] //spread operator
  console.log(arr)

  function sumArr(arr){
      let sum = arr.reduce((acc,val) => (acc+val))
      console.log(sum)
  }
  return sumArr
}

(oper(1,3,4,2,3,4)(arr))